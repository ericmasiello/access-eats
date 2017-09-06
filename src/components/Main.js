import React from 'react'
import logo from '../logo.svg';

export default function Main(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to AccessEats</h2>
      </div>
      {props.children}
    </div>
  )
}
