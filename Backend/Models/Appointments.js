// Importing mongoose library
const mongoose =require('mongoose');
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for appointments
const AppointmentsSchema=new Schema({
    appointmentDate: {type: Date, required: true}, // Date of the appointment
    appointmentTime: { type: Date, required: true }, // Time of the appointment
    appointmentNo: { type: Number, required: true }, // Appointment number
    isPaid: {type: Boolean, required: true, default: false },
    paidDate: {type: Date},
    medications: { type: String, required: true },
    instructions: { type: String, required: true },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date },
    availability: { type: Schema.Types.ObjectId, ref: 'Availability' }
},{
    collection: "Appointments"
})
const Appointments = mongoose.model("Appointments", AppointmentsSchema);

module.exports = Appointments;