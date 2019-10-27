import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap';

class CardEcommerce extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Card >
        <Card.Body>
          <Card.Title>{this.props.nombre}</Card.Title>
          <Card.Text>
            {this.props.descripcion}
          </Card.Text>
          <Button variant="primary">Editar</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardEcommerce;
