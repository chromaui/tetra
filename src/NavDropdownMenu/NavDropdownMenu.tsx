import React, { ElementType, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { typography } from '../_helpers';
import { color, spacing } from '../_tokens';
import { NavDropdownTrigger } from './NavDropdownTrigger';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { Icon } from '../Icon';

const NavDropdownMenuContent = styled(RadixDropdownMenu.Content)`
  margin: 0;
  background: ${color.white};
  border-radius: 4px;
  padding: ${spacing[2]};

  box-shadow:
    0px 0px 15px ${color.blackTr05},
    0px 1px 2px ${color.blackTr10};
`;

const DropdownMenuLink = styled(LinkWithWrapper)`
  ${typography.body14};
  color: ${color.slate800};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${spacing[2]};
  border-radius: 4px;

  &[data-highlighted] {
    box-shadow: inset 0 0 0 2px rgba(30, 167, 253, 0.3);
    background-color: ${color.blue100};
    outline: none;
  }
`;

interface MenuItem {
  id: string;
  label: string;
  LinkWrapper?: ElementType;
  href: string;
  external?: boolean;
}

interface NavDropdownMenuProps {
  variant?: 'light' | 'dark';
  label: string;
  items: MenuItem[];
}

export const NavDropdownMenu = ({
  label,
  variant,
  items,
  ...props
}: NavDropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root>
      <NavDropdownTrigger variant={variant}>{label}</NavDropdownTrigger>

      <RadixDropdownMenu.Portal>
        <NavDropdownMenuContent loop align="start" sideOffset={8}>
          {items.map((item) => (
            <RadixDropdownMenu.Item key={item.id} asChild>
              <DropdownMenuLink href={item.href} LinkWrapper={item.LinkWrapper}>
                {item.label}{' '}
                {item.external && (
                  <Icon name="sharealt" aria-label="external page" />
                )}
              </DropdownMenuLink>
            </RadixDropdownMenu.Item>
          ))}
        </NavDropdownMenuContent>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};
