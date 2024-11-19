import { connectToDatabase } from "@database";
import { getRegistrationModel, getResourcesModel } from "@database/schemas";

export const fetchRegistration = async (confirmationNumber: string) => {
  const Registration = await getRegistrationModel(); // Ensure the model is initialized
  return Registration.findById(confirmationNumber);
};

export const fetchResources = async () => {
  const Resources = await getResourcesModel(); // Ensure the model is initialized
  return Resources.find({});
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