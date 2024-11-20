import { fetchRegistration } from "@data-access";
import Container from "@components/Container";
import Confirmation from "./Confirmation";

const ConfirmationPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  
  const confirmationNumber = Array.isArray(params?.id) ? params.id[0] : params?.id;

  if (!confirmationNumber) {
    console.error("No confirmation number provided.");
    return;
  }

  const registrationData = await fetchRegistration(confirmationNumber);

  return (
    <Container
      title="Annual Charity Golf Tournament"
      component={<Confirmation registrationData={registrationData} />}
    />
  );
};

export default ConfirmationPage;
