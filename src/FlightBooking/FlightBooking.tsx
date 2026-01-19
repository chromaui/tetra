import React, { useState } from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { typography } from '../_helpers';
import { Autocomplete, AutocompleteOption } from '../Autocomplete';
import { DatePicker } from '../DatePicker';
import { Label } from '../Form/Label';
import { VStack } from '../Stack';

export interface FlightBookingProps {
  airports: AutocompleteOption[];
  onSearch?: (data: FlightBookingData) => void;
  inverse?: boolean;
}

export interface FlightBookingData {
  source: string;
  destination: string;
  departureDate: Date;
  returnDate?: Date;
  tripType: 'one-way' | 'return';
}

const FlightBookingWrapper = styled.div<{ inverse?: boolean }>`
  background: ${({ inverse }) => (inverse ? color.slate900 : color.white)};
  padding: ${spacing[6]};
  border-radius: 8px;
  border: 1px solid
    ${({ inverse }) => (inverse ? color.slate700 : color.slate200)};
`;

const ToggleGroup = styled.div`
  display: inline-flex;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid ${color.slate300};
`;

const ToggleButton = styled.button<{ isActive: boolean; inverse?: boolean }>`
  ${typography.body14}
  background: ${({ isActive, inverse }) =>
    isActive ? (inverse ? color.slate700 : color.blue500) : 'transparent'};
  color: ${({ isActive, inverse }) =>
    isActive ? color.white : inverse ? color.slate200 : color.slate900};
  border: none;
  padding: ${spacing[2]} ${spacing[4]};
  cursor: pointer;
  transition: all 0.16s ease-in-out;
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};

  &:not(:last-child) {
    border-right: 1px solid ${color.slate300};
  }

  &:hover {
    background: ${({ isActive, inverse }) =>
      isActive
        ? inverse
          ? color.slate600
          : color.blue600
        : inverse
          ? color.slate800
          : color.slate100};
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
`;

const FieldsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SearchButton = styled.button<{ inverse?: boolean }>`
  ${typography.body16}
  background: ${({ inverse }) => (inverse ? color.blue400 : color.blue600)};
  color: ${color.white};
  border: none;
  border-radius: 3em;
  padding: ${spacing[3]} ${spacing[6]};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.16s ease-in-out;

  &:hover {
    background: ${({ inverse }) => (inverse ? color.blue500 : color.blue700)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FlightBooking: React.FC<FlightBookingProps> = ({
  airports,
  onSearch,
  inverse,
}) => {
  const [tripType, setTripType] = useState<'one-way' | 'return'>('return');
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minReturnDate = departureDate
    ? new Date(departureDate.getTime() + 24 * 60 * 60 * 1000)
    : undefined;

  const handleSearch = () => {
    if (!source || !destination || !departureDate) return;
    if (tripType === 'return' && !returnDate) return;

    onSearch?.({
      source,
      destination,
      departureDate,
      returnDate: tripType === 'return' ? returnDate : undefined,
      tripType,
    });
  };

  const isSearchDisabled =
    !source ||
    !destination ||
    !departureDate ||
    (tripType === 'return' && !returnDate);

  return (
    <FlightBookingWrapper inverse={inverse}>
      <VStack gap={5}>
        <FieldGroup>
          <Label inverse={inverse}>Trip type</Label>
          <ToggleGroup>
            <ToggleButton
              isActive={tripType === 'return'}
              inverse={inverse}
              onClick={() => setTripType('return')}
              type="button"
            >
              Return
            </ToggleButton>
            <ToggleButton
              isActive={tripType === 'one-way'}
              inverse={inverse}
              onClick={() => setTripType('one-way')}
              type="button"
            >
              One way
            </ToggleButton>
          </ToggleGroup>
        </FieldGroup>

        <FieldsRow>
          <FieldGroup>
            <Label htmlFor="source" inverse={inverse}>
              From
            </Label>
            <Autocomplete
              id="source"
              options={airports}
              value={source}
              onChange={setSource}
              placeholder="Select departure airport"
              inverse={inverse}
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="destination" inverse={inverse}>
              To
            </Label>
            <Autocomplete
              id="destination"
              options={airports}
              value={destination}
              onChange={setDestination}
              placeholder="Select arrival airport"
              inverse={inverse}
            />
          </FieldGroup>
        </FieldsRow>

        <FieldsRow>
          <FieldGroup>
            <Label htmlFor="departure-date" inverse={inverse}>
              Departure date
            </Label>
            <DatePicker
              id="departure-date"
              value={departureDate}
              onChange={setDepartureDate}
              placeholder="Select departure date"
              inverse={inverse}
              minDate={today}
            />
          </FieldGroup>

          {tripType === 'return' && (
            <FieldGroup>
              <Label htmlFor="return-date" inverse={inverse}>
                Return date
              </Label>
              <DatePicker
                id="return-date"
                value={returnDate}
                onChange={setReturnDate}
                placeholder="Select return date"
                inverse={inverse}
                minDate={minReturnDate}
              />
            </FieldGroup>
          )}
        </FieldsRow>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SearchButton
            inverse={inverse}
            onClick={handleSearch}
            disabled={isSearchDisabled}
            type="button"
          >
            Search flights
          </SearchButton>
        </div>
      </VStack>
    </FlightBookingWrapper>
  );
};

FlightBooking.displayName = 'FlightBooking';
