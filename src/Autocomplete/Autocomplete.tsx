import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { typography } from '../_helpers';

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  inverse?: boolean;
  disabled?: boolean;
  'aria-invalid'?: boolean;
  id?: string;
}

const AutocompleteWrapper = styled.div`
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

const DropdownList = styled.ul<{ inverse?: boolean; isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${({ inverse }) => (inverse ? color.slate800 : color.white)};
  border: 1px solid
    ${({ inverse }) => (inverse ? color.slate700 : color.slate300)};
  border-radius: 3px;
  max-height: 240px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.li<{ inverse?: boolean; isSelected: boolean }>`
  ${typography.body14}
  padding: ${spacing[2]} ${spacing[3]};
  cursor: pointer;
  color: ${({ inverse }) => (inverse ? color.slate100 : color.slate900)};
  background: ${({ inverse, isSelected }) =>
    isSelected ? (inverse ? color.slate700 : color.blue50) : 'transparent'};

  &:hover {
    background: ${({ inverse }) => (inverse ? color.slate700 : color.slate100)};
  }
`;

const NoResults = styled.div<{ inverse?: boolean }>`
  ${typography.body14}
  padding: ${spacing[2]} ${spacing[3]};
  color: ${({ inverse }) => (inverse ? color.slate500 : color.slate400)};
`;

export const Autocomplete = React.forwardRef<
  HTMLInputElement,
  AutocompleteProps
>(
  (
    {
      options,
      value = '',
      onChange,
      placeholder,
      inverse,
      disabled,
      'aria-invalid': ariaInvalid,
      id,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(
      options.find((opt) => opt.value === value)?.label || ''
    );
    const [isOpen, setIsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const selected = options.find((opt) => opt.value === value);
      if (selected) {
        setInputValue(selected.label);
      }
    }, [value, options]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setIsOpen(true);

      const filtered = options.filter(
        (option) =>
          option.label.toLowerCase().includes(newValue.toLowerCase()) ||
          option.value.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredOptions(filtered);
      setSelectedIndex(-1);
    };

    const handleOptionSelect = (option: AutocompleteOption) => {
      setInputValue(option.label);
      setIsOpen(false);
      onChange?.(option.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) {
        if (e.key === 'ArrowDown') {
          setIsOpen(true);
          e.preventDefault();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && filteredOptions[selectedIndex]) {
            handleOptionSelect(filteredOptions[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    const handleFocus = () => {
      setIsOpen(true);
      setFilteredOptions(options);
    };

    return (
      <AutocompleteWrapper ref={wrapperRef}>
        <StyledInput
          ref={ref}
          id={id}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder={placeholder}
          inverse={inverse}
          disabled={disabled}
          aria-invalid={ariaInvalid}
          autoComplete="off"
        />
        <DropdownList inverse={inverse} isOpen={isOpen}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <DropdownItem
                key={option.value}
                inverse={inverse}
                isSelected={index === selectedIndex}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {option.label}
              </DropdownItem>
            ))
          ) : (
            <NoResults inverse={inverse}>No results found</NoResults>
          )}
        </DropdownList>
      </AutocompleteWrapper>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
