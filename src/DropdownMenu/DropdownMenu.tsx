import React from 'react';
import styled from '@emotion/styled';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { color, spacing } from '../_tokens';
import { DropdownTrigger } from './DropdownTrigger';

const DropdownMenuContent = styled(RadixDropdownMenu.Content)`
  margin: 0;
  background: ${color.white};
  border-radius: 4px;
  padding: ${spacing[2]};
  min-width: 200px;
  box-shadow:
    0px 0px 15px ${color.blackTr05},
    0px 1px 2px ${color.blackTr10};
`;

interface DropdownProps {
  variant?: 'light' | 'dark';
  label: React.ReactNode;
  children: React.ReactNode;
}

export const DropdownMenu = ({
  label,
  variant,
  children,
  ...props
}: DropdownProps) => {
  return (
    <RadixDropdownMenu.Root>
      <DropdownTrigger variant={variant}>{label}</DropdownTrigger>

      <RadixDropdownMenu.Portal>
        <DropdownMenuContent loop align="start" sideOffset={8} {...props}>
          {children}
          {/* {items.map((item) => (
            <RadixDropdownMenu.Item
              key={item.id}
              asChild
            ></RadixDropdownMenu.Item>
          ))} */}
        </DropdownMenuContent>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};
