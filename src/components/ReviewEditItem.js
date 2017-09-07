import React, { Component } from 'react';

export default class ReviewEditItem extends Component {
  render() {
    const { id, reviewer, stars, message } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="reviewer">Reviewer:</label>
          <input type="text" id="reviewer" />
        </div>
        <div>
          <label htmlFor="stars">Stars:</label>
          <input type="text" id="stars" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" />
        </div>
      </form>
    );
  }
}
