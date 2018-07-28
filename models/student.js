const mongoose=require('mongoose');
const {Schema}=mongoose;

const studentSchema =  new Schema({
    name: String,
    class: String,
    feeling: String,
    age: Number
})

const Student = mongoose.model("Student",studentSchema);
module.exports=Student;