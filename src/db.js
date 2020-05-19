import config from './config'
import axios from 'axios'

export default {
  getAll: async () => {
    const { data } = await axios.post('https://shol.xyz:8445/query', {
      secret: config.secret,
      query: 'SELECT * FROM book'
    })
    return data.row
  }
}
