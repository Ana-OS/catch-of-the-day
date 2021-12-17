import React, { Component } from 'react';
import AddFishForm from './add_fish_form';
import EditFishForm from './edit_fish_form';


class Inventory extends Component {
    render(){
        return(
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => <EditFishForm fish={this.props.fishes[key]} key={key} index={key} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish}/>)}
                < AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadFishes}>Load Sample Fishes</button>
            </div>
        )    
    }
}

export default Inventory