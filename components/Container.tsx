import Banner from "@components/Banner";
import { ContainerTypes } from "./interfaces/types";


const Container: React.FC<ContainerTypes> = ({ title, component }) => {
  return (
    <section className="flex-center flex-col w-full">
      <Banner title={title} />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        {component}
      </div>
    </section>
  )
}

export default Container
