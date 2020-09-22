import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('token');


const api = axios.create({
    baseURL: 'http://18.139.50.74:8080'
})

export function postLogin(data) {
    return api.post('/login', data)
}

export function postRegister(data) {
    return api.post('/register', data)
}

export function getChecklist() {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      
    return api.get('/checklist', config)
}