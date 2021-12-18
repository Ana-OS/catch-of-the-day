import React, { Component } from 'react';
import AddFishForm from './add_fish_form';
import EditFishForm from './edit_fish_form';
import PropTypes from 'prop-types';


class Inventory extends Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadFishes: PropTypes.func
    }
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