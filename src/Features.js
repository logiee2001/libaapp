import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Features</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 card-gradient text-center">
            <Card.Body>
              <i className="bi bi-journal-text icon-style"></i>
              <Card.Title>Book Management</Card.Title>
              <Card.Text>
                Easily add, update, and delete books in the library with our intuitive interface.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 card-gradient text-center">
            <Card.Body>
              <i className="bi bi-search icon-style"></i>
              <Card.Title>Advanced Search</Card.Title>
              <Card.Text>
                Quickly find books by title, author, or genre with our powerful search tool.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 card-gradient text-center">
            <Card.Body>
              <i className="bi bi-book-half icon-style"></i>
              <Card.Title>Detailed Records</Card.Title>
              <Card.Text>
                Maintain detailed records of all books, including authors, genres, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
