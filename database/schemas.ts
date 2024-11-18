import { Schema, model, models } from "mongoose";

// REGISTRATION SCHEMA
const registrationSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  selection: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

// RESOURCES SCHEMA
const resourcesSchema = new Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  summary: {
    type: String,
  },
});

// MODELS
const Registration =
  models.Registration || model("Registration", registrationSchema);

const Resources = models.Resources || model("Resources", resourcesSchema);

// EXPErTS
export { Registration, Resources };
