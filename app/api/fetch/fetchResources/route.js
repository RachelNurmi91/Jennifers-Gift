import { connectToDatabase } from "@database";
import { Resources } from "@database/schemas";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const resources = await Resources.find({});

    // Return the resources as JSON with a 200 status using NextResponse
    return NextResponse.json(resources, { status: 200 });
  } catch (error) {
    console.error(error);

    // Return an error response with a 500 status
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
};
