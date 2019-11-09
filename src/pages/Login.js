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
    this.props.history.push('/dashboard')
  }

  componentDidMount(){
    console.info('didMount');
  }

  componentWillUnmount(){
    console.info('willUnmount');
  }

  render(){
    return (
      <Container style={{marginTop: '50px'}}>
        <Row>
          <Col sm={{span:4, offset:4}}>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Email" 
                onChange={this.onChange} name={'email'}
                autoComplete='off' value={this.state.email}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" 
                onChange={this.onChange} name={'password'}
                value={this.state.password}/>
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
