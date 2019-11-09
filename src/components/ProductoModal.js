import React, {Component} from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ProductoModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      stock: '',
      precio: '',
      tipo: '',
      tipos: null
    }
    this.onChange = this.onChange.bind(this);
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

  componentDidMount(){
    this.setState({tipos: this.cargarTipos()});
  }

  componentDidUpdate(prevProps) {
    if(prevProps.producto !== this.props.producto){
      let producto = this.props.producto;
      let nombre = producto === null ? '' : producto.nombre;
      let descripcion = producto === null ? '' : producto.descripcion;
      let stock = producto === null ? '' : producto.stock;
      let precio = producto === null ? '' : producto.precio;
      let tipo = producto === null ? '' : producto.tipo;
      this.setState({
        nombre: nombre,
        descripcion: descripcion,
        stock: stock,
        precio: precio,
        tipo: tipo
      });
    }
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  render() {
    let tipos = this.state.tipos===null? null : this.state.tipos.map((tipo, index)=>
      <option value={tipo.id} key={tipo.id}>{tipo.nombre}</option>
    );
	  return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Nombre" 
                onChange={this.onChange} name={'nombre'}
                autoComplete='off' value={this.state.nombre}/>
              </Form.Group>
              <Form.Group>
                <Form.Control as="textarea" rows="3" name={'descripcion'}
                onChange={this.onChange} value={this.state.descripcion} />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary">
                Archivo
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control as="select" name="tipo" onChange={this.onChange} value={this.state.tipo}>
                  <option>Tipo</option>
                  {tipos}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Stock" 
                onChange={this.onChange} name={'stock'}
                autoComplete='off' value={this.state.stock}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Precio" 
                onChange={this.onChange} name={'precio'}
                autoComplete='off' value={this.state.precio}/>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {this.props.producto === null ? (
            <Button variant="primary" onClick={this.props.close}>
              Crear
            </Button>
          ) : (
            <Button variant="primary" onClick={this.props.close}>
              Modificar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
	  );
	}
}

export default ProductoModal;

ProductoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};