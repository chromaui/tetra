import * as React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from './Button';
import styled from '@emotion/styled';
import { color, spacing } from './_tokens';
import { keyframes } from '@emotion/react';
import { Text } from './Text';
import { HStack } from './Stack';

const overlayShow = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const contentShow = keyframes`
	from {
		opacity: 0;
		transform: translate(-50%, -48%) scale(0.96);
	}
	to {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`;

const AlertDialogOverlay = styled(RadixAlertDialog.Overlay)`
  background-color: ${color.blackTr10};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const AlertDialogContent = styled(RadixAlertDialog.Content)`
  background-color: ${color.slate900};
  border-radius: 6px;
  box-shadow:
    0 0 0 1px
      color-mix(
        in oklab,
        color(display-p3 0.882 0.949 0.996/0.183),
        color(display-p3 0.215 0.226 0.244)
      ),
    0 12px 60px color(display-p3 0 0 0/0.3),
    0 12px 32px -16px color(display-p3 0 0 0/0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};

  &:focus {
    outline: none;
  }
`;

export const AlertDialog = () => (
  <RadixAlertDialog.Root>
    <RadixAlertDialog.Trigger asChild>
      <Button>Delete account</Button>
    </RadixAlertDialog.Trigger>
    <RadixAlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <Text as="h2" variant="heading18" color="white">
          Are you absolutely sure?
        </Text>
        <Text variant="body16" color="white">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </Text>
        <HStack marginTop={3} justify="flex-end">
          <RadixAlertDialog.Cancel asChild>
            <Button variant="outline" size="sm" color="white">
              Cancel
            </Button>
          </RadixAlertDialog.Cancel>
          <RadixAlertDialog.Action asChild>
            <Button variant="solid" size="sm" color="blue">
              Yes, delete account
            </Button>
          </RadixAlertDialog.Action>
        </HStack>
      </AlertDialogContent>
    </RadixAlertDialog.Portal>
  </RadixAlertDialog.Root>
);
