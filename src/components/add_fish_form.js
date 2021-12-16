import React, { Component } from 'react';

class AddFishForm extends Component {
    render(){
        return(
            <From classNAme="fish-edit">
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="price" placeholder="Price"/>
                <input type="text" name="status" placeholder="Status"/>
                <textarea name="desc" placeholder="Desc"></textarea>
                <input type="text" name="image" placeholder="Imges"/>
                <button type="submit">Add Fish</button>
            </From>
        )
    }
}

export default AddFishForm