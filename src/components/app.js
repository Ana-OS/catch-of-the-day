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
        // when the component mounts we need to check if there's something in local storage and if there is then we render it
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
        if (localStorageRef){
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
    //    here ref belongs to firebase. refers to a piece of data in DB
    // sync up with the fishes of a specific store.
    // every time we visit a store base.syncState will store in the DB the fishes that belong to it 
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }
    // to persist the order we will use localStorage everytime the app updates 
    componentDidUpdate() {
        // console.log(this.state.order)
        // keept in localSotrage the order for a specifc store
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
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

    updateFish = (key, updatedFish) =>{
        // copy into a variable the fishes we have in state
        const fishes = { ...this.state.fishes};
        // update state
        fishes[key] =  updatedFish;
        // set state again
        this.setState({fishes})
    }

    deleteFish = (key) =>{
        const fishes = { ...this.state.fishes};
        fishes[key] = null;
        this.setState({fishes})
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

    removeFromOrder = (key) =>{
        const order = { ...this.state.order};
        // add fish to cart or update quantity
        delete order[key] 
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
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                <Inventory addFish={this.addFish} loadFishes={this.loadFishes} fishes={this.state.fishes} updateFish={this.updateFish} deleteFish={this.deleteFish} storeId={this.props.match.params.storeId}/>
            </div>
        )
    }
}

export default App;