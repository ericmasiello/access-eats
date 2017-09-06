import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const priceOptions = ['$', '$$', '$$$', '$$$$', '$$$$$'];

export default class RestaurantEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      price: '',
      stars: 3,
    };
    this.onChangeName = this.onChange('name').bind(this);
    this.onChangeCategory = this.onChange('category').bind(this);
    this.onChangePrice = this.onChange('price').bind(this);
    this.onChangeStars = this.onChange('stars').bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.load) {
      const { match: { params: { id } } } = this.props;
      this.props.load(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurantDetail && nextProps.restaurantDetail.id) {
      const { name, category, price, stars } = nextProps.restaurantDetail;
      this.setState({
        name,
        category: category.join(', '),
        price,
        stars,
      });
    }
  }

  onChange(key) {
    return (event) => {
      this.setState({
        [key]: event.target.value,
      });
    };
  }
  onSubmit(event) {
    event.preventDefault();
    const { name, price, stars } = this.state;
    const category = this.state.category.split(',').map(cat => cat.trim());
    const payload = {
      name,
      category,
      price,
      stars,
    };

    // add the id if we are editing a record
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      payload.id = this.props.match.params.id;
    }

    this.props.save(payload);
  }

  render() {
    if (this.props.saved) {
      return (
        <div>Saved successfully! <Link to="/">Home</Link></div>
      );
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="name">Restaurant Name:</label>
          <input
            onChange={this.onChangeName}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="category">Categories: (comma separate)</label>
          <input
            onChange={this.onChangeCategory}
            type="text"
            name="name"
            id="category"
            value={this.state.category}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <select
            id="price"
            name="price"
            onChange={this.onChangePrice}
            value={this.state.price}
          >
            <option />
            {priceOptions.map(price => (
              <option
                value={price}
                key={price}
              >
                {price}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="stars">Stars: </label>
          <input
            onChange={this.onChangeStars}
            type="number"
            name="stars"
            id="stars"
            min="0"
            max="5"
            step="0.1"
            value={this.state.stars}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
