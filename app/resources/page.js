import Banner from "@components/Banner";

const Resources = async () => {
  const res = await fetch("http://localhost:3000/api/fetch/fetchResources");

  const resources = await res.json();

  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Resources" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        {resources.map((resource) => (
          <div key={resource._id} className="mt-5">
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
