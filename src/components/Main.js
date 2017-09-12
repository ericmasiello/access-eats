import React, { Component } from 'react'
import styled from 'styled-components';
import * as colors from '../colors';

const AppContainer = styled.main`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: normal;
  display: flex;
  justify-content: flex-end;
  font-size: 1em;

  span {
    color: ${colors.brand};
  }
`;

const AppHeader = styled.header`
  padding-top: 40px;
`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleRouterChange = this.handleRouterChange.bind(this);
  }
  componentDidMount() {
    this.props.history.listen(this.handleRouterChange)
  }
  handleRouterChange(location, action) {
    this.props.createEditReset();
  }
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <Title><span>access</span>Eats</Title>
        </AppHeader>
        {this.props.children}
      </AppContainer>
    );
  }
}
