import React, { useId, useState } from 'react';
import styled from '@emotion/styled';
import { color, spacing, fontSize, lineHeight } from '../_tokens';
import { typography } from '../_helpers';

export interface CalendarProps {
  value?: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
}

const CalendarContainer = styled.div`
  padding: ${spacing[4]};
  background: ${color.white};
`;

const CalendarTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${spacing[1]};
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
`;

const MonthYearHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing[4]};
  ${typography.body16};
  font-weight: 600;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  padding: ${spacing[2]};
  cursor: pointer;
  color: ${color.blue600};
  font-size: ${fontSize[20]};
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  transition: background 0.16s ease-in-out;

  &:hover {
    background: ${color.slate100};
  }

  &:active {
    background: ${color.slate200};
  }
`;

const WeekdayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${spacing[1]};
  margin-bottom: ${spacing[3]};
`;

const Weekday = styled.div`
  text-align: center;
  ${typography.body14};
  font-weight: 600;
  color: ${color.slate700};
  padding: ${spacing[1]};
`;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${spacing[1]};
`;

const WeekRow = styled.div`
  display: contents;
`;

const DayCell = styled.div`
  display: flex;
  align-items: stretch;
`;

const DayButton = styled.button<{
  isCurrentMonth: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isToday: boolean;
}>`
  aspect-ratio: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: ${({ isDisabled, isCurrentMonth }) =>
    isDisabled || !isCurrentMonth ? 'not-allowed' : 'pointer'};
  padding: 0;
  background: ${({ isSelected, isDisabled, isToday }) => {
    if (isSelected) return color.blue600;
    if (isToday) return color.slate100;
    if (isDisabled) return color.slate200;
    return 'transparent';
  }};
  color: ${({ isSelected, isDisabled, isCurrentMonth }) => {
    if (isSelected) return color.white;
    if (isDisabled) return color.slate700;
    if (!isCurrentMonth) return color.slate500;
    return color.slate900;
  }};
  font-size: ${fontSize[14]};
  line-height: ${lineHeight[20]};
  font-weight: 500;
  transition: all 0.16s ease-in-out;
  pointer-events: ${({ isCurrentMonth }) =>
    !isCurrentMonth ? 'none' : 'auto'};

  &:hover:not(:disabled) {
    background: ${({ isSelected }) =>
      isSelected ? color.blue700 : color.slate200};
    border-color: ${color.slate300};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const isDateDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[]
): boolean => {
  const dateOnly = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  if (minDate) {
    const minDateOnly = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate()
    );
    if (dateOnly < minDateOnly) return true;
  }

  if (maxDate) {
    const maxDateOnly = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate()
    );
    if (dateOnly > maxDateOnly) return true;
  }

  if (disabledDates) {
    return disabledDates.some((d) => {
      const disabledDateOnly = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate()
      );
      return dateOnly.getTime() === disabledDateOnly.getTime();
    });
  }

  return false;
};

const isDateEqual = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return isDateEqual(date, today);
};

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ value, onChange, minDate, maxDate, disabledDates }, ref) => {
    const [currentMonth, setCurrentMonth] = useState(
      value ? new Date(value) : new Date()
    );
    const monthLabelId = useId();

    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const daysInPrevMonth = getDaysInMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );

    const days = [];

    // Previous month's days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() - 1,
          daysInPrevMonth - i
        ),
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i),
      });
    }

    // Next month's days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() + 1,
          i
        ),
      });
    }

    const weeks = [] as (typeof days)[];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    const handlePrevMonth = () => {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
      );
    };

    const handleNextMonth = () => {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      );
    };

    const handleSelectDate = (date: Date) => {
      if (!isDateDisabled(date, minDate, maxDate, disabledDates)) {
        onChange(date);
      }
    };

    return (
      <CalendarContainer ref={ref} aria-label="Date picker calendar">
        <MonthYearHeader>
          <NavButton onClick={handlePrevMonth} aria-label="Previous month">
            ‹
          </NavButton>
          <div id={monthLabelId}>
            {currentMonth.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <NavButton onClick={handleNextMonth} aria-label="Next month">
            ›
          </NavButton>
        </MonthYearHeader>

        <WeekdayGrid>
          {weekdays.map((day) => (
            <Weekday key={day}>{day}</Weekday>
          ))}
        </WeekdayGrid>

        <DatesGrid role="grid" aria-labelledby={monthLabelId}>
          {weeks.map((week, weekIndex) => (
            <WeekRow role="row" key={`week-${weekIndex}`}>
              {week.map((dayObj, dayIndex) => {
                const disabled =
                  !dayObj.isCurrentMonth ||
                  isDateDisabled(dayObj.date, minDate, maxDate, disabledDates);
                const selected = value && isDateEqual(dayObj.date, value);
                const isTodayDate = isToday(dayObj.date);

                return (
                  <DayCell role="gridcell" key={`day-${weekIndex}-${dayIndex}`}>
                    <DayButton
                      isCurrentMonth={dayObj.isCurrentMonth}
                      isSelected={!!selected}
                      isDisabled={disabled}
                      isToday={isTodayDate}
                      disabled={disabled}
                      onClick={() => handleSelectDate(dayObj.date)}
                      aria-label={dayObj.date.toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                      aria-pressed={!!selected}
                      aria-current={isTodayDate ? 'date' : undefined}
                    >
                      {dayObj.day}
                    </DayButton>
                  </DayCell>
                );
              })}
            </WeekRow>
          ))}
        </DatesGrid>
      </CalendarContainer>
    );
  }
);

Calendar.displayName = 'Calendar';
