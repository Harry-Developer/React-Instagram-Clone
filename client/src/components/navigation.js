import React, { Component } from 'react';

//Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { createBrowserHistory } from "history";

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const history = createBrowserHistory({forceRefresh: true});

class Navigation extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: false
        }

        this.handleSignOut = this.handleSignOut.bind(this);
        this.isUserSignedIn = this.isUserSignedIn.bind(this);
    }

    componentWillMount(){
        this.isUserSignedIn()
    }

    isUserSignedIn = () => {
        if(localStorage.getItem('user') !== null)
            this.setState({ isLoggedIn: true })
    }

    handleSignOut = () => {
        if(this.state.isLoggedIn) {
            localStorage.removeItem("user");
            history.push('/')
        }

        this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }

    

    render() {
        return(
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home"> Instagram </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {this.state.isLoggedIn &&
                            <Nav.Link href="/" onClick={this.handleSignOut}> Sign Out </Nav.Link>
                        }
                        {!this.state.isLoggedIn &&
                            <Nav.Link href="/login"> Login </Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}

export default Navigation;