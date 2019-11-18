import axios from 'axios';

const USER_API_BASE_URL = 'http://service:3001/api/';

class AuthService {

    login(credentials) {
        return axios.post(USER_API_BASE_URL + "login", credentials);
    }

    register(credentials) {
        return axios.post(USER_API_BASE_URL + "register", credentials);
    }

    getJWT() {
        return JSON.parse(localStorage.getItem("jwt"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getJWT() }};
    }

    logOut() {
        localStorage.removeItem("jwt");
        // return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }

    isAuthenticated() {
        return !!localStorage.getItem("jwt");
    }
}

export default new AuthService();