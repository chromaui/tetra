import React, { useState } from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { typography } from '../_helpers';

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing[2]};
`;

const MonthYearLabel = styled.div`
  ${typography.body16}
  font-weight: 600;
  color: ${color.slate900};
  flex: 1;
  text-align: center;
`;

const NavButton = styled.button`
  ${typography.body14}
  background: transparent;
  border: 1px solid ${color.slate300};
  border-radius: 3px;
  padding: ${spacing[1]} ${spacing[2]};
  cursor: pointer;
  color: ${color.slate900};
  transition: all 0.16s ease-in-out;

  &:hover {
    background: ${color.slate100};
    border-color: ${color.slate400};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${spacing[1]};
`;

const DayHeader = styled.div`
  ${typography.body14}
  font-weight: 600;
  color: ${color.slate500};
  text-align: center;
  padding: ${spacing[2]};
`;

const DayButton = styled.button<{
  isSelected: boolean;
  isToday: boolean;
  isDisabled: boolean;
  isEmpty: boolean;
}>`
  ${typography.body14}
  background: ${({ isSelected }) =>
    isSelected ? color.blue500 : 'transparent'};
  border: 1px solid
    ${({ isSelected, isToday }) =>
      isSelected ? color.blue500 : isToday ? color.blue300 : 'transparent'};
  border-radius: 3px;
  padding: ${spacing[2]};
  cursor: ${({ isDisabled, isEmpty }) =>
    isDisabled || isEmpty ? 'default' : 'pointer'};
  color: ${({ isSelected, isDisabled, isEmpty }) =>
    isEmpty
      ? 'transparent'
      : isSelected
        ? color.white
        : isDisabled
          ? color.slate400
          : color.slate900};
  transition: all 0.16s ease-in-out;
  min-width: 32px;
  min-height: 32px;

  &:hover {
    background: ${({ isSelected, isDisabled, isEmpty }) =>
      isEmpty || isDisabled
        ? 'transparent'
        : isSelected
          ? color.blue600
          : color.slate100};
    border-color: ${({ isSelected, isDisabled, isEmpty }) =>
      isEmpty || isDisabled
        ? 'transparent'
        : isSelected
          ? color.blue600
          : color.slate300};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isDateDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean => {
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  return false;
};

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(
    selectedDate
      ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
      : new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: Date[] = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(new Date(0)); // Placeholder date
    }

    // Add all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <NavButton onClick={handlePrevMonth}>←</NavButton>
        <MonthYearLabel>
          {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </MonthYearLabel>
        <NavButton onClick={handleNextMonth}>→</NavButton>
      </CalendarHeader>

      <CalendarGrid>
        {DAYS_OF_WEEK.map((day) => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}

        {days.map((date, index) => {
          const isEmpty = date.getTime() === 0;
          const isSelected = selectedDate
            ? !isEmpty && isSameDay(date, selectedDate)
            : false;
          const isToday = !isEmpty && isSameDay(date, today);
          const isDisabled = !isEmpty && isDateDisabled(date, minDate, maxDate);

          return (
            <DayButton
              key={index}
              isSelected={isSelected}
              isToday={isToday}
              isDisabled={isDisabled}
              isEmpty={isEmpty}
              onClick={() => !isEmpty && !isDisabled && onDateSelect(date)}
              disabled={isEmpty || isDisabled}
            >
              {isEmpty ? '' : date.getDate()}
            </DayButton>
          );
        })}
      </CalendarGrid>
    </CalendarWrapper>
  );
};

Calendar.displayName = 'Calendar';
