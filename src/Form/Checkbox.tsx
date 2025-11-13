import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';

export const Checkbox = styled.input<{ inverse?: boolean }>`
  accent-color: ${({ inverse }) => (inverse ? color.blue400 : color.blue600)};
  margin: 0;
  padding: ${spacing[1]} 0;
`;
Checkbox.defaultProps = {
  type: 'checkbox',
};
