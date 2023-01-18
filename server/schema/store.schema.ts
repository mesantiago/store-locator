import mongoose from "mongoose";

export const storeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  imageUrl: {
    type: String
  }
});