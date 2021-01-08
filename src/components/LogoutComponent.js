import { Component } from "react";

class LogoutComponent extends Component {
    render() {
        localStorage.removeItem("user");
        return (
            <div>
                Loggout successful
            </div>
        )
    }
}

export default LogoutComponent;