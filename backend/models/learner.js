const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const learnerSchema=new Schema({
    name: {type:String},
    img: {type:String},
    bio: {type:String},
    achievements: [{type:String}],
    enrolled: [{type:String}],
    assesments: [{type:String}],
    balance: {type:Number},
});

module.exports=mongoose.model('Learner',learnerSchema);