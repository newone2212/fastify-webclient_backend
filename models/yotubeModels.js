const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  name:{
    type:String
  }
});

module.exports = mongoose.model('Influencer', influencerSchema);
