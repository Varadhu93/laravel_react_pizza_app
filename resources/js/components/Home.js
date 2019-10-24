import React, { Component } from 'react';
import {addToCart, getAllPizzas} from './actions/cartActions'
import {connect} from "react-redux";
import axios from "axios";

class Home extends Component{

    handleClick(id){
        this.props.addToCart(id);
    }

    componentDidMount () {

       this.props.getAllPizzas();
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.image} alt={item.pizza_name}/>
                        <span className="card-title">{item.pizza_name}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        getAllPizzas: () => {dispatch(getAllPizzas())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

