// Importing mongoose library
const mongoose =require('mongoose');
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for pet owners
const PetOwnerSchema=new Schema({
    fullname: { type: String, required: true },
    email: {type: String, unique: true},
    petname: { type: String, required: true },
    age: { type: Number, required: true },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date }
},{
    collection: "PetOwner" // Setting the collection name explicitly to "PetOwner"
})

// Creating a model named "PetOwner" based on the schema
const PetOwner = mongoose.model("PetOwner", PetOwnerSchema);

// Exporting the model
module.exports = PetOwner;