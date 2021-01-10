import { Component } from "react";
import RefuelsDataService from './RefuelsDataService'
import AppNavbar from './AppNavbar'
import AuthenticationService from './AuthenticationService'
class RefuelsListComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            refuels: [],
            message: null
        }

        this.refreshRefuels = this.refreshRefuels.bind(this);
        this.updateRefuels = this.updateRefuels.bind(this);
        this.deleteRefuel = this.deleteRefuel.bind(this);

    }

    componentDidMount() {
        this.refreshRefuels();
        
    }

    refreshRefuels() {
         RefuelsDataService.retreiveAllRefuels(this.props.match.params.carId)
            .then(
                response=> {

                    this.setState({
                        refuels: response.data
                    });
                }
            ) 
    }

    addRefuel() {
        this.props.history.push(`/cars/${this.props.match.params.carId}/refuels/new`)
    }

    updateRefuels(id) {
        this.props.history.push(`/cars/${this.props.match.params.carId}/refuels/${id}`)
    }

    deleteRefuel(id) {
        RefuelsDataService.deleteRefuel(this.props.match.params.carId, id)
            .then(
                ()=> {
                    this.setState({
                        message: `Delete of refuel ${id} succesful`
                    })
                    this.refreshRefuels();
                }
            )
        
    }

    showRefuels(id) {
        this.props.history.push(`/cars/${id}/refuels`)
    }
    
    render() {
        const isLoggedIn = AuthenticationService.isUserLoggedIn();
        let message = "";
        if(!isLoggedIn) {
            message = <div className="alert alert-warning">Please login to see list of your cars</div>
        } else if(isLoggedIn && this.state.refuels.length===0) {
            message = <div className="alert alert-warning">Please add first car</div>
        }
        return (
            <div className="container">
                 <AppNavbar/>
                <h3>All refuels</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>volume</th>
                            <th>price for liter</th>
                            <th>refuel date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.refuels.map(
                            refuel =>
                            <tr key={refuel.id}>
                                <td>{refuel.id}</td>
                                <td>{refuel.volume}</td>
                                <td>{refuel.priceForLiter}</td>
                                <td>{refuel.refuelDate}</td>
                                <td><button className="btn btn-info" onClick={() => this.updateRefuels(refuel.id)}>Update</button>
                                <button className="btn btn-warning" onClick={() => this.deleteRefuel(refuel.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                {message}
                <button className="btn btn-success" onClick={() => this.addRefuel()}>Add new refuel</button>
            </div>
        )
    }
}
export default RefuelsListComponent