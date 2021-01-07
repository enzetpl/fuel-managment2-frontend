import { Component } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddCarComponent from "./AddCarComponent";
import CarListComponent from "./CarListComponent";

class FuelManagmentApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <h2>Fuel managment app</h2>
                <Switch>
                <Route path="/cars/:id" component={AddCarComponent}/>
                <Route path="/cars" component={CarListComponent}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default FuelManagmentApp;