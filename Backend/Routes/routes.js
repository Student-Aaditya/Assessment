const express=require("express");
const routes=express.Router();
const path=require("path");
const {Random}=require("../Controllers/Random.js")
const User=require("../Model/User.js");
const mongoose=require("mongoose");
const {assignRanks}=require("../Controllers/Sort.js");
const Auth=require("../Model/Auth.js");

main()
.then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log(err)
})

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

routes.get("/data",(req,res)=>{
    res.send("hello world");
    console.log("working");
})

routes.post('/seed',async(req,res)=>{
   let {Name,Points}=req.body;
   let NewData=new User({
    Name:Name,
    Points:Points
   })

   await NewData.save();
   console.log(NewData);
   res.send("working data pass")
});

routes.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


routes.get("/random",(req,res)=>{
    const num=Random();
    res.send({ randomNumber: num })
})

routes.post("/updatePoints", async (req, res) => {
  const { name, pointsToAdd } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { Name: name },
      { $inc: { Points: pointsToAdd } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

routes.get("/rankedUsers", async (req, res) => {
  try {
    const users = await User.find({});
    const rankedUsers = assignRanks(users.map(u => u.toObject())); 

    res.json(rankedUsers);
  } catch (err) {
    console.error("Error fetching ranked users:", err);
    res.status(500).json({ message: "Server error", err });
  }
});

routes.post("/sign", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newuser = new Auth({username:name, email });
        const regis = await Auth.register(newuser, password);
        console.log(regis);
    } catch (err) {
        console.error(err);
    }
})

module.exports={routes};