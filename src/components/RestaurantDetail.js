import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewListContainer from '../containers/ReviewListContainer';
import ButtonLink from './ButtonLink';
import Button from './Button';
import Image from './Image';
import RestaurantName from './RestaurantName';
import * as colors from '../colors';
import { H2 } from './Heading';
import ButtonBar from './ButtonBar';

const Header = styled.header`
  display: flex;
  margin-bottom: 20px;

  .header-content {
    margin-left: 20px;
  }
`;

const Footer = styled.footer`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.border};
`;

const ButtonBarFooter = ButtonBar.withComponent(Footer);

export default class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { isDeleting: false };
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
  }
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }
  deleteRestaurant(event) {
    this.setState({ isDeleting: true });
    this.props.delete(this.props.match.params.id);
    setTimeout(() => this.props.history.replace('/'), 500);
  }
  render() {
    const { restaurant: {
        name = '',
        service = 0,
        price = '',
        reviews = [],
        wheelchairAccessAX,
        hardOfHearingAX,
        lowVisionAX,
      },
      match: { params: { id } },
    } = this.props;
    return (
      <div>
        {this.state.isDeleting ? 
          <div>Deleting...</div> :
          <section>
            <Header>
              <Image />
              <div className="header-content">
                <RestaurantName>{name}</RestaurantName>
                <div>Price: {price}</div>
                <div>Service: {service} stars</div>
              </div>
            </Header>
            <div>
              <H2>Accessibility Features</H2>
              <ul>
                <li>Wheelchair Access: {wheelchairAccessAX} stars</li>
                <li>Hard of Hearing/Deaf: {hardOfHearingAX} stars</li>
                <li>Low Vision/Blind: {lowVisionAX} stars</li>
              </ul>
            </div>
            <ButtonBarFooter>
              <ButtonLink to={`/restaurant/edit/${id}`}>
                Edit
              </ButtonLink>
              <Button onClick={this.deleteRestaurant}>
                Delete
              </Button>
            </ButtonBarFooter>
            <aside>
              <H2>Reviews</H2>
              <ReviewListContainer
                reviews={reviews}
                restaurantId={id}
              />
            </aside>
          </section>
        }
      </div>
    );
  }
}

RestaurantDetail.defaultProps = {
  restaurant: {
    reviews: [],
  },
};
