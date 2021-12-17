import React, { Component } from 'react';
import {formatPrice} from '../helpers';

class EditFishForm extends Component{
    handleChange = (e) => {
        // instead of unigs ref to get the value of each input (like we did in addFishForm) we can use the event.currentTarget.value
        console.log(e.currentTarget.value)
        // take a copy o fthe current fish we want to update
        const updateFish = {
            ...this.props.fish, 
            // instead of changin a specifi input, we just use computed property names - and by saying "e.currentTarget.name" it knows which name (name=name, name=price, name=desc) to change
            [e.currentTarget.name]: e.currentTarget.value
        };

        this.props.updateFish(this.props.index, updateFish)
    }

    render(){
        return(
            <div className="fish-edit">
                <input name="name" 
                value={this.props.fish.name} 
                onChange={this.handleChange}
                type="text"/>

                <input
                name="price"
                value={this.props.fish.price}
                onChange={this.handleChange}
                type="text"/>

                <select name="status"   
                value={this.props.fish.status} 
                onChange={this.handleChange}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="desc"
                value={this.props.fish.desc} 
                onChange={this.handleChange}
                />
                <input
                name="image"
                value={this.props.fish.image}
                onChange={this.handleChange}
                type="text"
                />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm