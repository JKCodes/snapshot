var Profile = require('../models/Profile')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw) {
    return new Promise(function(resolve, reject) {
      Profile.find(params, null, {sort: {timestamp: 1}}, function(err, profiles) {
        if (err) {
          reject(err)
          return
        }

        resolve(profiles)
      })
    })
  },

  findById: function(id, isRaw) {
    return new Promise(function(resolve, reject) {
      Profile.findById(id, function(err, profile) {
        if (err) {
          reject(err)
          return
        }

        resolve(profile)
      })
    })
  },

  create: function(params, isRaw) {
    return new Promise(function(resolve, reject) {    
      Profile.create(params, function(err, profile) {
        if (err) {
          reject(err)
          return
        }

        resolve(profile)
      })
    })
  },

  update: function(id, params, isRaw) {
    return new Promise(function(resolve, reject) {

      Profile.findByIdAndUpdate(id, params, {new:true},function(err, profile) {
        if (err) {
          reject(err)
          return
        }

        resolve(profile)
      })
    })
  },

  delete: function(id, isRaw) {
    return new Promise(function(resolve, reject) {

      Profile.findByIdAndRemove(id, function(err) {
        if (err) {
          reject(err)
          return
        }

        resolve(null)
      })
    })
  }
}