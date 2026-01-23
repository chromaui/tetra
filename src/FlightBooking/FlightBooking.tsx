import React, { useId, useState } from 'react';
import styled from '@emotion/styled';
import * as RadixPopover from '@radix-ui/react-popover';
import { color, spacing, fontSize, lineHeight } from '../_tokens';
import { typography } from '../_helpers';
import { Button } from '../Button';
import { Autocomplete, AutocompleteOption } from '../Autocomplete';
import { Calendar } from '../Calendar';

const AIRPORT_OPTIONS: AutocompleteOption[] = [
  { value: 'SYD', label: 'SYD – Sydney Airport, Australia' },
  { value: 'MEL', label: 'MEL – Melbourne Airport (Tullamarine), Australia' },
  { value: 'LAX', label: 'LAX – Los Angeles International Airport, USA' },
  {
    value: 'JFK',
    label: 'JFK – John F. Kennedy International Airport, New York, USA',
  },
  { value: 'LHR', label: 'LHR – Heathrow Airport, London, UK' },
  { value: 'CDG', label: 'CDG – Charles de Gaulle Airport, Paris, France' },
  {
    value: 'ATL',
    label: 'ATL – Hartsfield–Jackson Atlanta International Airport, USA',
  },
  { value: 'DXB', label: 'DXB – Dubai International Airport, UAE' },
  { value: 'HKG', label: 'HKG – Hong Kong International Airport, Hong Kong' },
  { value: 'BNE', label: 'BNE – Brisbane Airport, Australia' },
  { value: 'PER', label: 'PER – Perth Airport, Australia' },
  { value: 'DFW', label: 'DFW – Dallas Fort Worth International Airport, USA' },
];

export interface FlightBookingProps {
  onSearch?: (params: FlightSearchParams) => void;
}

export interface FlightSearchParams {
  source: AutocompleteOption | null;
  destination: AutocompleteOption | null;
  isReturn: boolean;
  departureDate: Date | null;
  returnDate: Date | null;
}

const Container = styled.div`
  background: ${color.white};
  border-radius: 8px;
  padding: ${spacing[6]};
  box-shadow: 0px 1px 3px ${color.blackTr10};
  max-width: 900px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
`;

const TripTypeToggle = styled.div`
  display: flex;
  gap: ${spacing[2]};
`;

const ToggleButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: ${spacing[2]} ${spacing[3]};
  border: 1px solid
    ${({ isActive }) => (isActive ? color.blue600 : color.slate300)};
  background: ${({ isActive }) => (isActive ? color.blue600 : color.white)};
  color: ${({ isActive }) => (isActive ? color.white : color.slate700)};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.16s ease-in-out;
  ${typography.body14}

  &:hover {
    border-color: ${color.blue600};
    background: ${({ isActive }) => (isActive ? color.blue700 : color.blue50)};
    color: ${({ isActive }) => (isActive ? color.white : color.blue700)};
  }
`;

const FlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing[4]};
`;

const FlightInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};
`;

const Label = styled.label`
  ${typography.body14}
  font-weight: 600;
  color: ${color.slate700};
`;

const DateInputContainer = styled.div`
  position: relative;
`;

const DateInputButton = styled.button`
  box-sizing: border-box;
  display: block;
  width: 100%;
  ${typography.body14}
  padding: ${spacing[2]} ${spacing[3]};
  border-radius: 3px;
  border: 1px solid ${color.slate300};
  background: ${color.white};
  color: ${color.slate900};
  cursor: pointer;
  transition: border-color 0.16s ease-in-out;
  outline: none;
  font: inherit;
  text-align: left;

  &:hover:not(:disabled) {
    border-color: ${color.slate400};
  }

  &:focus {
    border-color: ${color.blue600};
    box-shadow: 0 0 0 3px ${color.blueTr10};
  }

  &:disabled {
    background: ${color.slate100};
    color: ${color.slate500};
    cursor: not-allowed;
    border-color: ${color.slate300};
  }
`;

const PopoverContent = styled(RadixPopover.Content)`
  border-radius: 8px;
  box-shadow: 0px 4px 12px ${color.blackTr10};
  z-index: 10;
`;

const ActionButtonsGroup = styled.div`
  display: flex;
  gap: ${spacing[3]};
  margin-top: ${spacing[4]};
`;

const SearchButton = styled(Button)`
  flex: 1;
`;

const ClearButton = styled(Button)`
  flex: 1;
`;

const SwapButton = styled(Button)`
  width: 100%;
