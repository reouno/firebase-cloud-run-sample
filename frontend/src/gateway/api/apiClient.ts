import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true

export default axios
