import axios from 'axios'

const API_URL = 'http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com/api'

class AuthenticationService {
    isUserLoggedIn() {
        let user = localStorage.getItem("user");
        return user!=null
    }

     async register(user) {
        return axios.post(`${API_URL}/users/register`, user);
    }

    executeBasicAuth(username, password) {
        localStorage.setItem("user",  this.createBasicAuthToken(username, password));
        return axios.get(`${API_URL}/auth`,
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