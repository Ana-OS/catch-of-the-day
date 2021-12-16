import React, { Component } from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';

class App extends Component{
    state = {
        fishes: {},
        order: {}
    };

    addFish = body => {
        // copy into a variable the fishes we have in state
        const fishes = { ...this.state.fishes};

        // add new fish to the veariable we created
        fishes[`fish${Date.now()}`] = body
        console.log(fishes)

        this.setState({
            fishes
        })
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header subtitle="Fresh Seafood Market"/>
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;