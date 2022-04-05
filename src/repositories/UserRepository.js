import Client from './Clients/AxiosClient'
const resource = '/users'

export default {
    get(payload) {
        return new Promise((resolve,reject) => {
            Client.get(`${resource}?${payload}`).then(response => {resolve(response.data)})
            .catch(error => {reject(error)})
        })
    },
    show(id) {
        return new Promise((resolve,reject) => {
            Client.get(`${resource}/${id}`).then(response => {resolve(response.data.data)})
            .catch(error => {reject(error)})
        })
    },
    post(payload) {
        return new Promise((resolve,reject) => {
            Client.post(`${resource}`,payload).then(response => {resolve(response.data.data)})
            .catch(error => {reject(error)})
        })
    },
    put(payload) {
        return new Promise((resolve,reject) => {
            Client.put(`${resource}`,payload).then(response => {resolve(response.data.data)})
            .catch(error => {reject(error)})
        })
    }
}