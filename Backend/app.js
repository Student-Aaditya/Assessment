const express=require("express");
const app=express();
const port=8088;
const cors=require("cors");
const {routes}=require("./Routes/routes.js");
const  mongoose  = require("mongoose");
const passport = require("passport");
const localstatergy = require("passport-local");
const session=require("express-session");
const flash=require("connect-flash")
const Auth=require("../Backend/Model/Auth.js");
const methodOverride = require("method-override");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use("/user",routes);

const sessionOption = ({
    secret: "musecretcode",
    resave: false,
    saveUninitialized: true,
})

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstatergy(Auth.authenticate()));

passport.serializeUser(Auth.serializeUser());
passport.deserializeUser(Auth.deserializeUser())



app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})