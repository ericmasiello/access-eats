import styled from 'styled-components';

export default styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 8px;
  }
`;
