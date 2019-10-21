import axios from 'axios'
import React, { Component } from 'react'


class Pizza extends Component {

    constructor () {
        super()

        this.state = {
            pizzas: []
        }
    }

    componentDidMount () {
        axios.get('/home').then(response => {
            this.setState({
                pizzas: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const { pizzas } = this.state

        return (
            <div class="container">
                    <div class="d-flex">
                        <div class="card-deck">
                            {pizzas.map(pizza => (
                                <div class="card">
                                    <img class="card-img-top"
                                         src={pizza.image}
                                         alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{pizza.pizza_name}</h5>
                                        <h6 class="card-text">{pizza.price}</h6>
                                    </div>
                                    <div class="card-footer">
                                        <a href="/order" className="btn btn-primary">Buy</a>
                                        <button className="btn"><i className="fa fa-plus"></i></button>
                                        <button className="btn"><i className="fa fa-minus"></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Pizza
