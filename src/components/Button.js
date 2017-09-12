import styled from 'styled-components';
import * as colors from '../colors';

export default styled.button`
  border-radius: 4px;
  border: none;
  background-color: ${colors.brand};
  color: ${colors.baseInverted};
  text-transform: uppercase;
  padding: 5px 25px 4px;
  text-align: center;
  font-size: 0.8em;
  display: inline-block;
  font-weight: 300;
`;