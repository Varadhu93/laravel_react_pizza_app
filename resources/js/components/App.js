
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Pizza from "./Pizza";

class App extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Pizza />
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
