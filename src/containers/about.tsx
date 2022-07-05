import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button
          variant="primary"
          href="https://www.youtube.com/channel/UCsPBKegAgpm2LES2ArWw3qg"
          size="lg"
        >
          Visit my channels for more tutorials
        </Button>
      </Col>
    </Row>
  );
};

export default About;
