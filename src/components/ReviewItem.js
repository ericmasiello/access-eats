import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { H4 } from './Heading';
import ButtonBar from './ButtonBar';

const Blockquote = styled.blockquote`
  margin: 0;
`;

export default function ReviewItem(props) {
  const { id, reviewer, stars, message, onEdit, onDelete } = props;
  return (
    <article>
      <H4>{reviewer}</H4>
      <div>Stars: {stars}</div>
      <Blockquote>
        <p>{message}</p>
      </Blockquote>
      <ButtonBar>
        <Button onClick={() => onEdit(id)}>
          Edit
        </Button>
        <Button onClick={() => onDelete(id)}>
          Delete
        </Button>
      </ButtonBar>
    </article>
  );
}
