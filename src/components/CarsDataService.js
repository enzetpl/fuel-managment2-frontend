import axios from 'axios'

const API_URL = 'http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com/api'


class CarsDataService {


    retreiveAllCars() {
        return axios.get(`${API_URL}/cars`,  {headers: { Authorization: localStorage.getItem("user")}});
    }

    addCar(car) {
        return axios.post(`${API_URL}/cars`, car, {headers: { Authorization: localStorage.getItem("user")}});
    }
    updateCar(carId, car) {
        return axios.patch(`${API_URL}/cars/${carId}`, car, {headers: { Authorization: localStorage.getItem("user")}});
    }
    getCar(id) {
        return axios.get(`${API_URL}/cars/${id}`,{headers: { Authorization: localStorage.getItem("user")}});
    }
    deleteCar(id) {
        return axios.delete(`${API_URL}/cars/${id}`, {headers: { Authorization: localStorage.getItem("user")}});

    }

}

export default new CarsDataService()