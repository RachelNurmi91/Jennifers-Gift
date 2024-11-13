import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    await client.db("test").command({ ping: 1 });
    client.close();
    res.status(200).json({ message: "MongoDB connected successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
