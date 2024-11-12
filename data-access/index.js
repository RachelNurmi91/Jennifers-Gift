export const fetchResources = async () => {
  const response = await fetch(
    "http://localhost:3000/api/fetch/fetchResources"
  );
  const resourcesData = await response.json();

  return resourcesData;
};

export const createRegistration = async (submission) => {
  console.log("Submission:", submission);
  try {
    const response = await fetch("/api/create/newRegistration", {
      method: "POST",
      body: JSON.stringify({
        fullName: submission.fullName,
        email: submission.email,
        phone: submission.phone,
        selection: submission.selection,
        paymentType: submission.paymentType,
        total: submission.total,
      }),
    });

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
  try {
    const registrationRes = await fetch(
      `http://localhost:3000/api/fetch/fetchRegistration?id=${confirmationNumber}`
    );

    if (registrationRes.ok) {
      const registrationData = await registrationRes.json();
      return registrationData;
    } else {
      console.error(
        "Failed to fetch registration:",
        registrationRes.statusText
      );
      return null;
    }
  } catch (error) {
    console.error("Error fetching registration:", error);
    return null;
  }
};
