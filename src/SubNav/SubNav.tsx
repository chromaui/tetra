import React, { ElementType, FunctionComponent, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { Container } from '../Container';
import { LinkWithWrapper } from '../LinkWithWrapper/LinkWithWrapper';
import { Stack } from '../Stack';
import { color, fontWeight, spacing } from '../_tokens';
import { typography } from '../_helpers';
import { Icon } from '../Icon';

const Wrapper = styled.div<{ theTheme?: 'light' | 'dark' }>`
  box-shadow: ${(props) =>
      props.theTheme === 'dark' ? color.whiteTr50 : color.blackTr10}
    0 -1px 0px 0px inset;
`;

const SubNavLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) =>
    propName !== 'theTheme' && propName !== 'isActive',
})<{
  theTheme?: 'light' | 'dark';
  isActive?: boolean;
}>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing[4]};
  outline: none;
  user-select: none;
  border: none;
  height: ${spacing[10]};
  background: transparent;
  gap: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  ${typography.body14}
  font-weight: ${fontWeight.bold};

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
    background-color: rgba(30, 167, 253, 0.14);
  }

  &:hover {
    background-color: rgba(30, 167, 253, 0.14);
    color: ${color.blue500};
  }

  color: ${({ isActive, theTheme }) => {
    if (isActive) return color.blue500;
    if (theTheme === 'light') return color.slate500;
    return color.slate300;
  }};

  ${(props) =>
    props.isActive && `box-shadow: ${color.blue500} 0 -3px 0 0 inset;`}
`;

interface SubNavItem {
  id: string;
  label: string;
  LinkWrapper?: ElementType;
  href: string;
  isActive?: boolean;
  external?: boolean;
}

export interface SubNavProps {
  theme?: 'light' | 'dark';
  label: string;
  items: SubNavItem[];
}

export const SubNav: FunctionComponent<SubNavProps> = ({
  label,
  items,
  theme = 'light',
}) => {
  return (
    <Wrapper theTheme={theme}>
      <Container>
        <Stack direction="row" gap={0}>
          {items.map((item) => (
            <SubNavLink
              key={item.id}
              href={item.href}
              theTheme={theme}
              isActive={item.isActive}
            >
              {item.label} {item.external && <Icon name="sharealt" />}
            </SubNavLink>
          ))}
        </Stack>
      </Container>
    </Wrapper>
  );
};
