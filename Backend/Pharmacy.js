const mongoose =require('mongoose');
const { Schema } = mongoose;

const PharmacySchema=new Schema({
    fullname: { type: String, required: true },
    email: {type: String, unique: true},
    pharmacyName: { type: String, required: true },
    pharmacyLicenseNumber: { type: String, required: true },
    pharmacyAddress: { type: String, required: true },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date }
},{
    collection: "Pharmacy"
})
const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);
// After defining PharmacySchema
module.exports = Pharmacy;
