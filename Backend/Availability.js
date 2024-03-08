const mongoose =require('mongoose');
const { Schema } = mongoose;

const AvailabilitySchema=new Schema({
    // name: { type: String, required: true },
    date: {type: Number, required: true},
    timefrom: { type: Number, required: true },
    timeto: { type: Number, required: true },
    clinicname: { type: Number, required: true },
    noofpatients: { type: Number, required: true },
    // user: { type: Schema.Types.ObjectId, ref: 'Users' }
},{
    collection: "Availability"
})
const Availability = mongoose.model("Availability", AvailabilitySchema);

module.exports = Availability;