`;

export const FlightBooking = React.forwardRef<
  HTMLDivElement,
  FlightBookingProps
>(({ onSearch }, ref) => {
  const [source, setSource] = useState<AutocompleteOption | null>(null);
  const [destination, setDestination] = useState<AutocompleteOption | null>(
    null
  );
  const [isReturn, setIsReturn] = useState(true);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [isDepartureOpen, setIsDepartureOpen] = useState(false);
  const [isReturnOpen, setIsReturnOpen] = useState(false);
  const sourceId = useId();
  const destinationId = useId();
  const departureId = useId();
  const returnId = useId();
  const sourceLabelId = `${sourceId}-label`;
  const destinationLabelId = `${destinationId}-label`;
  const departureLabelId = `${departureId}-label`;
  const returnLabelId = `${returnId}-label`;

  // Validate that departure date is before return date
  const isValidDateRange =
    !departureDate || !returnDate || departureDate <= returnDate;

  // Min date is today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Max date for return flight should be at least departure date or in the future
  const returnMinDate = departureDate
    ? new Date(departureDate.getTime())
    : today;

  // For return date, disable dates before the departure date
  const handleSearch = () => {
    if (!source || !destination) {
      alert('Please select source and destination airports');
      return;
    }

    if (!departureDate) {
      alert('Please select a departure date');
      return;
    }

    if (isReturn && !returnDate) {
      alert('Please select a return date');
      return;
    }

    if (isReturn && !isValidDateRange) {
      alert('Return date must be after departure date');
      return;
    }

    onSearch?.({
      source,
      destination,
      isReturn,
      departureDate,
      returnDate: isReturn ? returnDate : null,
    });
  };

  const handleSwapAirports = () => {
    const temp = source;
    setSource(destination);
    setDestination(temp);
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Container ref={ref}>
      <Form>
        <TripTypeToggle role="group" aria-label="Trip type">
          <ToggleButton
            isActive={isReturn}
            type="button"
            aria-pressed={isReturn}
            onClick={() => setIsReturn(true)}
          >
            Round Trip
          </ToggleButton>
          <ToggleButton
            isActive={!isReturn}
            type="button"
            aria-pressed={!isReturn}
            onClick={() => setIsReturn(false)}
          >
            One Way
          </ToggleButton>
        </TripTypeToggle>

        <FlightsGrid>
          <FlightInputGroup>
            <Label id={sourceLabelId} htmlFor={sourceId}>
              From
            </Label>
            <Autocomplete
              id={sourceId}
              options={AIRPORT_OPTIONS}
              value={source}
              onChange={setSource}
              placeholder="Select departure airport..."
            />
          </FlightInputGroup>

          <FlightInputGroup style={{ justifyContent: 'flex-end' }}>
            <div style={{ height: '1.5rem' }} />
            <SwapButton
              variant="outline"
              color="blue"
              size="sm"
              onClick={handleSwapAirports}
            >
              ⇄ Swap
            </SwapButton>
          </FlightInputGroup>

          <FlightInputGroup>
            <Label id={destinationLabelId} htmlFor={destinationId}>
              To
            </Label>
            <Autocomplete
              id={destinationId}
              options={AIRPORT_OPTIONS}
              value={destination}
              onChange={setDestination}
              placeholder="Select arrival airport..."
            />
          </FlightInputGroup>

          <FlightInputGroup>
            <Label id={departureLabelId} htmlFor={departureId}>
              Departure
            </Label>
            <RadixPopover.Root
              open={isDepartureOpen}
              onOpenChange={setIsDepartureOpen}
            >
              <RadixPopover.Trigger asChild>
                <DateInputButton
                  type="button"
                  id={departureId}
                  aria-haspopup="dialog"
                  aria-expanded={isDepartureOpen}
                  aria-controls={`${departureId}-calendar`}
                >
                  {formatDate(departureDate) || 'Select date...'}
                </DateInputButton>
              </RadixPopover.Trigger>
              <RadixPopover.Portal>
                <PopoverContent
                  side="bottom"
                  align="start"
                  role="dialog"
                  id={`${departureId}-calendar`}
                  aria-labelledby={departureLabelId}
                >
                  <Calendar
                    value={departureDate || undefined}
                    onChange={(date) => {
                      setDepartureDate(date);
                      // Reset return date if it's before the new departure date
                      if (returnDate && date > returnDate) {
                        setReturnDate(null);
                      }
                    }}
                    minDate={today}
                  />
                </PopoverContent>
              </RadixPopover.Portal>
            </RadixPopover.Root>
          </FlightInputGroup>

          {isReturn && (
            <FlightInputGroup>
              <Label id={returnLabelId} htmlFor={returnId}>
                Return
              </Label>
              <RadixPopover.Root
                open={isReturnOpen}
                onOpenChange={setIsReturnOpen}
              >
                <RadixPopover.Trigger asChild>
                  <DateInputButton
                    type="button"
                    disabled={!departureDate}
                    id={returnId}
                    aria-haspopup="dialog"
                    aria-expanded={isReturnOpen}
                    aria-controls={`${returnId}-calendar`}
                  >
                    {formatDate(returnDate) || 'Select date...'}
                  </DateInputButton>
                </RadixPopover.Trigger>
                <RadixPopover.Portal>
                  <PopoverContent
                    side="bottom"
                    align="start"
                    role="dialog"
                    id={`${returnId}-calendar`}
                    aria-labelledby={returnLabelId}
                  >
                    <Calendar
                      value={returnDate || undefined}
                      onChange={setReturnDate}
                      minDate={returnMinDate}
                    />
                  </PopoverContent>
                </RadixPopover.Portal>
              </RadixPopover.Root>
            </FlightInputGroup>
          )}
        </FlightsGrid>

        <ActionButtonsGroup>
          <SearchButton
            onClick={handleSearch}
            size="md"
            variant="solid"
            color="blue"
          >
            Search Flights
          </SearchButton>
          <ClearButton
            onClick={() => {
              setSource(null);
              setDestination(null);
              setDepartureDate(null);
              setReturnDate(null);
            }}
            variant="outline"
            color="slate"
            size="md"
          >
            Clear
          </ClearButton>
        </ActionButtonsGroup>
      </Form>
    </Container>
  );
});

FlightBooking.displayName = 'FlightBooking';
