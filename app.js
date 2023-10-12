import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const port=3000;
const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const Eventitems=[];
Eventitems.push("wo produce best coder in kolkata");
Eventitems.push("our faculty is out-standing");
Eventitems.push("addmission open for M.tech");
Eventitems.push("we belive in hard work");
Eventitems.push("Lets have a look");
Eventitems.push(2);
Eventitems.push(3);
app.get("/",function(req,res) {
    res.render("index.html");
});

app.get("/login",function(req,res) {
    res.render("login.ejs");
});
app.get("/user",function(req,res) {
    res.render("userhome.ejs",{
        Totalattendance:60,
        eventitems:Eventitems,
        name:"Deep",
    });
});

app.get("/register",function(req,res) {
    res.render("Register.ejs");
})
app.listen(port,function () {
    console.log(`server is running on ${port}`);
})
