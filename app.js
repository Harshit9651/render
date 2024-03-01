

const express = require("express");
const app = express();
app.listen(3000,()=>{
    console.log("hello app is listing")
})
const path = require("path");

//const authenticate = require("./dhdhd/bfbbyf.js");

const session = require("express-session")


app. use(express.json());// for parsing 
app.use(express.urlencoded({extended:true}))//data by id aa jaye 
app.set("view engine","ejs");
const static_path = path.join(__dirname,"../views");//pura path dena hota hai 
app.use(express.static(static_path));
//const methodoverride = require("method-override"); // for put patch and delete method
//app.use(methodoverride("_method"));
const ejsmate = require("ejs-mate");
app.engine("ejs",ejsmate)


const mongodbsession = require("connect-mongodb-session")(session)

const bodyParser = require('body-parser');

const methodoverride = require("method-override"); // for put patch and delete method
app.use(methodoverride("_method"));


const db = require("./src/db/connect.js")

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
const Student = require("./src/models/server.js");
app.post("/newstudent", async (req, res) => {
    try {
      let { Fname, Lname, gender, DOB, Email, Username, Number, Descripition, Goal, city, HomeTown, password } = req.body;
      console.log(Fname, Lname, gender, DOB, Email, Username, Number, Descripition, Goal, city, HomeTown, password);
  
      const data = new Student({
        Fname, Lname, gender, DOB, Email, username: Username, Number, Descripition, Goal, city, HomeTown, password
      });
  
      // Save in the database
      const studentdata = await data.save();
      
   console.log(studentdata);

 
  
      res.send("thanks")
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
