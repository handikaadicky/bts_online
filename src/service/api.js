import axios from 'axios'
import Cookies from 'js-cookie'



const api = axios.create({
    baseURL: 'http://18.139.50.74:8080'
})

// auth-controller
export function postLogin(data) {
    return api.post('/login', data)
}

export function postRegister(data) {
    return api.post('/register', data)
}

// checklist-controller

export function getChecklist() {
    const token = Cookies.get('token');
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      
    return api.get('/checklist', config)
}

export function postChecklist(data) {
    const token = Cookies.get('token');
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    return api.post('/checklist', data, config)
}

export function deleteChecklist(id) {
    const token = Cookies.get('token');
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    return api.delete(`/checklist/${id}`, config)
}

// checklist-item
export function postChecklistItem(data) {
  const token = Cookies.get('token');
  const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  return api.post(`/item`, data, config)
}