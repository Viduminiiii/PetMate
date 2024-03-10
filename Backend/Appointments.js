const mongoose =require('mongoose');
const { Schema } = mongoose;

const AppointmentsSchema=new Schema({
    appointmentDate: {type: Date, required: true},
    appointmentTime: { type: Date, required: true },
    appointmentNo: { type: Number, required: true },
    isPaid: {type: Boolean, required: true, default: false },
    paidDate: {type: Date},
    medications: { type: String, required: true },
    instructions: { type: String, required: true },
    availability: { type: Schema.Types.ObjectId, ref: 'Availability' }
},{
    collection: "Appointments"
})
const Appointments = mongoose.model("Appointments", AppointmentsSchema);

module.exports = Appointments;