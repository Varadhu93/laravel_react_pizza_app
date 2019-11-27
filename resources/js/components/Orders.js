import React, { Component } from 'react';
import {getOrder} from './actions/cartActions'
import {connect} from "react-redux";


class Orders extends Component{

    componentDidMount = () => {
        this.props.getOrder();
    };

    render() {
        // let orderList = this.props.orders.map(order=>{
        //     return(       
        //         <div>
        //             <div>{order.order_id}</div>
        //             <div>{order.name}</div>
        //             <div>{order.contact}</div>
        //             <div>{order.amount}</div>
        //          </div>             
        //     )
        // });

        return(
            <div className="container">
                <h3 className="center">Orders</h3>
                <div className="box">
                <table className="table table-striped table-bordered table-sm">
                        <thead className ="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>   
                        <tbody>
                            {
                                this.props.orders.map(order => {                                                  
                                    return (
                                        <tr>
                                            <td>{order.order_id}</td>
                                            <td>{order.name}</td>
                                            <td>{order.contact}</td>
                                            <td>{order.amount}</td>
                                        </tr>
                                    )
                                })
                            }    
                        </tbody>
                </table>
                </div>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
    }
};
const mapDispatchToProps = (dispatch) =>{

    return{      
        getOrder: () => {dispatch(getOrder())},    
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Orders)
