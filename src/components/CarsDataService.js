import axios from 'axios'

const API_URL = 'http://localhost:8080/api'


class CarsDataService {
    retreiveAllCars() {
        return axios.get(`${API_URL}/cars`);
    }

    addCar(car) {
        return axios.post(`${API_URL}/cars`, car);
    }
}

export default new CarsDataService()