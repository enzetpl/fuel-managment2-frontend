import { Component } from "react";
import AppNavbar from "./AppNavbar";
import AuthenticationService from "./AuthenticationService";

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
            message = <p>Here you can <a href="/register">register</a> or <a href="/login">login</a></p>
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
                </div>
            </div>
        )
    }
}

export default HomeComponent