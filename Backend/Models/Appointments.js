// Importing mongoose library
const mongoose =require('mongoose');
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for appointments
const AppointmentsSchema=new Schema({
    appointmentDate: {type: Date, required: true}, // Date of the appointment
    appointmentTime: { type: Date, required: true }, // Time of the appointment
    appointmentNo: { type: Number, required: true }, // Appointment number
    isPaid: {type: Boolean, required: true, default: false }, // Indicates if the appointment is paid or not
    paidAmount: { type: Number, required: true },
    paidDate: {type: Date}, // Date when the appointment was paid
    medications: { type: String }, // Medications prescribed during the appointment
    instructions: { type: String }, // Instructions given during the appointment
    createdDate: {type: Date, required: true}, // Date when the appointment was created
    modifiedDate: {type: Date }, // Date when the appointment was last modified
    availability: { type: Schema.Types.ObjectId, ref: 'Availability' },// Reference to availability slot
    petOwner: { type: Schema.Types.ObjectId, ref: 'PetOwner' }, // Reference to petowner slot
},{
    collection: "Appointments" // Setting the collection name explicitly to "Appointments"
})
// Creating a model named "Appointments" based on the schema
const Appointments = mongoose.model("Appointments", AppointmentsSchema);
// Exporting the model
module.exports = Appointments;