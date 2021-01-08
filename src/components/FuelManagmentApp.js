import { Component } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddCarComponent from "./AddCarComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import CarListComponent from "./CarListComponent";
import LoginComponent from './LoginComponent'
import LogoutComponent from "./LogoutComponent";

class FuelManagmentApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <h2>Fuel managment app</h2>
                <Switch>
                <AuthenticatedRoute exact path="/cars/:id" component={AddCarComponent}/>
                <Route path="/cars" component={CarListComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/logout" component={LogoutComponent}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default FuelManagmentApp;