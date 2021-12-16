import React, { Component } from 'react';
import {formatPrice} from '../helpers';

class Fish extends Component {
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