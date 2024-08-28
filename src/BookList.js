import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function BookList({ books, onDelete, onUpdate }) {
  return (
    <Row>
      {books.map((book) => (
        <Col md={6} key={book.id}>
          <Card className="mb-4 card-gradient">
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Author: {book.author}</Card.Text>
              <Card.Text>Genre: {book.genre}</Card.Text>
              <Button variant="danger" onClick={() => onDelete(book.id)}>
                Delete
              </Button>
              <Button
                variant="secondary"
                className="ms-2"
                onClick={() =>
                  onUpdate(
                    book.id,
                    prompt("Update Title", book.title),
                    prompt("Update Author", book.author),
                    prompt("Update Genre", book.genre)
                  )
                }
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BookList;
