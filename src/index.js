const axios = require('axios')
const adapter = require('./adapter')

axios.defaults.adapter = adapter

export default axios
