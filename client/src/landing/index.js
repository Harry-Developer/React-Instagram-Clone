import React, { Component } from 'react';
import axios from 'axios'

import { createBrowserHistory } from "history";


//Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from '../components/navigation'
import Alert from 'react-bootstrap/Alert'

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';

import logo from '../images/logo.png';


const history = createBrowserHistory({forceRefresh: true});

class Landing extends Component {

    constructor(props) {

        super(props)

        this.state = {
            email: '',
            password: '',
            invalidCredentials: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };
      
        axios.post(`http://192.168.0.20:3001/api/user/login`, { user })
        .then((response) => {
            if(response.status === 200) {
                localStorage.setItem("user", response.data.token);
                history.push('/')
            }
        })
        .catch((error) => {
            // handle error
            console.log(error)
            if(error.response.data.invalidCredentials) {
                this.setState({ invalidCredentials: true });
            
            }
        })


    }

    render() {
        return(
            <div className="main">
                <Navigation>

                </Navigation>
                
                <div className="centered-form">

                    <img className="logo" src={logo} alt="Logo" />
                    {this.state.invalidCredentials &&
                    <Alert variant="danger">
                        Wrong Email or Password
                    </Alert>
                    }
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  name="password" onChange={this.handleChange} placeholder="Password" />
                        <Form.Text className="text-muted">
                            <a href="/register"> Need an account? </a>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </div>
            </div>
          
        )
    }

}

export default Landing;