import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Example = (props) => {
  return (
    <div className="makeup-card">
      <Card className="card">
        <CardBody>
          <CardTitle>{props.brand}</CardTitle>
          <CardSubtitle>{props.name}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.image} alt="Products" />
        <CardBody>
          <CardText>{props.description}</CardText>
          <CardText> $ {props.price}</CardText>
          <CardLink href={props.link}>Product Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;


