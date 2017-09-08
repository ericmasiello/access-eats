import React, { Component } from 'react'
import logo from '../logo.svg';

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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AccessEats</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}
