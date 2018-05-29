 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
var userSchema = new Schema({
	name : {type: String }, 
	
},
{   
    timestamps: { createdAt: 'createdAt', updatedAt : 'lastUpdate' }
});

module.exports = mongoose.model('user', userSchema);

