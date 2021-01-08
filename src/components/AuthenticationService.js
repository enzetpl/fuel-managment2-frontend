import axios from 'axios'

const API_URL = 'http://localhost:8080'

class AuthenticationService {
    isUserLoggedIn() {
        let user = localStorage.getItem("user");
        return user!=null
    }

    executeBasicAuth(username, password) {
        localStorage.setItem("user",  this.createBasicAuthToken(username, password));
        return axios.get(`${API_URL}/api/auth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
 
}

export default new AuthenticationService()