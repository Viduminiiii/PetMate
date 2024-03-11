const mongoose =require('mongoose');
const { Schema } = mongoose;

const AvailabilitySchema=new Schema({
    availableDate: {type: Date, required: true},
    timeFrom: { type: Date, required: true },
    timeTo: { type: Date, required: true },
    clinicName: { type: String, required: true },
    noofPatients: { type: Number, required: true },
    doctorCharges: { type: Double, required: true },
    serviceCharges: { type: Double, required: true },
    veternarian: { type: Schema.Types.ObjectId, ref: 'Veternarian' }
},{
    collection: "Availability"
})
const Availability = mongoose.model("Availability", AvailabilitySchema);

module.exports = Availability;