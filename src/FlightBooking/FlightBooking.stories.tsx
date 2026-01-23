import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { FlightBooking, type FlightSearchParams } from './FlightBooking';
import { VStack } from '../Stack';

const meta: Meta<typeof FlightBooking> = {
  title: 'Forms/FlightBooking',
  component: FlightBooking,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FlightBooking>;

export const Default: Story = {
  render: () => {
    const handleSearch = (params: FlightSearchParams) => {
      console.log('Flight Search:', params);
      alert(
        `Searching flights:\n` +
          `From: ${params.source?.value}\n` +
          `To: ${params.destination?.value}\n` +
          `Departure: ${params.departureDate?.toDateString()}\n` +
          `${params.isReturn ? `Return: ${params.returnDate?.toDateString()}` : 'One way trip'}`
      );
    };

    return (
      <VStack gap={4} paddingX={6} paddingY={6}>
        <h1>Flight Booking System</h1>
        <FlightBooking onSearch={handleSearch} />
      </VStack>
    );
  },
};

export const OneWayTrip: Story = {
  render: () => {
    const handleSearch = (params: FlightSearchParams) => {
      console.log('Flight Search:', params);
      alert(
        `Searching flights:\n` +
          `From: ${params.source?.value}\n` +
          `To: ${params.destination?.value}\n` +
          `Departure: ${params.departureDate?.toDateString()}\n` +
          `One way trip`
      );
    };

    return (
      <VStack gap={4} paddingX={6} paddingY={6}>
        <h1>One Way Flight Booking</h1>
        <FlightBooking onSearch={handleSearch} />
      </VStack>
    );
  },
};
