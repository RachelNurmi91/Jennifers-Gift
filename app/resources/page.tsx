import { fetchResources } from "@data-access";
import { ResourceTypes } from "@app/interfaces/types";
import Container from "@components/Container";
import Resource from "./Resource";

const ResourcePage = async () => {
  const resourceData: ResourceTypes[] = await fetchResources();

  return (
    <Container
      title="Resources"
      component={<Resource resourceData={resourceData}/>}
    />
  );
};

export default ResourcePage;
