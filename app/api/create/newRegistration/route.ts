import { connectToDatabase } from "@database";
import { getRegistrationModel } from "@database/schemas";

// Server-side API handler to process the registration
export const POST = async (req) => {
  const { fullName, email, phone, selection, paymentType, total } = await req.json();

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
  } catch (error) {
    console.error("Error saving registration:", error);
    return new Response("Registration failed: " + error.message, {
      status: 500,
    });
  }
};
