import React, {Component} from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import CardEcommerce from '../components/CardEcommerce';

class Dashboard extends Component{

	constructor(props) {
    super(props);
    this.state = {
      lista: [
        {nombre : 'Producto 1',
        descripcion: 'Producto Desc 1'},
        {nombre : 'Producto 2',
        descripcion: 'Producto Desc 2'},
        {nombre : 'Producto 3',
        descripcion: 'Producto Desc 3'}
      ]
    }
  }

  render(){
    return (
      <Container>
          <Row>
            <Col md={{ span: 4}}>
            
            </Col>
            <Col md={{ span: 8}}>

            {this.state.lista.map(
              (producto) =>
              <CardEcommerce nombre={producto.nombre} descripcion={producto.descripcion} />
            )}
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Dashboard;
