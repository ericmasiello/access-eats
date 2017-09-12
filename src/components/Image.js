import styled from 'styled-components';

export default styled.span`
  display: block;
  background-image: url('https://placeholdit.imgix.net/~text?txtsize=16&txt=Photo&w=300&h=300');
  height: 115px;
  width: 115px;
  background-position: center;

  @media(min-width: 650px) {
    height: 200px;
    width: 200px;
    background-size: cover;
  }
`;