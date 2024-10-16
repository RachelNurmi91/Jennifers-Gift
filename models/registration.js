import { Schema, model, models } from "mongoose";

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

const Registration =
  models.Registration || model("Registration", registrationSchema);

export default Registration;
