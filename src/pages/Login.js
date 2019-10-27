import React, {Component} from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChange(event){
    let name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  onLogin(){
    //console.info(this.state.email)
    //console.info(this.state.password)
    this.props.history.push('/dashboard')
  }

  render(){
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Email" autoComplete='off' 
                name='email'
                value={this.state.email} onChange={this.onChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password"
                name='password'
                value={this.state.password} onChange={this.onChange} />
              </Form.Group>
              <Button variant="primary" onClick={this.onLogin}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
