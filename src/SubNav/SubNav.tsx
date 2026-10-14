import React, { ElementType, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Container } from '../Container';
import { LinkWithWrapper } from '../LinkWithWrapper/LinkWithWrapper';
import { HStack } from '../Stack';
import { color, fontWeight, spacing } from '../_tokens';
import { minLg, minMd, minSm, typography } from '../_helpers';
import { Icon } from '../Icon';
import { NavDropdownMenu } from '../NavDropdownMenu';

const Wrapper = styled.div<{ variant?: 'light' | 'dark' }>`
  box-shadow: ${(props) =>
      props.variant === 'dark' ? color.whiteTr10 : color.blackTr10}
    0 -1px 0px 0px inset;
`;

const SubNavLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) =>
    propName !== 'variant' && propName !== 'isActive',
})<{
  variant?: 'light' | 'dark';
  isActive?: boolean;
}>`
  all: unset;
  color: ${({ isActive, variant }) => {
    if (isActive) return variant === 'light' ? color.blue600 : color.blue400;
    return variant === 'light' ? color.slate600 : color.slate300;
  }};
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
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  ${typography.body14}
  font-weight: ${fontWeight.bold};

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }

  &:hover {
    color: ${({ variant }) => {
      return `hsl(from ${variant === 'light' ? color.blue600 : color.blue400} h s calc( l + 4 ))`;
    }};
  }

  ${(props) =>
    props.isActive &&
    `box-shadow: ${props.variant === 'light' ? color.blue600 : color.blue400} 0 -3px 0 0 inset;`}
`;

type CollapseBreakpoint = 'sm' | 'md' | 'lg';

const expandAt: Record<CollapseBreakpoint, string> = {
  sm: minSm,
  md: minMd,
  lg: minLg,
};

const DropdownMenuWrapper = styled('div', {
  shouldForwardProp: (propName) => propName !== 'collapseBelow',
})<{ collapseBelow: CollapseBreakpoint }>`
  display: flex;
  align-items: center;
  height: ${spacing[10]};

  button {
    margin-top: -1px; // optically centre
  }

  ${({ collapseBelow }) => expandAt[collapseBelow]} {
    display: none;
  }
`;

const TabsMenu = styled(HStack, {
  shouldForwardProp: (propName) => propName !== 'collapseBelow',
})<{ collapseBelow: CollapseBreakpoint }>`
  display: none;

  ${({ collapseBelow }) => expandAt[collapseBelow]} {
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
  /**
   * Below this breakpoint the tabs collapse into a dropdown menu. Use a larger
   * breakpoint when there are too many tabs to fit on one line at `sm`.
   * @default 'sm'
   */
  collapseBelow?: CollapseBreakpoint;
}

export const SubNav: FunctionComponent<SubNavProps> = ({
  label,
  items,
  theme = 'light',
  collapseBelow = 'sm',
}) => (
  <Wrapper variant={theme}>
    <Container>
      <DropdownMenuWrapper collapseBelow={collapseBelow}>
        <NavDropdownMenu label={label} items={items} variant={theme} />
      </DropdownMenuWrapper>
      <TabsMenu gap={0} collapseBelow={collapseBelow}>
        {items.map((item) => (
          <SubNavLink
            key={item.id}
            href={item.href}
            variant={theme}
            isActive={item.isActive}
            LinkWrapper={item.LinkWrapper}
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
