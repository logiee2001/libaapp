import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Library Register. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
