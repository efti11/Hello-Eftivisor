import { Component } from 'react';
import Aux from '../../hoc/auxe';

import classes from '../searchbox/searchbox.css' 

class searchbox extends Component {

    render() {
        return(
            <Aux>
        <div className="site-search">
        <h1>Find the best things in Eftiville.</h1>
        <div className="search-container">
        <input className="input--search shadowed search-focuser"
            type="search"
            placeholder="Where to?"
          />
        </div>
      </div>
            </Aux>
        );
    }
}

export default searchbox;