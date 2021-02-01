import { Component } from "react";
import AppNavbar from "./AppNavbar";
import AuthenticationService from "./AuthenticationService";
import CarsDataService from "./CarsDataService";
import refuelIcon from "../img/blood-drop.png";
class CarListComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            message: null
        }

        this.refreshCars = this.refreshCars.bind(this);
        this.updateCar = this.updateCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);

    }

    componentDidMount() {
        this.refreshCars();
        
    }

    refreshCars() {
        CarsDataService.retreiveAllCars()
            .then(
                response=> {

                    this.setState({
                        cars: response.data
                    });
                }
            ) 
    }

    addCar() {
        this.props.history.push("/cars/new")
    }

    updateCar(id) {
        this.props.history.push(`/cars/${id}`)
    }

    deleteCar(id) {
        CarsDataService.deleteCar(id)
            .then(
                ()=> {
                    this.setState({
                        message: `Delete of car ${id} succesfull`
                    })
                    this.refreshCars();
                }
            )
        
    }
    addRefuel(id) {
        this.props.history.push(`/cars/${id}/refuels/new`)
    }

    showRefuels(id) {
        this.props.history.push(`/cars/${id}/refuels`)
    }
    showStats(id) {
        this.props.history.push(`/cars/${id}/stats`)
    }
    render() {
        const isLoggedIn = AuthenticationService.isUserLoggedIn();
        let message = "";
        if(!isLoggedIn) {
            message = <div className="alert alert-warning">Please login to see list of your cars</div>
        } else if(isLoggedIn && this.state.cars.length===0) {
            message = <div className="alert alert-warning">Please add first car</div>
        }
        return (
            <div className="container">
                 <AppNavbar/>
                <h3>All cars</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>brand</th>
                            <th>model</th>
                            <th>Fuel type</th>
                            <th>production year</th>
                            <th>plate</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.cars.map(
                            car =>
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.fuelType}</td>
                                <td>{car.productionYear}</td>
                                <td>{car.plate}</td>
                                <td><button className="btn btn-success btn-lg" onClick={() => this.addRefuel(car.id)}><img src={refuelIcon} height="40rem"/>Add refuel</button>
                                    <button className="btn btn-success btn-lg" onClick={() => this.showStats(car.id)}>show summary</button></td>
                                <td className="btn-group-vertical">
                                <button className="btn btn-success btn-sm" onClick={() => this.showRefuels(car.id)}>show refuels</button>
                                <button className="btn btn-info btn-sm" onClick={() => this.updateCar(car.id)}>Update car</button>
                                <button className="btn btn-warning btn-sm" onClick={() => this.deleteCar(car.id)}>Delete car</button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                {message}
                <button className="btn btn-success" onClick={() => this.addCar()}>Add new car</button>
                <a className="btn btn-outline-success m-1" href="/stats">your statistics</a>
            </div>
        )
    }
}

export default CarListComponent;