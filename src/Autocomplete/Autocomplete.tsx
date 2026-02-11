import React, { useState, useRef, useEffect, useId } from 'react';
import styled from '@emotion/styled';
import { color, spacing, fontSize, lineHeight } from '../_tokens';
import { typography } from '../_helpers';

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: AutocompleteOption | null;
  onChange: (option: AutocompleteOption) => void;
  placeholder?: string;
  inverse?: boolean;
  disabled?: boolean;
  id?: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
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
`;

const DropdownList = styled.ul<{ inverse?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: ${spacing[1]} 0 0 0;
  padding: 0;
  list-style: none;
  background: ${({ inverse }) => (inverse ? color.slate800 : color.white)};
  border: 1px solid
    ${({ inverse }) => (inverse ? color.slate700 : color.slate300)};
  border-radius: 3px;
  box-shadow: 0px 4px 12px ${color.blackTr10};
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
`;

const DropdownItem = styled.li<{
  inverse?: boolean;
  isHighlighted?: boolean;
}>`
  padding: ${spacing[2]} ${spacing[3]};
  cursor: pointer;
  ${typography.body14}
  background: ${({ isHighlighted, inverse }) => {
    if (isHighlighted) return inverse ? color.blue700 : color.blue100;
    return 'transparent';
  }};
  color: ${({ inverse }) => (inverse ? color.slate100 : color.slate900)};
  transition: background 0.12s ease-in-out;

  &:hover {
    background: ${({ inverse }) => (inverse ? color.blue700 : color.blue100)};
  }

  &:first-of-type {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &:last-of-type {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Search...',
      inverse,
      disabled,
      id,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value?.label || '');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const listboxId = `${inputId}-listbox`;
    const optionIdPrefix = `${inputId}-option`;

    const setRefs = (node: HTMLDivElement | null) => {
      (containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
        node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    // Filter options based on input
    useEffect(() => {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
      setHighlightedIndex(-1);
    }, [inputValue, options]);

    useEffect(() => {
      setInputValue(value?.label || '');
    }, [value]);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
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
    };

    const handleOptionClick = (option: AutocompleteOption) => {
      onChange(option);
      setInputValue(option.label);
      setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen && e.key === 'ArrowDown') {
        setIsOpen(true);
        return;
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            handleOptionClick(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    return (
      <Container ref={setRefs}>
        <InputWrapper>
          <StyledInput
            ref={inputRef}
            id={inputId}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            inverse={inverse}
            disabled={disabled}
            autoComplete="off"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-activedescendant={
              highlightedIndex >= 0
                ? `${optionIdPrefix}-${highlightedIndex}`
                : undefined
            }
            aria-haspopup="listbox"
          />
        </InputWrapper>

        {isOpen && filteredOptions.length > 0 && (
          <DropdownList
            inverse={inverse}
            role="listbox"
            id={listboxId}
            aria-labelledby={inputId}
          >
            {filteredOptions.map((option, index) => (
              <DropdownItem
                key={option.value}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                isHighlighted={index === highlightedIndex}
                inverse={inverse}
                role="option"
                id={`${optionIdPrefix}-${index}`}
                aria-selected={value?.value === option.value}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </Container>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
