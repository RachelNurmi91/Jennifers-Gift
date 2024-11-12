import { connectToDatabase } from "@database";
import { Resources } from "@database/schemas";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const resources = await Resources.find({});

    if (!resources) {
      return new Response("Resources not found", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(resources), {
      status: 200,
    });
  } catch (error) {
    return new Response("Error fetching resources: " + error, {
      status: 500,
    });
  }
};
