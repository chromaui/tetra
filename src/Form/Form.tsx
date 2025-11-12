import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { typography } from '../_helpers';
import { Stack, VStack } from '../Stack';

export const Legend = styled.legend<{ inverse?: boolean }>`
  ${typography.heading16}
  margin-bottom: ${spacing[2]};
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
`;

export const Fieldset = styled(VStack)<{
  overhang?: keyof typeof spacing;
  inverse?: boolean;
}>`
  border: 0;
  border-top: 1px solid
    ${({ inverse }) => (inverse ? color.whiteTr10 : color.blackTr10)};
  margin-left: -${({ overhang }) => spacing[overhang || 4]};
  margin-right: -${({ overhang }) => spacing[overhang || 4]};
  padding-left: ${({ overhang }) => spacing[overhang || 4]};
  padding-right: ${({ overhang }) => spacing[overhang || 4]};
  padding-top: 0;
  padding-bottom: 0;
`.withComponent('fieldset');

export const Field = styled(Stack)``.withComponent('div');
Field.defaultProps = {
  gap: 2,
  direction: 'column',
};

export const Form = styled(VStack)``.withComponent('form');
Form.defaultProps = {
  gap: 5,
};
