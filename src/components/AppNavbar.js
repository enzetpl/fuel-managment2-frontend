import { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class AppNavbar extends Component {
    render() {
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let loginOrLogoutButton;
        let registerButton = "";
        if (isUserLoggedIn) {
            loginOrLogoutButton = <a className="nav-item nav-link" href="/logout">logout</a>
        } else {
            loginOrLogoutButton = <a className="nav-item nav-link" href="/login">login</a>
            registerButton = <a className="nav-item nav-link" href="/register">register</a>
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/cars">cars</a>
                        {loginOrLogoutButton}
                        {registerButton}
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavbar