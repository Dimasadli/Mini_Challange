import axios from "axios"

export default class API {
    getAPI() {
        return axios.get('https://paragon-training-api.herokuapp.com/products')
    }
}

