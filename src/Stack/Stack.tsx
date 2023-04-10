import { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { minMd } from '../_helpers';
import { spacing } from '../_tokens';

interface StackProps {
  children: ReactNode;
  mt?: keyof typeof spacing;
  mb?: keyof typeof spacing;
  px?: keyof typeof spacing;
  py?: keyof typeof spacing;
  gap?: keyof typeof spacing;
}

// TODO
// - Add support for responsive mt + mb + gap + px + py
//   ex: mt={{ base: 4, sm: 6, md: 10 }}
// - Add support for custom direction depending on breakpoint
//   ex: direction={{ base: 'row', md: 'column' }}
// - Add support for no full-width stack

export const Stack = styled.div<{
  mt: StackProps['mt'];
  mb: StackProps['mb'];
  gap?: StackProps['gap'];
  px?: StackProps['px'];
  py?: StackProps['py'];
}>`
  display: flex;
  gap: ${({ gap }) => gap || spacing[4]};
  max-width: 1880px;
  margin: 0 auto;
  margin-top: ${({ mt }) => mt && spacing[mt]};
  margin-bottom: ${({ mb }) => mb && spacing[mb]};
  padding-left: ${({ px }) => (px ? spacing[px] : spacing[4])};
  padding-right: ${({ px }) => (px ? spacing[px] : spacing[4])};
  flex-direction: column;

  ${minMd} {
    flex-direction: row;
    padding-left: ${({ px }) => (px ? spacing[px] : spacing[10])};
    padding-right: ${({ px }) => (px ? spacing[px] : spacing[10])};
  }
`;
