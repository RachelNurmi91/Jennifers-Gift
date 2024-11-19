import { getRegistrationModel } from "@database/schemas";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { fullName, email, phone, selection, paymentType, total } = await req.json();
    

    if (!fullName || !email || !phone || !selection || !paymentType || !total) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const Registration = await getRegistrationModel();

    const newRegistration = new Registration({
      fullName,
      email,
      phone,
      selection,
      paymentType,
      total,
    });

    const savedRegistration = await newRegistration.save();


    return NextResponse.json(
      {
        confirmationNumber: savedRegistration._id.toString(),
      },
      { status: 201 }
    )

  } catch (error: any) {
    console.error("Error saving registration:", error);
    return res.status(500).json({ message: "Registration failed", error: error.message });
  }
}
