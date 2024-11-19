import Banner from "@components/Banner";
import RegistrationForm from "./RegistrationForm";

export default function Register() {
  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Register" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <RegistrationForm />
      </div>
    </section>
  );
}
