import { Component } from "react";
import AppNavbar from "./AppNavbar";
import AuthenticationService from "./AuthenticationService";

class LogoutComponent extends Component {
    render() {
        AuthenticationService.logoutUser();

        return (
            <div>
                <AppNavbar/>
                <br/>
                <div className="alert alert-warning">Logout successful</div>
            </div>
        )
    }
}

export default LogoutComponent;