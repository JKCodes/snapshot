import superagent from 'superagent';
import Promise from 'bluebird'

export default {

  get: (url, params) => {
    return new Promise((resolve, reject) => {
      superagent
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          reject(err)
          return
        }

        resolve(response.body)
      })
    })
  },

  post: (url, body) => {
    return new Promise((resolve, reject) => {
      superagent
      .post(url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          reject(err)
          return
        }

        resolve(response.body)
      })
    })
  },

  put: (url, body) => {
    return new Promise((resolve, reject) => {
      superagent
      .put(url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          reject(err)
          return
        }

        resolve(response.body)
      })
    })
  },

  delete: () => {

  }

}