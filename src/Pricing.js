import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Pricing() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Pricing Plans</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 card-gradient text-center">
            <Card.Body>
              <Card.Title>Basic</Card.Title>
              <h3 className="pricing-card-price">$0 <small>/ month</small></h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Access to basic features</li>
                <li>10 book records</li>
                <li>Email support</li>
              </ul>
              <Button variant="primary">Sign Up for Free</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 card-gradient text-center">
            <Card.Body>
              <Card.Title>Standard</Card.Title>
              <h3 className="pricing-card-price">$149 <small>/ month</small></h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Access to all features</li>
                <li>Unlimited book records</li>
                <li>Priority support</li>
              </ul>
              <Button variant="primary">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 card-gradient text-center">
            <Card.Body>
              <Card.Title>Premium</Card.Title>
              <h3 className="pricing-card-price">$549 <small>/ month</small></h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>All standard features</li>
                <li>Advanced analytics</li>
                <li>24/7 support</li>
              </ul>
              <Button variant="primary">Join Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;
