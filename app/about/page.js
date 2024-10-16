import Banner from "@components/Banner";

const About = () => {
  return (
    <section className="flex-center flex-col w-full">
      <Banner title="About Us" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        About Us
      </div>
    </section>
  );
};

export default About;
