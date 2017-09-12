import styled from 'styled-components';
import * as colors from '../colors';

const Heading = styled.div`
  color: ${colors.title};
  margin-top: 0;
  margin-bottom: 0.5em;
`;

export const H1 = Heading.withComponent('h1');
export const H2 = Heading.withComponent('h2');
export const H3 = Heading.withComponent('h3');
export const H4 = Heading.withComponent('h4');
export const H5 = Heading.withComponent('h5');
export const H6 = Heading.withComponent('h6');
