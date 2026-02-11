import preview from '#.storybook/preview';
import React, { useState } from 'react';
import { Calendar } from './Calendar';
import { VStack } from '../Stack';

const meta = preview.meta({
  title: 'Forms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
});

export const Default = meta.story({
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <VStack gap={4} paddingX={6} paddingY={6}>
        <div>
          <div>Select a date:</div>
          {date && <p>Selected: {date.toDateString()}</p>}
        </div>
        <Calendar value={date} onChange={setDate} />
      </VStack>
    );
  },
});

export const WithMinDate = meta.story({
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    return (
      <VStack gap={4} paddingX={6} paddingY={6}>
        <div>
          <div>Select a future date (min: today):</div>
          {date && <p>Selected: {date.toDateString()}</p>}
        </div>
        <Calendar value={date} onChange={setDate} minDate={minDate} />
      </VStack>
    );
  },
});

export const WithDateRange = meta.story({
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const maxDate = new Date(
      today.getFullYear(),
      today.getMonth() + 3,
      today.getDate()
    );

    return (
      <VStack gap={4} paddingX={6} paddingY={6}>
        <div>
          <div>Select a date (3 months range):</div>
          {date && <p>Selected: {date.toDateString()}</p>}
        </div>
        <Calendar
          value={date}
          onChange={setDate}
          minDate={minDate}
          maxDate={maxDate}
        />
      </VStack>
    );
  },
});

export const WithDisabledDates = meta.story({
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const today = new Date();

    // Disable some specific dates
    const disabledDates = [
      new Date(today.getFullYear(), today.getMonth(), 5),
      new Date(today.getFullYear(), today.getMonth(), 10),
      new Date(today.getFullYear(), today.getMonth(), 15),
    ];

    return (
      <VStack gap={4} paddingX={6} paddingY={6}>
        <div>
          <div>Select a date (some dates disabled):</div>
          {date && <p>Selected: {date.toDateString()}</p>}
        </div>
        <Calendar
          value={date}
          onChange={setDate}
          disabledDates={disabledDates}
        />
      </VStack>
    );
  },
});
