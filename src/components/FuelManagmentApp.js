import { Component } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddCarComponent from "./AddCarComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import CarListComponent from "./CarListComponent";
import LoginComponent from './LoginComponent'
import LogoutComponent from "./LogoutComponent";
import RegisterComponent from "./RegisterComponent";

class FuelManagmentApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <AuthenticatedRoute exact path="/cars/:id" component={AddCarComponent}/>
                <Route path="/cars" component={CarListComponent}/>
                <Route path="/register" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/logout" component={LogoutComponent}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default FuelManagmentApp;