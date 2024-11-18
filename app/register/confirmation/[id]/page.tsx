import Banner from "@components/Banner";
import RegistrationConfirmation from "./RegistrationConfirmation";
import { fetchRegistration } from "@data-access";

const Confirmation = async ({ params }) => {
  const { id: confirmationNumber } = await params;

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
