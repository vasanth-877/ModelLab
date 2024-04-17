const express = require('express');
const mongoose  = require('mongoose');
const path = require('path');
const app = express();
const Student = require('./Model/Student.model')
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded(({extended:true})))
function GetStudents(){
    return(
app.get('/api/Student',async(req,res)=>{
    try{
        const student = await Student.find({});
        res.status(200).json(student);
    }
    catch(err){
        res.status(404).json({message:err});
    }

}))}
app.post('/api/Student',async(req,res)=>{
    try{
            let student = new Student({
                name:req.body.name,
                email:req.body.email,
                dept:req.body.dept,
                age:req.body.age,
                status:req.body.status

    });
    student.save();
    res.redirect('/');
    }
    catch(err){
        res.status(404).json({message:err});
    }
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','add.html'));
})
app.put('/api/Student/:id',async(req,res)=>{
    try{
        const {id}  = req.params;
        const updateStudent = await Student.findByIdAndUpdate(id,req.body);
        res.status(200).json(updateStudent);
}
catch(err){
    res.status(404).json({message:err});
}})
app.delete('/api/Student/:id',async(req,res)=>{
    try{
        const {id}  = req.params;
        const deleteStudent = await Student.findByIdAndDelete(id);
        res.status(200).json(deleteStudent);
}
catch(err){
    res.status(404).json({message:err});
}})
mongoose.connect('mongodb://localhost:27017/Student').then(()=>{
    console.log("Connected to Database");
    app.listen(3000);
    console.log('running on port 3000');
}).catch((err)=>{
    console.log("Connection failed",err);
})
