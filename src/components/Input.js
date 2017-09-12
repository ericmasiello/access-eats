import styled from 'styled-components';
import * as colors from '../colors';

const Input = styled.input`
  border: 1px solid ${colors.border};
  padding: 4px;
  font-weight: 300;
  font-size: 1em;
`;

export default Input;

export const FullInput = Input.extend`
  width: 100%;
`;
