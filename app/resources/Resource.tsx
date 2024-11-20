import { ResourceDataTypes } from "@app/interfaces/types";

const Resource: React.FC<ResourceDataTypes> = async ({resourceData}) => {

  return (
    <div>
      {resourceData?.map((resource) => (
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
  );
};

export default Resource;
