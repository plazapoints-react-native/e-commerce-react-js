import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap';

class ProductoCard extends Component {

  render() {
    let producto = this.props.producto;
	  return (
      <Card style={{marginTop: '10px'}}>
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            {producto.descripcion}
          </Card.Text>
          <Card.Text>
            Stock {producto.stock}
          </Card.Text><Card.Text>
            Precio {producto.precio}
          </Card.Text>
          <Button variant="primary" onClick={this.props.editar} >Editar</Button>
        </Card.Body>
      </Card>
	  );
	}
}

export default ProductoCard;
