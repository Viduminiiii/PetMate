// Importing mongoose library
const mongoose =require('mongoose');
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for users
const UsersSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    petOwner: { type: Schema.Types.ObjectId, ref: 'PetOwner' },
    Veternarian: { type: Schema.Types.ObjectId, ref: 'Veternarian' },
    Pharmacy: { type: Schema.Types.ObjectId, ref: 'Pharmacy' },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date },
}, {
    collection: "Users" // Setting the collection name explicitly to "Users"
});

// Creating a model named "Users" based on the schema
const Users = mongoose.model("Users", UsersSchema);

// Exporting the model
module.exports = Users;
