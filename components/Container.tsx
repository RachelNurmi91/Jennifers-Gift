import Banner from "@components/Banner";
import { ReactNode } from "react";

interface ContainerProps {
  title: string,
  component: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ title, component }) => {
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
