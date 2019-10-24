import React, { Component } from 'react'

class OrderSummary extends Component{

    constructor(props) {
        super(props)
        this.state = {quantity: 1}
        /*this.state = {
            orderList: []
        }*/
    }

  orderSummary(pizza){

        //console.log(pizza.id , pizza.pizza_name, pizza.price);
        this.orderList.forEach(order => {
            if(pizza.id == order.id){
                //
            }
        })

    }

    render() {

        let content= [];
    }
}

export default OrderSummary
