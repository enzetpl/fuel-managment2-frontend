import axios from 'axios'

const API_URL = 'http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com/api'

class StatsSummaryDataService {
    
    retreiveAllRefuelsForCar(carId, startDate, endDate) {
        const URL = `${API_URL}/cars/${carId}/stats?startDate=${startDate}&endDate=${endDate}`;
        return axios.get(URL,
          {headers: { Authorization: localStorage.getItem("user")}});
    }
    retreiveAllRefuelsForUser(startDate, endDate) {
        const URL = `${API_URL}/stats?startDate=${startDate}&endDate=${endDate}`;
        return axios.get(URL,
            {headers: { Authorization: localStorage.getItem("user")}});
    }
}

export default new StatsSummaryDataService()