import React, { Component } from 'react';
import axios from 'axios'

//Components
import Navigation from '../components/navigation'
import Post from './post'

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './feed.css';

class Feed extends Component {

    render() {
        return(
            <div className="main">
                <Navigation />
                //<Post />
            
            </div>
          
        )
    }

}

export default Feed;