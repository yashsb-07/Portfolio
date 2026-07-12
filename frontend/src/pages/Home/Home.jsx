import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import Button from "../../components/ui/Button/Button";
import SectionHeading from "../../components/ui/SectionHeading/SectionHeading";

const Home = () => {
  return (
    <Section>
      <Container>
        <SectionHeading
          subtitle="Welcome"
          title="Building My Developer Journey"
        />

        <Button>Let's Connect</Button>
      </Container>
    </Section>
  );
};

export default Home;