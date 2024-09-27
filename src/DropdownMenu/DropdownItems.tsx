import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { typography } from '../_helpers';
import { color, spacing } from '../_tokens';
import { Icon } from '../Icon';

const itemStyles = css`
  ${typography.body14};
  line-height: 1;
  height: 28px;
  display: flex;
  align-items: center;
  color: ${color.slate800};
  cursor: pointer;
  padding: 0 ${spacing[2]} 0 ${spacing[6]};
  border-radius: 3px;

  &[data-highlighted] {
    background-color: ${color.blue100};
    outline: none;
  }

  &[data-disabled] {
    color: ${color.slate400};
    pointer-events: none;
  }
`;

const ItemIndicator = styled(RadixDropdownMenu.ItemIndicator)`
  position: absolute;
  left: 0;
  width: ${spacing[5]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxItem = styled(RadixDropdownMenu.CheckboxItem)`
  ${itemStyles}
  position: relative;
`;

export const DropdownMenuCheckboxItem = ({
  children,
  ...props
}: RadixDropdownMenu.MenuCheckboxItemProps) => (
  <CheckboxItem {...props}>
    <ItemIndicator>
      <Icon name="check" size={10} />
    </ItemIndicator>
    {children}
  </CheckboxItem>
);

export const DropdownMenuItem = styled(RadixDropdownMenu.Item)`
  ${itemStyles}
`;
