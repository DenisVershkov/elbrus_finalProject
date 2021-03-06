import axios from 'axios'
const { REACT_APP_API_URL: host } = process.env

const $api = axios.create({
    withCredentials: true,
    baseURL: host,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (
            error.response.status == 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                const response = await axios.get(
                    `${host}/api/v1/auth/refresh`,
                    { withCredentials: true }
                )
                const { accessToken } = response.data
                localStorage.setItem('token', accessToken)
                return $api.request(originalRequest)
            } catch (error) {
                console.log('Не авторизован')
            }
        }
        throw error
    })

export default $api
