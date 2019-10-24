import axios from 'axios'
import React, { Component } from 'react'
import OrderSummary from "./OrderSummary";

class Pizza extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pizzas: []
        }

        this.obj = new OrderSummary();
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
        const { pizzas } = this.state;
        const chunk =3;
        const list = [];
        let childList = [];
        let j = 0;
        const copyPizzas = [...pizzas];

        for (let i=0,j=copyPizzas.length; i<j; i+=chunk) {
            childList = copyPizzas.slice(i,i+chunk);
            list.push(childList)
        }

        return (
            <div className="container">
                    <div className="row">
                        {list.map((childList,index) => (
                        <div className="card-deck" key={index}>
                            {childList.map((pizza) => (
                                <div className="card" key={pizza.id}>
                                    <img height={200} width={100} className="card-img-top"
                                         src={pizza.image}
                                         alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{pizza.pizza_name}</h5>
                                        <h6 className="card-text">{pizza.price}</h6>
                                    </div>
                                    <div className="card-footer">
                                        <button  onClick={() => this.obj.orderSummary(pizza)} value = {pizza} className="btn btn-primary">Add to Cart</button>
                                       {/*<button className="btn"><i className="fa fa-plus"></i></button>
                                        <button className="btn"><i className="fa fa-minus"></i></button>*/}
                                    </div>
                                </div>
                            ))}
                        </div>
                        ))}
                    </div>
            </div>
        )
    }


  /* render(){
        const { pizzas } = this.state;
        const chunk =3;
        const list = [];
        let childList = [];
        let j = 0;
        const copyPizzas = [...pizzas];
        let content = [];

        for (let i=0,j=copyPizzas.length; i<j; i+=chunk) {
            childList = copyPizzas.slice(i,i+chunk);
            list.push(childList)
        }

        {list.map((childList) => (
            childList.map((pizza) => {
                 content.push(
                     <CardDeck>
                     <Card>
                         <Card.Img variant="top" src={pizza.image}/>
                         <Card.Body>
                             <Card.Title>{pizza.pizza_name}</Card.Title>
                             <Card.Text>
                                 {pizza.price}
                             </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                             <a href="/order" className="btn btn-primary">Buy</a>
                             <button className="btn"><i className="fa fa-plus"></i></button>
                             <button className="btn"><i className="fa fa-minus"></i></button>
                         </Card.Footer>
                     </Card>
                     </CardDeck>
                 );
            })
        ))}
        return (
                {content}
        );
    }*/
}

export default Pizza
