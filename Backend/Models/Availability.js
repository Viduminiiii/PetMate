// Importing mongoose library
const mongoose =require('mongoose');
const { Schema } = mongoose;

// Defining schema for availability
const AvailabilitySchema=new Schema({
    availableDate: {type: Date, required: true}, // Date when the availability is scheduled
    timeFrom: { type: Date, required: true }, // Start time of the availability 
    timeTo: { type: Date, required: true }, // End time of the availability 
    noofPatients: { type: Number, required: true }, // Number of patients that can be accommodated during this availability slot
    doctorCharges: { type: Number, required: true },
    serviceCharges: { type: Number, required: true },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date },
    veternarian: { type: Schema.Types.ObjectId, ref: 'Veternarian' }
},{
    collection: "Availability"
})
const Availability = mongoose.model("Availability", AvailabilitySchema);

module.exports = Availability;