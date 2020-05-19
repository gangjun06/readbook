import config from './config'
import axios from 'axios'
import moment from 'moment'

export default {
  getAll: async () => {
    const { data } = await axios.post('https://shol.xyz:8445/query', {
      secret: config.secret,
      query: 'SELECT * FROM book'
    })
    return data.row
  },
  addData: async form => {
    console.log(form.isbn)
    const query = `INSERT INTO \`book\`(\`title\`, \`author\`, \`text\`, \`image\`, \`isbn\`, \`timebegin\`, \`timeend\`) VALUES ( '${
      form.title
    }', '${form.author}', "${form.text}", '${form.image}', '${
      form.isbn
    }', ${moment(form.timebegin).unix()}, ${moment(form.timeend).unix()})`
    console.log(query)
    const { data } = await axios.post('https://shol.xyz:8445/query', {
      secret: form.password,
      query: query
    })
    console.log(data)
  }
}
