import React, { ElementType, FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { Container } from '../Container';
import { LinkWithWrapper } from '../LinkWithWrapper/LinkWithWrapper';
import { HStack } from '../Stack';
import { color, fontWeight, spacing } from '../_tokens';
import { minSm, typography } from '../_helpers';
import { Icon } from '../Icon';
import { NavDropdownMenu } from '../NavDropdownMenu';

const Wrapper = styled.div<{ variant?: 'light' | 'dark' }>`
  box-shadow: ${(props) =>
        props.variant === 'dark' ? color.whiteTr10 : color.blackTr10}
      0 -1px 0px 0px inset,
    ${(props) => (props.variant === 'dark' ? color.whiteTr10 : color.blackTr10)}
      0 1px 0px 0px inset;
`;

const SubNavLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) =>
    propName !== 'variant' && propName !== 'isActive',
})<{
  variant?: 'light' | 'dark';
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
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
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

  color: ${({ isActive, variant }) => {
    if (isActive) return color.blue500;
    if (variant === 'light') return color.slate500;
    return color.slate300;
  }};

  ${(props) =>
    props.isActive && `box-shadow: ${color.blue500} 0 -3px 0 0 inset;`}
`;

const DropdownMenuWrapper = styled.div`
  ${minSm} {
    display: none;
  }
`;

const TabsMenu = styled(HStack)`
  display: none;

  ${minSm} {
    display: flex;
  }
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
}) => (
  <Wrapper variant={theme}>
    <Container>
      <DropdownMenuWrapper>
        <NavDropdownMenu label={label} items={items} variant={theme} />
      </DropdownMenuWrapper>
      <TabsMenu gap={0}>
        {items.map((item) => (
          <SubNavLink
            key={item.id}
            href={item.href}
            variant={theme}
            isActive={item.isActive}
          >
            {item.label}{' '}
            {item.external && (
              <Icon name="sharealt" aria-label="external page" />
            )}
          </SubNavLink>
        ))}
      </TabsMenu>
    </Container>
  </Wrapper>
);
