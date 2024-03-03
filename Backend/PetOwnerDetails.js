const mongoose =require('mongoose');
const { Schema } = mongoose;

const PetOwnerDetailsSchema=new Schema({
    fullname: { type: String, required: true },
    email: {type: String, unique: true},
    petname: { type: String, required: true },
    age: { type: Number, required: true },
    // user: { type: Schema.Types.ObjectId, ref: 'Users' }
},{
    collection: "PetOwner"
})
mongoose.model("PetOwner", PetOwnerDetailsSchema);