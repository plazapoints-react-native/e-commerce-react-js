import React, {Component} from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Menu from '../components/Menu';
import ProductoCard from '../components/ProductoCard';
import ProductoModal from '../components/ProductoModal';

class Dashboard extends Component{

	constructor(props) {
    super(props);
    this.state = {
      tipos: null,
      productos: null,
      producto: null,
      show: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.editar = this.editar.bind(this);
  }

  componentDidMount(){
    this.setState({productos: this.cards(), tipos: this.cargarTipos()});
  }

  cards(){
    let productos = [{
      nombre: 'Producto 1',
      descripcion: 'Descripcion 1',
      tipo: '1',
      stock: '10',
      precio: '10'
    },{
      nombre: 'Producto 2',
      descripcion: 'Descripcion 2',
      tipo: '1',
      stock: '20',
      precio: '15'
    },{
      nombre: 'Producto 3',
      descripcion: 'Descripcion 3',
      tipo: '2',
      stock: '30',
      precio: '10'
    },{
      nombre: 'Producto 4',
      descripcion: 'Descripcion 4',
      tipo: '2',
      stock: '20',
      precio: '30'
    },{
      nombre: 'Producto 5',
      descripcion: 'Descripcion 5',
      tipo: '2',
      stock: '10',
      precio: '40'
    }]
    return productos;
  }

  cargarTipos(){
    let tipos = [{
      id: 1,
      nombre: 'Celular'
    },{
      id: 2,
      nombre: 'Laptop'
    }];
    return tipos;
  }

  open(){
    this.setState({producto: null, show: true});
  }

  close(){
    this.setState({show: false});
  }

  editar(producto){
    this.setState({producto: producto, show: true});
  }

  render(){
    let tipos = this.state.tipos===null? null : this.state.tipos.map((tipo, index)=>
      <option value={tipo.id} key={tipo.id}>{tipo.nombre}</option>
    );
    let productos = this.state.productos===null? null : this.state.productos.map((producto, index)=>
      <Col sm={6} key={index}>
        <ProductoCard producto={producto} editar={()=>{this.editar(producto)}}/>
      </Col>
    );
    return (
      <React.Fragment>
        <Menu/>
        <Container fluid>
          <Row>
            <Col sm={3}>
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Producto" autoComplete='off' />
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select">
                    <option>Tipo</option>
                    {tipos}
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col sm={9}>
              <Button variant="primary" onClick={this.open}>
                Agregar
              </Button>
              <Button variant="secondary" style={{marginLeft: '5px'}}>
                Inactivar
              </Button>
              <Row>
                {productos}
              </Row>
            </Col>
          </Row>
          <ProductoModal show={this.state.show} close={this.close} producto={this.state.producto} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
