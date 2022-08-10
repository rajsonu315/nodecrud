import mongoose from 'mongoose'

// Defining Schema
const studentSchema = new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  number:{type:Number},
  Participant_name: {type:String},
 
  location : {type:String},
  depot : {type:String},
})

// Model
const StudentModel = mongoose.model("altratech_veg", studentSchema)

export default StudentModel
