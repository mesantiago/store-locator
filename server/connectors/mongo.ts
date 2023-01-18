import mongoose from "mongoose";
import { storeSchema, userSchema } from "../schema";

export const init = (mongoUrl: string) : void => {
  // Connect
  mongoose.set('strictQuery', false);
  mongoose.connect(mongoUrl, err => {
    if (err) {
      return console.error("Error while connecting to mongo DB");
    }
    console.log('Connected to mongodb...');
  });
  // Initialize schema
  mongoose.model('Store', storeSchema);
  mongoose.model('User', userSchema);
};