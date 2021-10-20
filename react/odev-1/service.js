const axios = require('axios')

const getData = (userId) => {
  return new Promise(async (resolve, reject) => {
    let { data: user } = await axios.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    )
    const { data: post } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?userId=' + userId
    )
    user['posts'] = post
    resolve(user)
  })
}

module.exports = { getData }
