import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addShipping} from "./actions/cartActions";

class Checkout extends Component{

/*    componentWillUnmount() {
        if(this.refs.shipping.checked)
            this.props.substractShipping()
    }*/
 /*   handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    };*/

    submitData = (e) => {

        e.preventDefault();
        const name = this.getName.value;
        const contact = this.getContact.value;
        const address =  this.getAddress.value;
        const amount = this.props.total;
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
        return(
            <form onSubmit={this.submitData}>
                <div className="container">
                    <div className="collection">
                        <ul className="collection-item">
                            <label>
                                Name:
                                <input type="text" name="name" placeholder="Name" ref={(input)=>this.getName = input} />
                            </label>
                        </ul>
                        <ul className="collection-item">
                            <label>
                                Contact:
                                <input type="text" name="contact" placeholder="Contact" ref={(input)=>this.getContact = input} />
                            </label>
                        </ul>
                        <ul className="collection-item">
                            <label>
                                Address:
                                <textarea name="address"  placeholder="address" ref={(input)=>this.getAddress = input}
                                />
                            </label>
                        </ul>
                        <ul className="collection-item">
                            <b>Total: {this.props.total} $</b>
                        </ul>
                    </div>
                {/*    <ul className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </ul>*/}
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" type="submit">Order</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        //addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        //substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
        addShipping: (data) => {dispatch({type: 'ADD_SHIPPING'}, addShipping(data))}

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
