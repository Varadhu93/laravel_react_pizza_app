import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Modal from "./Modal";
import {addToCart, getAllPizzas} from "./actions/cartActions";
import {connect} from "react-redux";

class Header extends Component {

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }


    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
                    <div className='container'>
                        <Link className='navbar-brand' to='/'>Varadhu's Pizza Shop</Link>
                    </div>
                </nav>
                <div>
                    {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                    <Modal
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                    </Modal>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header)
