import React, { Component } from 'react';
import axios from 'axios'

//Components
import Navigation from '../components/navigation'

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './feed.css';

import logo from '../images/logo.png';

class Feed extends Component {


    render() {
        return(
            <div className="main">
                <Navigation>

                </Navigation>
            </div>
          
        )
    }

}

export default Feed;