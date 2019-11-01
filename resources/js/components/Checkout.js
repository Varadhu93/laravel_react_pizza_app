import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addShipping} from "./actions/cartActions";
import {Redirect} from 'react-router-dom';

class Checkout extends Component{

    submitData = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const contact = this.getContact.value;
        const address =  this.getAddress.value;
        const amount = (this.props.newTotal).toFixed(2);
        const data = {
            id: new Date(),
            name,
            contact,
            address,
            amount
        };
        this.props.addShipping(data);
    };

    render(){

        if(this.props.redirect === false) {

            let total = (this.props.newTotal).toFixed(2);

            return (
                <form onSubmit={this.submitData}>
                    <div className="container">
                        <div className="collection">
                            <ul className="collection-item">
                                <label>
                                    Name:
                                    <input type="text" name="name" placeholder="Name"
                                           ref={(input) => this.getName = input}/>
                                </label>
                            </ul>
                            <ul className="collection-item">
                                <label>
                                    Contact:
                                    <input type="text" name="contact" placeholder="Contact"
                                           ref={(input) => this.getContact = input}/>
                                </label>
                            </ul>
                            <ul className="collection-item">
                                <label>
                                    Address:
                                    <textarea name="address" placeholder="address"
                                              ref={(input) => this.getAddress = input}
                                    />
                                </label>
                            </ul>
                            <ul className="collection-item">
                                <b>Total: ${total}</b>
                            </ul>
                        </div>
                        <div className="checkout">
                            <button className="waves-effect waves-light btn" type="submit">Order</button>
                        </div>
                    </div>
                </form>
            )
        }else if(this.props.redirect === true){
            return(
                <Redirect to="/"/>
            )
        }

    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        newTotal: state.total,
        redirect: state.redirect
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: (data) => {dispatch({type: 'ADD_SHIPPING'}, addShipping(data))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
