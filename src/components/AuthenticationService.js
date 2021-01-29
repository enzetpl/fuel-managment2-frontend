import axios from 'axios'

const API_URL = 'https://cors-everywhere-me.herokuapp.com/http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com'

class AuthenticationService {
    isUserLoggedIn() {
        let user = localStorage.getItem("user");
        return user!=null
    }

     async register(user) {
        return axios.post(`${API_URL}/api/users/register`, user);
    }

    executeBasicAuth(username, password) {
        localStorage.setItem("user",  this.createBasicAuthToken(username, password));
        return axios.get(`${API_URL}/api/auth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
    logoutUser() {
        localStorage.removeItem("user");
    }
 
}

export default new AuthenticationService()