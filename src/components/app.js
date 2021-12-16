import React, { Component } from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from './fish'
import fishes from '../sample-fishes';
import base from '../base'

class App extends Component{
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
    //    here ref belongs to firebase. refers to a piece of data in DB
    // sync up with the fishes of a specific store.
    // every time we visit a store base.syncState will store in the DB the fishes that belong to it 
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount(){
        // remove the reference to the store in the DB. Avoud memory leaks
        base.removeBinding(this.ref)
    }


    addFish = body => {
        // copy into a variable the fishes we have in state
        const fishes = { ...this.state.fishes};

        // add new fish to the veariable we created
        fishes[`fish${Date.now()}`] = body
        // call setSate to update state
        this.setState({
            fishes
        })
    }

    loadFishes = () => {
        // console.log()s
        this.setState({
            fishes
        })
    }

    addToOrder = (fish) =>{
        //  copy state
        const order = { ...this.state.order};
        // add fish to cart or update quantity
        order[fish] = order[fish] + 1 || 1
        // call setSate to update state
        this.setState({
           order
        })
    }
    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header subtitle="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {/*iterate over the keys we have in object fishes in object state  */}
                        {Object.keys(this.state.fishes).map(fish => <Fish fish={this.state.fishes[fish]} key={fish} index={fish} addToOrder={this.addToOrder}/> )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadFishes={this.loadFishes}/>
            </div>
        )
    }
}

export default App;