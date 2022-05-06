import axios from 'axios'
const instance = axios.create({
    baseURL: "https://datingapp-finalproject-backend.herokuapp.com"
})

export default instance