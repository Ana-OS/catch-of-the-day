import React, { Component } from 'react';
import { lightness } from 'stylus/lib/functions';
import {formatPrice} from '../helpers';

class Order extends Component {

    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";

        if(!isAvailable){
            return <li key={key}>Sorry {fish ? fish.name : "fish"} not available</li>
        }
        return <li key={key}>
            {count} lbs {fish.name} - 
             {formatPrice(count * fish.price)}
            </li>
    }


    render(){
        // iterate over the order that we got as props from the app
        const orderIds = Object.keys(this.props.order);

        // calculate the total. we need the fish in the order and the count
        const total = orderIds.reduce((prevTotal, key) => {
            // the key was passed as index in the app to Fish component, it has is the same to find in fishes and order in state
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            
            if(isAvailable){
                return prevTotal + (count * fish.price);
            }
            return prevTotal
        }, 0)


        return(
            <div className="order-wrap">
               <h2>Order</h2>
               <ul className="order"> {orderIds.map(this.renderOrder)}</ul>
               <div className="total">
                   Total:
                   <strong>{formatPrice(total)}</strong>
               </div>
            </div>
        )    
        
    }
}

export default Order