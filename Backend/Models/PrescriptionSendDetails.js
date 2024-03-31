// Importing mongoose library
const mongoose =require('mongoose');
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for prescription send details
const PrescriptionSendDetailsSchema=new Schema({
    appointments: { type: Schema.Types.ObjectId, ref: 'Appointments' },
    sendPharmacy: { type: Schema.Types.ObjectId, ref: 'Pharmacy' },
    pharmacyRepliedDate: {type: Date },
    drugsAvailability: {type: Boolean, default: false },
    pharmacyComment: {type: String }, 
    isMedicineBought: {type: Boolean, default: false },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date },
},{
    collection: "PrescriptionSendDetails" // Setting the collection name explicitly to "PrescriptionSendDetails"
})
// Creating a model named "PrescriptionSendDetails" based on the schema
const PrescriptionSendDetails = mongoose.model("PrescriptionSendDetails", PrescriptionSendDetailsSchema);
// Exporting the model
module.exports = PrescriptionSendDetails;