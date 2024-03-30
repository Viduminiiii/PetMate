// Importing mongoose library
const mongoose = require("mongoose");
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining schema for pharmacies
const PharmacySchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, unique: true },
    pharmacyName: { type: String, required: true },
    pharmacyLicenseNumber: { type: String, required: true },
    pharmacyAddress: { type: String, required: true },
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
    createdDate: { type: Date, required: true }, // Date when the pharmacy record was created
    modifiedDate: { type: Date }, // Date when the pharmacy record was last modified
  },
  {
    collection: "Pharmacy", // Setting the collection name explicitly to "Pharmacy"
  }
);
// Creating a model named "Pharmacy" based on the schema
const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);
// After defining PharmacySchema
module.exports = Pharmacy; //exporting the model
