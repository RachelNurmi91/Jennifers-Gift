import Banner from "@components/Banner";
import RegistrationConfirmation from "./RegistrationConfirmation";

const Confirmation = async () => {
  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Annual Charity Golf Tournament" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <RegistrationConfirmation />
      </div>
    </section>
  );
};

export default Confirmation;
