import { connectToDatabase } from "@database";
import { Registration } from "@database/schemas";

export const POST = async (req) => {
  const { fullName, email, phone, selection, paymentType, total } =
    await req.json();

  try {
    await connectToDatabase();
    const newRegistration = new Registration({
      fullName,
      email,
      phone,
      selection,
      paymentType,
      total,
    });

    const savedRegistration = await newRegistration.save();

    const confirmationNumber = savedRegistration._id;

    return new Response(JSON.stringify({ confirmationNumber }), {
      status: 201,
    });
  } catch (error) {
    return new Response("Registration failed: " + error, {
      status: 500,
    });
  }
};
