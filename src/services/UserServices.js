import axios from "axios";

const USER_REST_API_URL = 'http://localhost:9090/students/api'

class UserServices{
    getUsers(){
        return axios.get(USER_REST_API_URL);
    }
}

export default new UserServices();