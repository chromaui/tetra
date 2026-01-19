import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as RadixPopover from '@radix-ui/react-popover';
import { color, spacing } from '../_tokens';
import { typography } from '../_helpers';
import { Calendar } from './Calendar';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  inverse?: boolean;
  disabled?: boolean;
  'aria-invalid'?: boolean;
  id?: string;
  minDate?: Date;
  maxDate?: Date;
}

const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<{ inverse?: boolean }>`
  box-sizing: border-box;
  display: block;
  width: 100%;
  ${typography.body14}
  padding: ${spacing[2]} ${spacing[3]};
  border-radius: 3px;
  border: 1px solid
    ${({ inverse }) => (inverse ? color.slate700 : color.slate300)};
  background: ${({ inverse }) => (inverse ? color.slate800 : color.white)};
  color: ${({ inverse }) => (inverse ? color.slate100 : color.slate900)};
  transition: border-color 0.16s ease-in-out;
  outline: none;
  cursor: pointer;

  &::placeholder {
    color: ${({ inverse }) => (inverse ? color.slate500 : color.slate400)};
  }

  &:hover {
    border-color: ${({ inverse }) =>
      inverse ? color.slate600 : color.slate400};
  }

  &:focus {
    border-color: ${({ inverse }) => (inverse ? color.blue400 : color.blue600)};
    box-shadow: 0 0 0 3px ${color.blueTr10};
  }

  &:disabled {
    background: ${({ inverse }) => (inverse ? color.slate900 : color.slate100)};
    color: ${({ inverse }) => (inverse ? color.slate600 : color.slate500)};
    cursor: not-allowed;
    border-color: ${({ inverse }) =>
      inverse ? color.slate700 : color.slate300};
  }

  &[aria-invalid='true'] {
    border-color: ${color.orange500};

    &:focus {
      border-color: ${color.orange500};
      box-shadow: 0 0 0 3px rgb(from ${color.orange500} r g b / 0.25);
    }
  }
`;

const PopoverContent = styled(RadixPopover.Content)`
  background: ${color.white};
  border-radius: 4px;
  padding: ${spacing[4]};
  box-shadow:
    0px 0px 15px ${color.blackTr05},
    0px 1px 2px ${color.blackTr10};
  z-index: 1000;
`;

const formatDate = (date: Date | undefined): string => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Select date',
      inverse,
      disabled,
      'aria-invalid': ariaInvalid,
      id,
      minDate,
      maxDate,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const handleDateSelect = (date: Date) => {
      onChange?.(date);
      setOpen(false);
    };

    return (
      <RadixPopover.Root open={open} onOpenChange={setOpen}>
        <RadixPopover.Trigger asChild>
          <DatePickerWrapper>
            <StyledInput
              ref={ref}
              id={id}
              type="text"
              value={formatDate(value)}
              placeholder={placeholder}
              inverse={inverse}
              disabled={disabled}
              aria-invalid={ariaInvalid}
              readOnly
            />
          </DatePickerWrapper>
        </RadixPopover.Trigger>

        <RadixPopover.Portal>
          <PopoverContent align="start" sideOffset={4}>
            <Calendar
              selectedDate={value}
              onDateSelect={handleDateSelect}
              minDate={minDate}
              maxDate={maxDate}
            />
          </PopoverContent>
        </RadixPopover.Portal>
      </RadixPopover.Root>
    );
  }
);

DatePicker.displayName = 'DatePicker';
