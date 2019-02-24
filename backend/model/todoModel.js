const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
        todoDescription:{
            type:String,
            required:true
        },
        todoResponsible:{
            type:String
        },
        todoPriority:{
            type:String,

        },
        todoCompleted:{
            type:Boolean,
            default:false
        }   

})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

