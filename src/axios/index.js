import axios from 'axios'

export const service = axios.create({
    baseURL: 'http://localhost.charlesProxy.com:3001',
    timeout: 5000,
})