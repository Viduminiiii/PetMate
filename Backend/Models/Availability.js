// Importing mongoose library
const mongoose =require('mongoose');
const { Schema } = mongoose;

// Defining schema for availability
const AvailabilitySchema=new Schema({
    availableDate: {type: Date, required: true}, // Date when the availability is scheduled
    timeFrom: { type: Date, required: true }, // Start time of the availability 
    timeTo: { type: Date, required: true }, // End time of the availability 
    noofPatients: { type: Number, required: true }, // Number of patients that can be accommodated during this availability slot
    doctorCharges: { type: Number, required: true }, // Charges for the doctor's service during this availability slot
    serviceCharges: { type: Number, required: true }, // Additional service charges during this availability slot
    createdDate: {type: Date, required: true}, // Date when the availability was created
    modifiedDate: {type: Date }, // Date when the availability was last modified
    veternarian: { type: Schema.Types.ObjectId, ref: 'Veternarian' } // Reference to the veterinarian associated with this availability
},{
    collection: "Availability" // Setting the collection name explicitly to "Availability"
})
// Creating a model named "Availability" based on the schema
const Availability = mongoose.model("Availability", AvailabilitySchema);
// Exporting the model
module.exports = Availability;