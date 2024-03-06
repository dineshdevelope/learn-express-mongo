import mongoose from "mongoose";
import { Schema } from "mongoose";

const tutRequest = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  createdAt: Date,
});

const tutRequestModel = mongoose.model("tutorial-request", tutRequest);

export const createTutorialRequest = async (data) => {
  try {
    const result = await tutRequestModel.create(data);
    console.log("Result of Create TutorialRequest", result);
  } catch (error) {
    console.log(error);
  }
};
