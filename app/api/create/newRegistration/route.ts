import { getRegistrationModel } from "@database/schemas";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the JSON body
    const { fullName, email, phone, selection, paymentType, total } = await req.json();

    // Validate required fields
    if (!fullName || !email || !phone || !selection || !paymentType || !total) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Get the Registration model
    const Registration = await getRegistrationModel();

    // Create a new registration document
    const newRegistration = new Registration({
      fullName,
      email,
      phone,
      selection,
      paymentType,
      total,
    });

    // Save to database
    const savedRegistration = await newRegistration.save();

    // Respond with the confirmation number
    return NextResponse.json(
      {
        confirmationNumber: savedRegistration._id.toString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving registration:", error);
    return NextResponse.json(
      { message: "Registration failed", error: error.message },
      { status: 500 }
    );
  }
}
