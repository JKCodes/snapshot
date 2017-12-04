var Post = require('../models/Post')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw) {
    return new Promise(function(resolve, reject) {
      Post.find(params, null, {sort: {timestamp: 1}}, function(err, posts) {
        if (err) {
          reject(err)
          return
        }

        resolve(posts)
      })
    })
  },

  findById: function(id, isRaw) {
    return new Promise(function(resolve, reject) {
      Post.findById(id, function(err, post) {
        if (err) {
          reject(err)
          return
        }

        resolve(post)
      })
    })
  },

  create: function(params, isRaw) {
    return new Promise(function(resolve, reject) {    
      Post.create(params, function(err, post) {
        if (err) {
          reject(err)
          return
        }

        resolve(post)
      })
    })
  },

  update: function(id, params, isRaw) {
    return new Promise(function(resolve, reject) {

      Post.findByIdAndUpdate(id, params, {new:true},function(err, post) {
        if (err) {
          reject(err)
          return
        }

        resolve(post)
      })
    })
  },

  delete: function(id, isRaw) {
    return new Promise(function(resolve, reject) {

      Post.findByIdAndRemove(id, function(err) {
        if (err) {
          reject(err)
          return
        }

        resolve(null)
      })
    })
  }
}