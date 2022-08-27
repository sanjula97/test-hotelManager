import React from 'react'
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';

function OrderCard() {
  return (
    <div className=''>
      <Card
        className="my-2"
        color="primary"
        outline
        style={{
          width: '18rem'
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            Special Title Treatment
          </CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button color="primary">primary</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default OrderCard