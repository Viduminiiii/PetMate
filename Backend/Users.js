const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    petOwner: { type: Schema.Types.ObjectId, ref: 'PetOwner' }
}, {
    collection: "Users"
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
