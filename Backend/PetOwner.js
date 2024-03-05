const mongoose =require('mongoose');
const { Schema } = mongoose;

const PetOwnerSchema=new Schema({
    fullname: { type: String, required: true },
    email: {type: String, unique: true},
    petname: { type: String, required: true },
    age: { type: Number, required: true },
    // user: { type: Schema.Types.ObjectId, ref: 'Users' }
},{
    collection: "PetOwner"
})
const PetOwner = mongoose.model("PetOwner", PetOwnerSchema);

module.exports = PetOwner;