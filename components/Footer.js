import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer>
    <Container className="bg-secondary" fluid>
      <br/>
      <Row className="justify-content-around">
        <Col>
          <p className="text-center">&copy; AFARINESHFEKRIFARAZ 2015 - {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
    </footer>
  );
}

export default Footer;