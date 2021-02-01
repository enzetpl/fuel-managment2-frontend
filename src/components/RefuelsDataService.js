import axios from 'axios'

const API_URL = 'http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com/api'

class RefuelsDataService {
    getRefuel(carId, refuelId) {
        return axios.get(`${API_URL}/cars/${carId}/refuels/${refuelId}`,{headers: { Authorization: localStorage.getItem("user")}});
    }
    addCar(carId, refuel) {
        return axios.post(`${API_URL}/cars/${carId}/refuels`, refuel, {headers: { Authorization: localStorage.getItem("user")}});
    }
    retreiveAllRefuels(carId) {
        return axios.get(`${API_URL}/cars/${carId}/refuels`,  {headers: { Authorization: localStorage.getItem("user")}});
    }
    deleteRefuel(carId, id) {
        return axios.delete(`${API_URL}/cars/${carId}/refuels/${id}`, {headers: { Authorization: localStorage.getItem("user")}});

    }
    addRefuel(carId, refuel) {
        return axios.post(`${API_URL}/cars/${carId}/refuels`, refuel, {headers: { Authorization: localStorage.getItem("user")}});
    }
    updateRefuel(carId, refuelId, refuel) {
        return axios.patch(`${API_URL}/cars/${carId}/refuels/${refuelId}`, refuel, {headers: { Authorization: localStorage.getItem("user")}});
    }

}

export default new RefuelsDataService()
