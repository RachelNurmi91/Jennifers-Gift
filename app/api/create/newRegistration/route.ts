import { connectToDatabase } from "@database";
import { getRegistrationModel } from "@database/schemas";
import { NextApiRequest } from "next";

interface RequestTypes {
  fullName: string;
  email: string;
  phone: string;
  selection: string;
  paymentType: string;
  total: number;
  json: any;
}

export const POST = async (req: NextApiRequest) => {
  const { fullName, email, phone, selection, paymentType, total }: RequestTypes = await req.body;

  try {
    await connectToDatabase(); // Connect to the database

    // Get the Registration model
    const Registration = await getRegistrationModel();

    // Create a new registration document using the model
    const newRegistration = new Registration({
      fullName,
      email,
      phone,
      selection,
      paymentType,
      total,
    });

    // Save the registration document to the database
    const savedRegistration = await newRegistration.save();

    // Return the confirmation number as a response
    return new Response(
      JSON.stringify({ confirmationNumber: savedRegistration._id }),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving registration:", error);
    return new Response("Registration failed: " + error.message, {
      status: 500,
    });
  }
};
