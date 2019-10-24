
/*import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Pizza from "./Pizza";

class App extends Component {

    render () {
        return (
            <div className ="App"></div>
         /!* <HashRouter>
                <div>
                    <Header />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Pizza />
                    </div>
                    <div className="col-3"></div>
                </div>
            </HashRouter>*!/
        )
    }
}

//ReactDOM.render(<App />, document.getElementById('app'))
export default App*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'
import {Provider} from "react-redux";
import { createStore } from 'redux';


class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cart" component={Cart}/>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
