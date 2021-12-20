import React, { Component } from 'react';
import AddFishForm from './add_fish_form';
import EditFishForm from './edit_fish_form';
import Login from './login';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, {firebaseApp} from '../base';

class Inventory extends Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadFishes: PropTypes.func
    }
    state = {
        uid: null,
        owner: null
    };

    authHandler = async (authData) => {
        console.log(authData)
    // look up the curr store in database
        const store =  await base.fetch(this.props.storeId, {context: this})
        console.log(store)
    // claim it if there's no owner
        if(!store.owner){
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }

    // set the state of the inventoryto reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.id
        });
    };

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
    }

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({
            uid: null
        });
    };

    render(){
        const logout = <button onClick={this.logout}>Log Out!</button>
        // check if user is logged in
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}/>
        }
        //  check if user is  not the owner of the store
        if(this.state.uid !== this.state.owner){
            return <div>
                    <p>Sorry, you are not the owner of this store</p>
                    {logout}
                </div>
        }
        // they must be the owner, render their inventory
        return(
            <div className="inventory">
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishes).map(key => <EditFishForm fish={this.props.fishes[key]} key={key} index={key} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish}/>)}
                < AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadFishes}>Load Sample Fishes</button>
            </div>
        )    
    }
}

export default Inventory