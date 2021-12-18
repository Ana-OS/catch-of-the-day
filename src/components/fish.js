import React, { Component } from 'react';
import {formatPrice} from '../helpers';
import PropTypes from 'prop-types';


class Fish extends Component {
    // static because even though we are creating multiple fish we use the same proptypes
    static propTypes = {
        // shape allows us to pass an object with specific properties
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number,
        }),
        addToOrder: PropTypes.func
    };

    render(){
        const {image, name, price, desc, status} = this.props.fish
        const available = status === "available"
        return(
            <div className="single-fish">
               <li className="menu-fish">
                   <img src={image} alt=""/>
                   <h3 className="fish-name">
                       {name}
                       <span className="price">{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                    <button disabled={!available} 
                    onClick={() => this.props.addToOrder(this.props.index)}> 
                        {available ? "Add to Order" : "Sold Out"} 
                    </button>
               </li>
            </div>
        )
    }
}

export default Fish