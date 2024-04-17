const mongoose  = require('mongoose');
const StudentSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        dept:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        status:{
            type:String,
            required:true
        }
        
    }
)
const Student = mongoose.model('Student',StudentSchema);
module.exports = Student;