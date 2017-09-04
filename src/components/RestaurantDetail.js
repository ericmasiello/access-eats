import React, { Component } from 'react';

export default class RestaurantDetail extends Component {
  componentDidMount() {
    this.props.loadRestaurantDetail(this.props.match.params.id);
  }
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>Detail! {id}</div>
    );
  }
}
