import preview from '#.storybook/preview';
import React, { useId, useState } from 'react';
import { Autocomplete, AutocompleteOption } from './Autocomplete';
import { VStack } from '../Stack';

const meta = preview.meta({
  title: 'Forms/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
});

const OPTIONS: AutocompleteOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'apricot', label: 'Apricot' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
];

export const Default = meta.story({
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    const inputId = useId();

    return (
      <VStack gap={5} paddingX={6} paddingY={6} style={{ maxWidth: 400 }}>
        <div>
          <label htmlFor={inputId}>Select a fruit:</label>
          {selected && <p>Selected: {selected.label}</p>}
        </div>
        <Autocomplete
          id={inputId}
          options={OPTIONS}
          value={selected}
          onChange={setSelected}
          placeholder="Search fruits..."
        />
      </VStack>
    );
  },
});

export const Inverse = meta.story({
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    const inputId = useId();

    return (
      <VStack
        gap={5}
        paddingX={6}
        paddingY={6}
        style={{ maxWidth: 400, background: '#1a202c', borderRadius: '4px' }}
      >
        <div style={{ color: '#e2e8f0' }}>
          <label htmlFor={inputId}>Select a fruit:</label>
          {selected && <p>Selected: {selected.label}</p>}
        </div>
        <Autocomplete
          id={inputId}
          options={OPTIONS}
          value={selected}
          onChange={setSelected}
          placeholder="Search fruits..."
          inverse
        />
      </VStack>
    );
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const Disabled = meta.story({
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    const inputId = useId();

    return (
      <VStack gap={5} paddingX={6} paddingY={6} style={{ maxWidth: 400 }}>
        <div>
          <label htmlFor={inputId}>Select a fruit (disabled):</label>
          {selected && <p>Selected: {selected.label}</p>}
        </div>
        <Autocomplete
          id={inputId}
          options={OPTIONS}
          value={selected}
          onChange={setSelected}
          placeholder="Search fruits..."
          disabled
        />
      </VStack>
    );
  },
});
