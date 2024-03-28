const mongoose =require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: "Users", },
  recepientId: { type: Schema.Types.ObjectId, ref: "Users",},
  messageType: { type: String, enum: ["text", "image"],},
  message: String,
  imageUrl: String,
  timeStamp: { type: Date, default: Date.now, },
},{
    collection: "Messages"
});

const Message = mongoose.model("Messages", MessageSchema);

module.exports = Message;
