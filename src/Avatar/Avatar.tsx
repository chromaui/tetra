import React, { FC, ComponentProps } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from '../Icon';
import { animations, typography } from '../_helpers';
import { color, fontFamily, fontSize } from '../_tokens';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

type AvatarType = 'user' | 'organization';

const Image = styled.div<Partial<AvatarProps>>`
  background: transparent;
  border-radius: ${(props) => (props.type === 'user' ? '50%' : '5px')};
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${(props) =>
    props.isLoading &&
    css`
      background: ${color.slate100};
      filter: grayscale(1);
    `}

  ${(props) =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;
    `}

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.isLoading && color.cyan500};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const LoadingIcon = styled(Icon)<{ type: AvatarType }>`
  position: relative;
  margin: 0 auto;
  display: block;
  bottom: ${(props) => (props.type === 'user' ? -2 : -4)}px;
  height: ${(props) => (props.type === 'user' ? 100 : 70)}%;
  width: ${(props) => (props.type === 'user' ? 100 : 70)}%;
  vertical-align: top;

  path {
    fill: ${color.slate300};
    animation: ${animations.glow} 1.5s ease-in-out infinite;
  }
`;

// prettier-ignore
const Initial = styled.div<Partial<AvatarProps>>`
  color: ${color.white};
  text-align: center;
  font-family: ${fontFamily.sans};

  font-size: ${fontSize[14]};
  line-height: ${sizes.medium}px;

  ${(props) =>
    props.size === 'tiny' &&
    css`
      font-size: 0.625rem;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${fontSize[12]};
      line-height: ${sizes.small}px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: ${fontSize[16]};
      line-height: ${sizes.large}px;
    `}
`;

interface AvatarProps {
  isLoading?: boolean;
  /** The name of the user (not the nice name) */
  username?: string;
  src?: string;
  /** Specify size */
  size?: keyof typeof sizes;
  type?: AvatarType;
}

export const Avatar: FC<AvatarProps> = ({
  isLoading = false,
  username = 'loading',
  src,
  size = 'medium',
  type = 'user',
  ...props
}) => {
  let avatarFigure = (
    <LoadingIcon
      name={type === 'user' ? 'useralt' : 'repository'}
      type={type}
    />
  );
  const a11yProps: ComponentProps<typeof Image> = {};

  if (isLoading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = (
      <Initial size={size} aria-hidden="true">
        {username.substring(0, 1)}
      </Initial>
    );
  }

  return (
    <Image
      size={size}
      isLoading={isLoading}
      src={src}
      type={type}
      {...a11yProps}
      {...props}
    >
      {avatarFigure}
    </Image>
  );
};
