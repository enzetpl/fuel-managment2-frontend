import axios from 'axios'

const API_URL = 'http://localhost:8080/api'


class CarsDataService {
    retreiveAllCars() {
        return axios.get(`${API_URL}/cars`);
    }

    addCar(car) {
        return axios.post(`${API_URL}/cars`, car);
    }
    updateCar(car) {
        return axios.patch(`${API_URL}/cars/${car.id}`, car);
    }
    getCar(id) {
        return axios.get(`${API_URL}/cars/${id}`);
    }
    deleteCar(id) {
        return axios.delete(`${API_URL}/cars/${id}`);

    }
}

export default new CarsDataService()