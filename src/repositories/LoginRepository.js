import Client from './Clients/AxiosClient'
const resource = '/login'

export default {
    
    post(payload) {
        return new Promise((resolve,reject) => {
            Client.post(`${resource}`,payload).then(response => {resolve(response.data)})
            .catch(error => {reject(error)})
        })
    },
}