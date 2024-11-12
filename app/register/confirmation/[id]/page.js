import Banner from "@components/Banner";
import RegistrationConfirmation from "./RegistrationConfirmation";

const Confirmation = async ({ params }) => {
  const confirmationNumber = params.id;
  const userFriendlyConfirmationNumber = confirmationNumber
    ?.slice(-8)
    .toUpperCase();

  const getRegistration = async (confirmationNumber) => {
    const confirmationData = await fetchRegistration(confirmationNumber);
    if (confirmationData) {
      return confirmationData;
    } else {
      return null;
    }
    setIsLoading(false);
  };

  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Annual Charity Golf Tournament" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <RegistrationConfirmation
          getRegistration={getRegistration}
          confirmationNumber={confirmationNumber}
        />
      </div>
    </section>
  );
};

export default Confirmation;
