import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.brand} :  {props.name} </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.ingredient}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;



