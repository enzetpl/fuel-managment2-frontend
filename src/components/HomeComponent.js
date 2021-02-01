import { Component } from "react";
import AppNavbar from "./AppNavbar";
import AuthenticationService from "./AuthenticationService";
import statsScreenshot from "../img/stats.png";
import carsScreenshot from "../img/cars.png";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        this.setState({
            loggedIn: AuthenticationService.isUserLoggedIn()
        })
    }

    render() {
        let message;
        if(!this.state.loggedIn) {
            message = <p>Here you can <a href="/register">register</a> or <a href="/login">login</a>
                <br/><br/>You can also use account with some added data:<br/>username: <strong>user1</strong> <br/>password: <strong>password</strong></p>
        } else {
            message = <p>Here you can see list of your <a href="/cars">cars</a></p>
        }
        return (
            <div>
                <AppNavbar/>
                <div className="container justify-contnent-center">
                    <br/><br/>
                    <h2>Vehicle management app</h2>
                    <p>App for tracking refuels, car's mileage, fuel consumption and more. You can manage many cars and have summarry of costs in one place  </p>

                    {message}
                    Example data:<br/>
                    stats:<br/>
                    <img className="border col-md-9 m-4" src={statsScreenshot} alt="screenshot of data"/>
                    <br/>
                    cars:<br/>
                    <img className="border col-md-9 m-4" src={carsScreenshot} alt="screenshot of car list"/>
                </div>
            </div>
        )
    }
}

export default HomeComponent