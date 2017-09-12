import React, { Component } from 'react';
import ButtonLink from './ButtonLink';
import Button from './Button';
import Input, { FullInput } from './Input';
import Form from './Form';

const LargeInput = FullInput.extend`
  font-size: 2em;
`

const priceOptions = ['$', '$$', '$$$', '$$$$', '$$$$$'];

export default class RestaurantEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      price: '$$',
      service: '3',
      wheelchairAccessAX: '',
      hardOfHearingAX: '',
      lowVisionAX: '',
    };
    this.onChangeName = this.onChange('name').bind(this);
    this.onChangeCategory = this.onChange('category').bind(this);
    this.onChangePrice = this.onChange('price').bind(this);
    this.onChangeService = this.onChange('service').bind(this);
    this.onChangeWheelchairAccessAX = this.onChange('wheelchairAccessAX').bind(this);
    this.onChangeHardOfHearingAX = this.onChange('hardOfHearingAX').bind(this);
    this.onChangeLowVisionAX = this.onChange('lowVisionAX').bind(this);

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
      const {
        name,
        category,
        price,
        service,
        wheelchairAccessAX,
        hardOfHearingAX,
        lowVisionAX,
      } = nextProps.restaurantDetail;
      this.setState({
        name,
        category: category.join(', '),
        price,
        service,
        wheelchairAccessAX: wheelchairAccessAX === null ? '' : wheelchairAccessAX,
        hardOfHearingAX: hardOfHearingAX === null ? '' : hardOfHearingAX,
        lowVisionAX: lowVisionAX === null ? '' : lowVisionAX,
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
    const {
      name,
      price,
      service,
      wheelchairAccessAX,
      hardOfHearingAX,
      lowVisionAX,
    } = this.state;
    const category = this.state.category.split(',').map(cat => cat.trim());
    const payload = {
      name,
      category,
      price,
      service,
      wheelchairAccessAX,
      hardOfHearingAX,
      lowVisionAX,
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
        <div>Saved successfully! <ButtonLink to="/">Go Home</ButtonLink></div>
      );
    }
    return (
      <Form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="name">Restaurant Name:</label>
          <LargeInput
            onChange={this.onChangeName}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="category">Categories: (comma separate)</label>
          <FullInput
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
          <label htmlFor="service">Service: </label>
          <Input
            onChange={this.onChangeService}
            type="number"
            name="service"
            id="service"
            min="0"
            max="5"
            step="0.1"
            value={this.state.service}
          />
        </div>
        <div>
          <label htmlFor="wheelchairAccessAX">Wheelchair Access: </label>
          <Input
            onChange={this.onChangeWheelchairAccessAX}
            type="number"
            name="wheelchairAccessAX"
            id="wheelchairAccessAX"
            min="0"
            max="5"
            step="0.1"
            value={this.state.wheelchairAccessAX}
          />
        </div>
        <div>
          <label htmlFor="wheelchairAccessAX">Hard of Hearing/Deaf: </label>
          <Input
            onChange={this.onChangeHardOfHearingAX}
            type="number"
            name="hardOfHearingAX"
            id="hardOfHearingAX"
            min="0"
            max="5"
            step="0.1"
            value={this.state.hardOfHearingAX}
          />
        </div>
        <div>
          <label htmlFor="lowVisionAX">Low Vision/Blind: </label>
          <Input
            onChange={this.onChangeLowVisionAX}
            type="number"
            name="lowVisionAX"
            id="lowVisionAX"
            min="0"
            max="5"
            step="0.1"
            value={this.state.lowVisionAX}
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
