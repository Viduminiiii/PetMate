const mongoose =require('mongoose');
const { Schema } = mongoose;

const VeternarianSchema=new Schema({
    fullname: { type: String, required: true },
    email: {type: String, unique: true},
    veterinaryClinicName: { type: String, required: true },
    veterinaryLicenseNumber: { type: String, required: true },
    veterinaryClinicAddress: { type: String, required: true },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date },
},{
    collection: "Veternarian"
})
const Veternarian = mongoose.model("Veternarian", VeternarianSchema);
// After defining VeternarianSchema
module.exports =  Veternarian;
