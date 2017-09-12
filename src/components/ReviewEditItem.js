import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import Form from './Form';

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
      <Form>
        <div>
          <label htmlFor="reviewer">Reviewer:</label>
          <Input
            onChange={(event) => this.setState({ reviewer: event.target.value })}
            type="text"
            name="reviewer"
            id="reviewer"
            value={reviewer}
            size="50"
          />
        </div>
        <div>
          <label htmlFor="stars">Stars:</label>
          <Input
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
          <Textarea
            onChange={(event) => this.setState({ message: event.target.value })}
            name="message"
            id="message"
            value={message}
          />
        </div>
        <Button onClick={this.handleClick}>
          {saveMessage}
        </Button>
      </Form>
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
