var Comment = require('../models/Comment')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw) {
    return new Promise(function(resolve, reject) {
      Comment.find(params, null, {sort: {timestamp: 1}}, function(err, comments) {
        if (err) {
          reject(err)
          return
        }

        if (isRaw) {
          resolve(posts)
        } else {
          var list = []
          
          posts.forEach(function(post, i) {
            list.push(post.summary())
          })

          resolve(list)
        }
      })
    })
  },

  findById: function(id, isRaw) {
    return new Promise(function(resolve, reject) {
      Comment.findById(id, function(err, comment) {
        if (err) {
          reject(err)
          return
        }

        if (isRaw) {
          resolve(post)
        } else {
          resolve(post.summary())
        }
      })
    })
  },

  create: function(params, isRaw) {
    return new Promise(function(resolve, reject) {    
      Comment.create(params, function(err, comment) {
        if (err) {
          reject(err)
          return
        }

        if (isRaw) {
          resolve(post)
        } else {
          resolve(post.summary())
        }
      })
    })
  },

  update: function(id, params, isRaw) {
    return new Promise(function(resolve, reject) {

      Comment.findByIdAndUpdate(id, params, {new:true},function(err, comment) {
        if (err) {
          reject(err)
          return
        }

        if (isRaw) {
          resolve(post)
        } else {
          resolve(post.summary())
        }
      })
    })
  },

  delete: function(id, isRaw) {
    return new Promise(function(resolve, reject) {

      Comment.findByIdAndRemove(id, function(err) {
        if (err) {
          reject(err)
          return
        }

        resolve(null)
      })
    })
  }
}