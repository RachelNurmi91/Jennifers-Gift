import Banner from "@components/Banner";

export default function Mission() {
  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Our Mission" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <p>
          1 in 8 women will get breast cancer. 1 in 3 of these women with breast
          cancer will get Metastatic Breast Cancer (MBC).
        </p>
        <p className="mt-4">
          All women who die from breast cancer, die from stage IV Metastatic
          Breast Cancer. Median survival after a Metastatic Breast Cancer
          diagnosis is 3 years. Only 2% to 5% of funds raised for breast cancer
          research is allocated to the Metastatic Breast Cancer patient. There
          is no cure for MBC.
        </p>
        <p className="mt-4">
          In November 2019, Jennifer O’Neill was diagnosed with Stage IV
          Metastatic Breast Cancer. She was 37 years old. She fought a brave and
          courageous battle for 2 years, exploring treatment after treatment. On
          December 6, 2021, she passed away at the age of 39, leaving behind her
          husband and two small children.
        </p>
        <p className="mt-4 font-bold">
          Today, we carry on her amazing legacy by raising more awareness for
          MBC.
        </p>
      </div>
    </section>
  );
}
