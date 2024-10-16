import Banner from "@components/Banner";

const Resources = () => {
  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Resources" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <div className="mt-5">
          <a
            href="https://www.dana-farber.org/"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            Dana-Farber Cancer Institute
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            A world leader in adult and pediatric cancer treatment and research,
            located in Boston, Massachusetts.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://www.breastcancer.org"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            Breast Cancer Org
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            A nonprofit organization dedicated to providing reliable and
            up-to-date information about breast cancer.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://www.mbcn.org"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            The Metastatic Breast Cancer Network
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            A volunteer based non-profit and advocacy organization dedicated to
            the concerns of those living with metastatic breast cancer.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://hairtostay.org"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            HairToStay
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            The first and only national nonprofit organization dedicated to
            helping low-income cancer patients afford scalp cooling - a
            treatment that can dramatically reduce chemotherapy induced hair
            loss.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://www.sharecancersupport.org"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            SHARE Cancer Support
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            A nonprofit that serves to create and sustain a supportive community
            of women affected by breast or ovarian cancer.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://metavivor.org"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            METAvivor
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            Funds and raises awareness for stage IV metastatic breast cancer.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://youngsurvival.org"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            Young Survival Coalition
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            An international organization focusing on women ages 40 and under
            who are diagnosed with breast cancer.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://www.jajf.org/"
            target="_blank"
            className="text-blue-500 font-bold"
          >
            Jack & Jill Late Stage Cancer Foundation
          </a>
          <p className="text-sm mt-2 ml-4 text-gray-500">
            Their mission is to send families on WOW! Experiences across the
            country for memory-making timeouts from cancer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
