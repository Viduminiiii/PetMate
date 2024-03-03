var express = require('express');
var app = express();
var mongoose = require('mongoose');
app.use(express.json())

const mongoUrl = 'mongodb+srv://admin:admin@petmate.ssqjitl.mongodb.net/?retryWrites=true&w=majority&appName=PetMate'

mongoose.connect(mongoUrl).then(() => {
    console.log("database connected.")
}).catch((e) => {
    console.log(e);
})

require ('./PetOwnerDetails')
require ('./Users')
const PetOwner=mongoose.model('PetOwner');
const User=mongoose.model('Users');

app.get("/getTest", (req,res) => {
    res.send("success ---------------------------");
})

app.post("/register", async (req,res)=>{
    const {fullname,email,password,petname,age,username}=req.body;
    const oldUser = await PetOwner.findOne({email:email})

    if(oldUser){
        res.send({data: 'User already exists!!'})
    }
    else{
        try{
            const petowner = await PetOwner.create({
                fullname,
                email,
                petname,
                age,
            });
            const user = await User.create({
                username,
                password,
                petOwner: petowner._id
            });
    
            // if(user !== null) {
            //     const updateField = { user: user._id };            
            //     PetOwner.findByIdAndUpdate(petowner._id, updateField, { new: true })
            //       .then(updatedUser => {
            //         console.log('Updated PetOwner: ', updatedUser);
            //       })
            //       .catch(err => {
            //         console.error(err);
            //       });   
            // }
    
            if(petowner !== null && user !== null)
            {
                res.send({status:'ok', data: 'User created'});
            }
        }catch (error){
            res.send({status:'Error', data: error});
        }
    }  
})


app.get("/getUser", async(req,res) => {
    User.find()
    .populate('petOwner')
    .then((result) => {        
        if (result) {
            console.log(result);
            res.send({status:'ok', data: JSON.stringify(result)});
            }
    })
    .catch((err) => {        
        console.error(err);
    });
})



app.listen (5000, ()=>{
    console.log ('Mongo DB connection successful');
})



// var Express = require('express');
// // var Mongoclient = require('mongodb').MongoClient;
// // var cors=require('cors');
// // const multer = require('multer');

// var app = Express();
// app.use(cors());

// var CONNECTION_STRING=
// //'mongodb://localhost:27017';
// 'mongodb://admin:admin@PetMate123@petmate.ssqjitl.mongodb.net/?retryWrites=true&w=majority&appName=PetMate';
// var DATABASENAME = 'dbpetmate';
// var database;

// app.listen (27017, ()=>{
//     Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
//         database=client.db(DATABASENAME)
//         console.log ('Mongo DB connection successful')
//     })
// })
