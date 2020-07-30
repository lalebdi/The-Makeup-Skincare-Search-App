import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="skin-cards">
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }} className="skin-btn" >{props.brand} :  {props.name} </Button>
      <Collapse isOpen={isOpen}>
        <Card className="skin-part">
          <CardBody>
          {props.ingredient}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;



