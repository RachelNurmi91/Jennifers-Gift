import Banner from "@components/Banner";
import RegistrationConfirmation from "./RegistrationConfirmation";
import { fetchRegistration } from "@data-access";

const Confirmation = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  
  // Ensure confirmationNumber is a string (get the first value if it's an array, or handle undefined)
  const confirmationNumber = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // Ensure confirmationNumber is not undefined before calling fetchRegistration
  if (!confirmationNumber) {
    // Handle error, or redirect to an error page
    console.error("No confirmation number provided.");
    return;
  }

  // Fetch the registration data
  const registrationData = await fetchRegistration(confirmationNumber);

  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Annual Charity Golf Tournament" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <RegistrationConfirmation registrationData={registrationData} />
      </div>
    </section>
  );
};

export default Confirmation;
