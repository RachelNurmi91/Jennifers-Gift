import Image from "next/image";
import Banner from "@components/Banner";
import JenniferImage from "@public/images/jennifer-image.jpg";

export default function Home() {
  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Raising awareness since 2022" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <div className="text-center">
          <p className="font-bold">
            Thank you for supporting us at the 2024 Annual Golf Tournament!
          </p>
          <p className="mt-5">
            This year we continued to work with{" "}
            <a href="https://www.thecancercouch.com/" target="_blank">
              The Cancer Couch Foundation
            </a>{" "}
            to raise money to fund metastatic breast cancer research. With your
            help we work towards finding effective treatment options for those
            living with metastatic breast cancer.
          </p>
          <p className="mt-5">
            Thank you to all of our sponsors, donors, and volunteers for making
            this possible!
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col justify-center text-center bg-gray-100 p-12">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-5">
                We use the memory of Jennifer O'Neill to raise awareness and
                money for research to fight against Metastatic Breast Cancer.
              </p>
            </div>
            <div style={{ position: "relative", minHeight: "300px" }}>
              <Image
                src={JenniferImage}
                alt="Image of Jennifer O'Neill"
                fill="fill"
                objectFit="cover"
                objectPosition="center"
                className="mx-auto"
              />
            </div>
            <div className="bg-gray-100 p-12">
              In November 2019, Jennifer O’Neill was diagnosed with Stage IV
              Metastatic Breast Cancer. She was 37 years old. She fought a brave
              and courageous battle for 2 years, exploring treatment after
              treatment. On December 6, 2021, she passed away at the age of 39.
              Today, we carry on her amazing legacy by raising more awareness
              for MBC.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
