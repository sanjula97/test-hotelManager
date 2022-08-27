import React from 'react'
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';

function OrderCard({order}) {
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
          <CardText  className="text-muted">
            Order {order.id}
          </CardText>
          <CardText  className="">
            {order.pricelist.name}
          </CardText>
          <div>
            <CardText  className=" mb-0 text-muted">
              {order.items.length} items
            </CardText>
          </div>
          <Button color="primary">primary</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default OrderCard