import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { color, fontWeight, spacing } from '../_tokens';
import { typography } from '../_helpers';
import { Icon } from '../Icon/Icon';
import { LinkWithWrapper } from '../LinkWithWrapper';
import {
  HeaderDesktopPipeline,
  HeaderPipelineLink,
  HeaderPipelineStep,
} from './types';

interface Props {
  pipeline: HeaderDesktopPipeline;
}

const Inside = styled.div`
  display: flex;
  align-items: stretch;
  background-color: ${color.white};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 8px;
  overflow: hidden;
`;

const Steps = styled.div`
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  gap: ${spacing[6]};
  padding: ${spacing[6]} ${spacing[3]};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  min-width: 0;
`;

const Rail = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  padding-left: ${spacing[3]};
  margin-bottom: ${spacing[3]};
`;

const StepTile = styled.div<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ background }) => background || color.slate100};
`;

const Connector = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
  min-width: 0;

  &::before {
    content: '';
    flex: 1 1 0;
    height: 1px;
    background-color: #dde4ea;
  }

  &::after {
    content: '';
    flex: none;
    width: 0;
    height: 0;
    border-top: 3.5px solid transparent;
    border-bottom: 3.5px solid transparent;
    border-left: 6px solid #d9d9d9;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MainList = styled(List)`
  gap: ${spacing[1]};
`;

const SubList = styled(List)`
  padding-top: ${spacing[1]};
`;

const SidebarList = styled(List)`
  gap: ${spacing[1]};
`;

const linkStyles = css`
  position: relative;
  display: flex;
  border-radius: 4px;
  text-decoration: none;
  color: ${color.slate800};
  cursor: pointer;
  outline: none;
  transition: background-color 150ms ease;

  .arrow {
    position: absolute;
    right: ${spacing[5]};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 20px;
    opacity: 0;
    transition:
      right 250ms ease,
      opacity 200ms ease;
  }

  &:hover,
  &:focus-visible {
    background-color: ${color.blue100};

    .arrow {
      right: ${spacing[4]};
      opacity: 1;
    }
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${color.blue500};
  }

  &:active {
    background-color: ${color.blue200};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    .arrow {
      transition: none;
    }
  }
`;

const MainLink = styled(LinkWithWrapper)`
  ${linkStyles}
  flex-direction: column;
  gap: ${spacing[1]};
  padding: ${spacing[3]} ${spacing[12]} ${spacing[3]} ${spacing[3]};

  .arrow {
    top: ${spacing[3]};
  }
`;

const RowLink = styled(LinkWithWrapper)`
  ${linkStyles}
  align-items: center;
  gap: ${spacing[3]};
  padding: ${spacing[2]} ${spacing[12]} ${spacing[2]} ${spacing[3]};

  .arrow {
    top: ${spacing[2]};
  }
`;

const Title = styled.span`
  ${typography.body14}
  line-height: 20px;
  font-weight: ${fontWeight.bold};
  color: ${color.slate800};
`;

const Description = styled.span`
  ${typography.body14}
  line-height: 20px;
  color: ${color.slate600};
`;

const RowLabel = styled.span<{ bold?: boolean }>`
  ${typography.body14}
  line-height: 20px;
  font-weight: ${({ bold }) => (bold ? fontWeight.bold : fontWeight.regular)};
  color: ${color.slate800};
`;

const IconSlot = styled.span<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: ${({ size }) => size}px;
  height: 20px;

  svg {
    display: block;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  gap: ${spacing[4]};
  width: 220px;
  padding: ${spacing[6]} ${spacing[3]};
  background-color: #f8f9fb;
  border-left: 1px solid #e2e8ee;

  @media (min-width: 1200px) {
    width: 265px;
  }
`;

const SidebarTitle = styled.span`
  ${typography.subheading}
  line-height: 16px;
  margin: 0;
  padding-left: ${spacing[3]};
  color: ${color.slate600};
`;

const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    <Icon name="arrowrightalt" size={14} color="blue300" />
  </span>
);

const LinkIcon = ({
  link,
  size,
  iconSize,
}: {
  link: HeaderPipelineLink;
  size: number;
  iconSize: number;
}) => {
  if (!link.customIcon && !link.icon) return null;
  return (
    <IconSlot size={size} aria-hidden="true">
      {link.customIcon ||
        (link.icon && (
          <Icon name={link.icon} size={iconSize} color={link.iconColor} />
        ))}
    </IconSlot>
  );
};

const PipelineMainLink = ({ link }: { link: HeaderPipelineLink }) => (
  <li>
    <NavigationMenu.Link asChild>
      <MainLink href={link.href} LinkWrapper={link.linkWrapper}>
        <Title>{link.title}</Title>
        {link.description && <Description>{link.description}</Description>}
        <Arrow />
      </MainLink>
    </NavigationMenu.Link>
  </li>
);

const PipelineRowLink = ({
  link,
  variant,
}: {
  link: HeaderPipelineLink;
  variant: 'subpage' | 'integration';
}) => (
  <li>
    <NavigationMenu.Link asChild>
      <RowLink href={link.href} LinkWrapper={link.linkWrapper}>
        {variant === 'subpage' ? (
          <LinkIcon
            link={{ ...link, customIcon: undefined }}
            size={16}
            iconSize={14}
          />
        ) : (
          <LinkIcon link={link} size={20} iconSize={16} />
        )}
        <RowLabel bold={variant === 'integration'}>{link.title}</RowLabel>
        <Arrow />
      </RowLink>
    </NavigationMenu.Link>
  </li>
);

const PipelineColumn = ({
  step,
  isLast,
}: {
  step: HeaderPipelineStep;
  isLast: boolean;
}) => (
  <Column>
    <Rail aria-hidden="true">
      <StepTile background={step.iconBackground}>
        <Icon name={step.icon} size={14} color={step.iconColor} />
      </StepTile>
      {!isLast && <Connector />}
    </Rail>
    <MainList>
      {step.links.map((link) => (
        <PipelineMainLink key={link.href} link={link} />
      ))}
    </MainList>
    {step.subpages && step.subpages.length > 0 && (
      <SubList>
        {step.subpages.map((link) => (
          <PipelineRowLink key={link.href} link={link} variant="subpage" />
        ))}
      </SubList>
    )}
  </Column>
);

export const NavDesktopPipeline: FC<Props> = ({ pipeline }) => (
  <Inside>
    <Steps>
      {pipeline.steps.map((step, i) => (
        <PipelineColumn
          key={step.links[0]?.href || i}
          step={step}
          isLast={i === pipeline.steps.length - 1}
        />
      ))}
    </Steps>
    {pipeline.sidebar && (
      <Sidebar>
        <SidebarTitle aria-hidden="true">{pipeline.sidebar.title}</SidebarTitle>
        <SidebarList aria-label={pipeline.sidebar.title}>
          {pipeline.sidebar.links.map((link) => (
            <PipelineRowLink
              key={link.href}
              link={link}
              variant="integration"
            />
          ))}
        </SidebarList>
      </Sidebar>
    )}
  </Inside>
);
