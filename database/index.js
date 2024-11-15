import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  debugger;
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
      dbName: "jennifersGift",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
