import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import Checkout from "./Checkout";
import Orders from "./Orders";

class App extends Component {

    render() {
        return (

            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/orders/:email" component={Orders}/>
                        <Route path="/checkout" component={Checkout}/>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
