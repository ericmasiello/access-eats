import React, { Component } from 'react';

export default class ReviewEditItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    const { id, reviewer, stars, message } = props;
    this.state = {
      id,
      reviewer,
      stars,
      message,
    };
  }  

  handleClick(event) {
    event.preventDefault();
    this.props.onSave(this.state);
    this.setState({
      id: '',
      reviewer: '',
      stars: 3,
      message: '',
    });
  };

  render() {
    const { reviewer, stars, message } = this.state;
    const { saveMessage } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="reviewer">Reviewer:</label>
          <input
            onChange={(event) => this.setState({ reviewer: event.target.value })}
            type="text"
            name="reviewer"
            id="reviewer"
            value={reviewer}
          />
        </div>
        <div>
          <label htmlFor="stars">Stars:</label>
          <input
            onChange={(event) => this.setState({ stars: event.target.value })}
            type="number"
            name="stars"
            id="stars"
            min="0"
            max="5"
            step="0.1"
            value={stars}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={(event) => this.setState({ message: event.target.value })}
            name="message"
            id="message"
            value={message}
          />
        </div>
        <button onClick={this.handleClick}>{saveMessage}</button>
      </form>
    );
  }
}

ReviewEditItem.defaultProps = {
  id: '',
  reviewer: '',
  stars: 3,
  message: '',
  saveMessage: 'Save',
};
