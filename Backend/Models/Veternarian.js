// Importing mongoose library
const mongoose = require("mongoose");
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for veterinarians
const VeternarianSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, unique: true },
    veterinaryClinicName: { type: String, required: true },
    veterinaryLicenseNumber: { type: String, required: true },
    veterinaryClinicAddress: { type: String, required: true },
    mainCity: { type: String },
    location: {
      type: {
        type: String,
        enum: ["Point"], // GeoJSON type indicating a point
        default: "Point",
        required: true,
      },
      coordinates: {
        type: [Number], // Longitude and latitude coordinates
        required: true,
      },
    },
    createdDate: { type: Date, required: true }, // Date when the veterinarian record was created
    modifiedDate: { type: Date }, // Date when the veterinarian record was last modified
  },
  {
    collection: "Veternarian", // Setting the collection name explicitly to "Veternarian"
  }
);
// Creating a model named "Veternarian" based on the schema
const Veternarian = mongoose.model("Veternarian", VeternarianSchema);
// After defining VeternarianSchema
module.exports = Veternarian; // Exporting the model
