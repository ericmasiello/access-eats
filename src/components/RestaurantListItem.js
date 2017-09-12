import React from 'react';
import styled from 'styled-components';
import SmallText from './SmallText';
import Image from './Image';
import RestaurantName from './RestaurantName';
import * as colors from '../colors';

const Name = RestaurantName.extend`
  font-size: 1em;
  margin-bottom: 0;
`;

const RestaurantItemDetail = styled.div`
  margin-bottom: 2px;
`;

function RestaurantListItem(props) {
  const {
    className,
    name,
    category,
    price,
    service,
  } = props;

  const categories = [].concat(category).join(', ');

  return (
    <article className={className}>
      <Image />
      <div>
        <RestaurantItemDetail>
          <Name>
            {name}
          </Name>
        </RestaurantItemDetail>
        <RestaurantItemDetail>
          {price}
        </RestaurantItemDetail>
        <RestaurantItemDetail>
          Service: {service}
        </RestaurantItemDetail>
        <RestaurantItemDetail>
          <SmallText>{categories}</SmallText>
        </RestaurantItemDetail>
      </div>
    </article>
  )
}

export default styled(RestaurantListItem)`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.border};

  > span {
    margin-right: 20px;
  }
`;