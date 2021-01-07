import { Component } from "react";
import CarsDataService from "./CarsDataService";
class CarListComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            message: null
        }

        this.refreshCars = this.refreshCars.bind(this);
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
    
    render() {
        return (
            <div className="container">
                <h3>All cars</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>mark</th>
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
                                {/* <td><button className="btn btn-success" onClick={() => this.updateCourse(course.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteCourse(course.id)}>Delete</button></td> */}
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button className="btn btn-success" onClick={() => this.addCar()}>Add new car</button>
            </div>
        )
    }
}

export default CarListComponent;