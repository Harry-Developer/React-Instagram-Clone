import React, { Component } from 'react';
import axios from 'axios';
//Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from '../components/navigation'
import Alert from 'react-bootstrap/Alert'

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

import logo from '../images/logo.png';

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: '',
            password: '',
            isHiddenUsername: false,
            accountCreated: false
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
            username: this.state.username,
            password: this.state.password
        };
      
        axios.post(`http://192.168.0.20:3001/api/user/register`, { user })
        .then((response) => {
            if(response.status == 200) {
                this.setState({ accountCreated: true });
                if(this.state.isHiddenUsername) {
                    this.setState({ isHiddenUsername: false });
                }
            }
        })
        .catch((error) => {
            // handle error
            if (error.response.data.taken)
                this.setState({ isHiddenUsername: true });
        })


    }

    render() {
        return(
            <div className="main">
                <Navigation />
                <div className="centered-form">
                    
                    <img className="logo" src={logo} alt="Logo" />
                    {this.state.accountCreated &&
                    <Alert variant="success">
                        Awesome, Account Created!
                    </Alert>
                    }
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                onChange={this.handleChange} 
                                placeholder="Enter email" />
                            <Form.Text 
                                className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label> Username </Form.Label>
                            <Form.Control 
                                type="text" 
                                name="username" 
                                onChange={this.handleChange} 
                                placeholder="Username" />
                            {this.state.isHiddenUsername &&
                                <Form.Text 
                                    className="text-muted username-taken">
                                    Username taken <span> 🙁 </span>
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password" 
                                onChange={this.handleChange}
                                placeholder="Password" />
                        </Form.Group>
                        <Button 
                            variant="primary" 
                            type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
          
        )
    }

}

export default Register;