import express from 'express'
import connectDB from "./db/connectdb.js";
import {join} from 'path'
import web from "./routes/web.js";
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://sonumonu:sonumonu@cluster0.ve68i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

// Static Files
app.use('/',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))

// Set Template Engine
app.set("view engine", "ejs");

// Load Routes
app.use("/", web);


app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})