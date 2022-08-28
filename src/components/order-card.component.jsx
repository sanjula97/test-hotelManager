import React from 'react'
import { Card, Button, CardBody, CardText } from 'reactstrap';

function OrderCard({order, onChangeState}) {
  let nextState = ""

  switch (order.status) {
    case "New":
      nextState = "Ready"
      break
    case "Ready":
      nextState = "Active"
      break
    case "Active":
      nextState = "Completed"
      break
    case "Completed":
      nextState = "Archive"
      break
    default:
      nextState = ""
  }

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
          <div className='d-flex flex-row justify-content-between'>
          <CardText  className=" mb-0">
              {order.location} 
            </CardText>
            <Button className='' color="primary" onClick={() => onChangeState(order)}>{nextState} {"->"} </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default OrderCard