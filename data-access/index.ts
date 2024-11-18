import { connectToDatabase } from "@database";
import { Resources, Registration } from "@database/schemas";

export const fetchResources = async () => {
  await connectToDatabase();
  const response = await Resources.find({});
  return response;
};

export const createRegistration = async (submission) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/create/newRegistration`,
      {
        method: "POST",
        body: JSON.stringify({
          fullName: submission.fullName,
          email: submission.email,
          phone: submission.phone,
          selection: submission.selection,
          paymentType: submission.paymentType,
          total: submission.total,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const confirmationNumber = data.confirmationNumber;
      return confirmationNumber;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchRegistration = async (confirmationNumber) => {
  await connectToDatabase();
  const response = await Registration.findById(confirmationNumber);
  return response;
};
