import React, { Component } from 'react';
import { getFunName } from '../helpers'

class StorePicker extends Component {
    myInput = React.createRef(); // this allows me to the inout value as ref from the form and use it in goToStore function

    goToStore = (e) => {
        e.preventDefault()
        this.props.history.push(`/store/${this.myInput.current.value}`)
    }

    render() {
        return (
            <>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter a Store</h2>
                    <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
                    <button type="submit"> Vistit Store </button>
                </form>
            </>
        )
    }
}

export default StorePicker