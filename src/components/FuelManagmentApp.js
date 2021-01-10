import { Component } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddCarComponent from "./AddCarComponent";
import AddRefuelComponent from "./AddRefuelComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import CarListComponent from "./CarListComponent";
import HomeComponent from "./HomeComponent";
import LoginComponent from './LoginComponent'
import LogoutComponent from "./LogoutComponent";
import RefuelsListComponent from "./RefuelsListComponent";
import RegisterComponent from "./RegisterComponent";

class FuelManagmentApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={HomeComponent}/>
                <AuthenticatedRoute path="/cars/:carId/refuels/:refuelId" component={AddRefuelComponent}/>
                <AuthenticatedRoute path="/cars/:carId/refuels/" component={RefuelsListComponent}/>
                <AuthenticatedRoute path="/cars/:carId" component={AddCarComponent}/>
                <AuthenticatedRoute path="/cars" component={CarListComponent}/>
                <Route path="/register" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default FuelManagmentApp;