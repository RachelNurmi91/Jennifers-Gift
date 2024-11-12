import { Schema, model, models } from "mongoose";

const resourcesSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  summary: {
    type: String,
  },
});

const Resources = models.Resources || model("Resources", resourcesSchema);

export default Resources;
