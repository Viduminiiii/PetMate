const mongoose =require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    petOwner: { type: Schema.Types.ObjectId, ref: 'PetOwner' },
    Veternarian: { type: Schema.Types.ObjectId, ref: 'Veternarian' },
    Pharmacy: { type: Schema.Types.ObjectId, ref: 'Pharmacy' },
    createdDate: {type: Date, required: true},
    modifiedDate: {type: Date },
}, {
    collection: "Users"
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
