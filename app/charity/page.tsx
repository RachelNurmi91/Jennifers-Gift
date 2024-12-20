import Container from "@components/Container";
import Charity from "./Charity";

export default function CharityPage() {
  return (
    <Container
      title="Annual Charity Golf Tournament"
      component={<Charity />}
    />
  );
}