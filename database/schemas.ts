import { Schema, model, models } from "mongoose";
import { connectToDatabase } from "./index"; // Adjust path as needed

// Schemas
const registrationSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  paymentType: { type: String, required: true },
  selection: { type: [String], required: true },
  total: { type: Number, required: true },
});

const resourcesSchema = new Schema({
  name: String,
  url: String,
  summary: String,
});

// Lazy-loaded models
let Registration: any = null;
let Resources: any = null;

export const getRegistrationModel = async () => {
  if (!Registration) {
    await connectToDatabase();
    Registration = models.Registration || model("Registration", registrationSchema);
  }
  return Registration;
};

export const getResourcesModel = async () => {
  if (!Resources) {
    await connectToDatabase();
    Resources = models.Resources || model("Resources", resourcesSchema);
  }
  return Resources;
};
