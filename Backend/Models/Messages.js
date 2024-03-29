// Importing mongoose library
const mongoose =require('mongoose');
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for messages
const MessageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: "Users", },
  recepientId: { type: Schema.Types.ObjectId, ref: "Users",},
  messageType: { type: String, enum: ["text", "image"],},
  message: String,
  imageUrl: String,
  timeStamp: { type: Date, default: Date.now, },
},{
    collection: "Messages" // Setting the collection name explicitly to "Messages"
});

const Message = mongoose.model("Messages", MessageSchema); // Creating a model named "Messages" based on the schema

module.exports = Message; // Exporting the model
