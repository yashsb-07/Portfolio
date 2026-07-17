import Button from "../../ui/Button/Button";
import aboutData from "../../../data/aboutData";

const AboutContent = () => {
  return (
    <>
      <span>WHO I AM</span>

      <h2>{aboutData.heading}</h2>

      <h3>{aboutData.subHeading}</h3>

      <p>{aboutData.description}</p>

      <Button>
        {aboutData.buttonText}
      </Button>
    </>
  );
};

export default AboutContent;