import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Product({el}) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} style={{width:'250px',height:"250px"}}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text style={{overflowWwrap: 'anywhere'}}>
    {el.description}
    </Card.Text>
    <Button variant="primary">OK</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Product