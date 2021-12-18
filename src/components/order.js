import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';
import {TransitionGroup, CSSTransition } from 'react-transition-group';


class Order extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  }

    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        const transitionOptions = {
            classNames: "order",
            key,
            timeout: { enter: 500, exit: 500 }
        };

        if(!fish) return null
        if (!isAvailable) {
            return (
              <CSSTransition {...transitionOptions}>
                <li key={key}>
                  Sorry {fish ? fish.name : "fish"} is no longer available
                </li>
              </CSSTransition>
            );
          };

          return (
            <CSSTransition {...transitionOptions}>
              <li key={key}>
                <span>
                  <TransitionGroup component="span">
                      <span>{count}</span>
                  </TransitionGroup>
                  lbs {fish.name} - 
                  {formatPrice(count * fish.price)}
                  <button onClick={() => this.props.removeFromOrder(key)}>
                    &times;
                  </button>
                </span>
              </li>
            </CSSTransition>
          );
        };


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
               <TransitionGroup component="ul" className="order"> {orderIds.map(this.renderOrder)}</TransitionGroup>
               <div className="total">
                   Total:
                   <strong>{formatPrice(total)}</strong>
               </div>
            </div>
        )    
        
    }
}

export default Order