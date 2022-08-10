import StudentModel from "../models/Student.js"

class StudentController {

  // static vegdownload = (req, res) => {
   
  // res.render("download")

  // }





  // Create Document
  static createDoc = async (req, res) => {
    // console.log(req.body)
    try {
      const {name, number, Participant_name  , location , depot} = req.body
      const doc = new StudentModel({
        name:name,
        number:number,
        Participant_name:Participant_name ,
        location:location,
        depot : depot
      })
      // Saving Document
      const result = await doc.save()
       console.log(result.name)
      res.render("download", {data: result.name})
    } catch (error) {
      console.log(error)
    }
  }

  // Retrieve All Document
  static getAllDoc = async (req, res) =>{
    try {
      const result = await StudentModel.find()
      // console.log(result)
      res.render("index", {data: result})      
    } catch (error) {
      console.log(error)
    }
    
  }

  // Show Edit Form with Data
  static editDoc = async (req, res) =>{
    // console.log(req.params.id)
    try {
      const result = await StudentModel.findById(req.params.id)
      // console.log(result)
      res.render("edit", {data:result})
    } catch (error) {
      console.log(error)
    }
    
  }

  // Update Document
  static updateDocById = async (req, res) =>{
    // console.log(req.params.id)
    // console.log(req.body)
    try {
      const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
      // console.log(result)
    } catch (error) {
      console.log(error)
    }
    res.redirect("/student")
  }

  // Delete Document
  static deleteDocById = async (req, res) =>{
    // console.log(req.params.id)
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id)
      res.redirect("/student")
    } catch (error) {
      console.log(error)
    }  
  }
}

export default StudentController