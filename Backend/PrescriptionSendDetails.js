const mongoose =require('mongoose');
const { Schema } = mongoose;

const PrescriptionSendDetailsSchema=new Schema({
    appointments: { type: Schema.Types.ObjectId, ref: 'Appointments' },
    sendPharmacy: { type: Schema.Types.ObjectId, ref: 'Pharmacy' },
    pharmacyRepliedDate: {type: Date },
    drugsAvailability: {type: Boolean, default: false },
    pharmacyComment: {type: String, required: true }, 
    isDrugsBought: {type: Boolean, default: false },
},{
    collection: "PrescriptionSendDetails"
})
const PrescriptionSendDetails = mongoose.model("PrescriptionSendDetails", PrescriptionSendDetailsSchema);

module.exports = PrescriptionSendDetails;