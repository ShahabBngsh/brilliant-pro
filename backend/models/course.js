const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const courseSchema=new Schema({
    title: {type:String},
    img: {type:String},
    overview: {type:String},
    price: {type:Number},
    offeredBy: {type:String},
    skills: [{type:String}],
    materials: [{type:String}],
    assesments: [{type:String}],
    enrolled: [{type:String}],
    mid: [{type:String}],
    failed: [{type:String}],
    passed: [{type:String}],
});

module.exports=mongoose.model('Course',courseSchema);