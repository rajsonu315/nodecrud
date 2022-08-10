import express from "express";
const router = express.Router();
import StudentController from "../controllers/studentController.js";
import multer from "multer";

var limits = { fileSize: 0.5 * 1024 * 1024 };

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname )
       
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 5000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

router.get('/', StudentController.getAllDoc)
// router.get('/download', StudentController.vegdownload)
router.post('/', imageUpload.single('image'), StudentController.createDoc)
router.get('/edit/:id', StudentController.editDoc)
router.post('/update/:id', StudentController.updateDocById)
router.post('/delete/:id', StudentController.deleteDocById)

export default router;