import Banner from "@components/Banner";
import { getResources } from "@data-access/getData";

const Resources = async () => {
  const resources = await getResources();

  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Resources" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        {resources.map((resource) => (
          <div key={resource._id} className="mt-5">
            {console.log(resource)}
            <a
              href={resource.url}
              target="_blank"
              className="text-blue-500 font-bold"
            >
              {resource.name}
            </a>
            <p className="text-sm mt-2 ml-4 text-gray-500">
              {resource.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
