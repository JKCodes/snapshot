var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
  username: {type:String, default:''},
  password: {type:String, default:''},
  timestamp: {type:Date, default:Date.now}
})

ProfileSchema.methods.summary = function() {
  var summary = {
    id: this._id.toString(),
    username: this.username,
    timestamp: this.timestamp
  }

  return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)