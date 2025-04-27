import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../public/globals.css';
import { FlexCol } from './utils';

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card style={{ width: '18rem', marginTop: '20px' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>John Doe</Card.Title>
          <Card.Text>
            Software engineer passionate about Utopia and Bootstrap.
          </Card.Text>
          <Button variant="primary">Visit Profile</Button>
        </Card.Body>
      </Card>
    </FlexCol>
  )
}
