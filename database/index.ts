import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  debugger;
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  const secretDatabaseKey = process.env.NEXT_PUBLIC_MONGODB_URI;

  if (!secretDatabaseKey) {
    throw new Error("MongoDB URI is not defined in ENV.")
  }

  try {
    await mongoose.connect(secretDatabaseKey, {
      dbName: "jennifersGift",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
