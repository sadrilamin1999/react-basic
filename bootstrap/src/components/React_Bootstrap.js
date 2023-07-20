import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const React_Bootstrap = () => {
  return (
    <Card style={{ width: '18rem' }}>
         <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint blanditiis non rerum molestiae cupiditate reprehenderit fugiat officia quis voluptates voluptatem.</p>
          </Card.Text>
          
         </Card.Body>
        <Button variant="primary">Go somewhere</Button>
    </Card>
  )
}

export default React_Bootstrap