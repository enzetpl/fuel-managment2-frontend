import axios from 'axios'

const API_URL = 'http://localhost:8080/api'


class StatsSummaryDataService {
    
    retreiveAllRefuelsForCar(carId, startDate, endDate) {
        const URL = `${API_URL}/cars/${carId}/stats?startDate=${startDate}&endDate=${endDate}`;
        return axios.get(URL,
          {headers: { Authorization: localStorage.getItem("user")}});
    }
}

export default new StatsSummaryDataService()