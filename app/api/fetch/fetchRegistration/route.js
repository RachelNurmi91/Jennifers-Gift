import { Registration } from "@database/schemas";
import { connectToDatabase } from "@database";

export const GET = async (req) => {
  try {
    await connectToDatabase();

    // Extract the _id from the query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response("ID is required", {
        status: 400,
      });
    }

    // Fetch the registration by _id
    const registration = await Registration.findById(id);

    if (!registration) {
      return new Response("Registration not found", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(registration), {
      status: 200,
    });
  } catch (error) {
    return new Response("Error fetching registration: " + error, {
      status: 500,
    });
  }
};
