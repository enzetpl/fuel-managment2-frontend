import { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class AppNavbar extends Component {
    render() {
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let loginOrLogoutButton;
        let registerButton = "";
        if (isUserLoggedIn) {
            loginOrLogoutButton = <a  href="/logout" className="btn btn-outline-danger">logout</a>
        } else {
            loginOrLogoutButton = <a  href="/login" className="btn btn-outline-warning">login</a>
            registerButton = <a href="/register" className="btn btn-outline-success">register</a>
        }
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <span className="navbar-brand">Navbar</span>
                    <ul className="navbar-nav mr-auto">
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/cars">cars</a>
                        <a className="nav-item nav-link" href="/stats">stats</a>
                    </ul>
                        {loginOrLogoutButton}
                        {registerButton}

            </nav>
        )
    }
}

export default AppNavbar