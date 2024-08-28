import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from "react-bootstrap";
import BookList from "./BookList";
import Footer from "./Footer";
import Features from "./Features";
import Pricing from "./Pricing";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); 
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddBook = () => {
    setBooks([...books, { id: Date.now(), title, author, genre }]);
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdateBook = (id, updatedTitle, updatedAuthor, updatedGenre) => {
    const updatedBooks = books.map((book) =>
      book.id === id
        ? { ...book, title: updatedTitle, author: updatedAuthor, genre: updatedGenre }
        : book
    );
    setBooks(updatedBooks);
  };

  if (loading) {
    return (
      <div className="loading-page">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-gradient">
        <Container>
          <Navbar.Brand href="#">Library Register</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="mb-4 card-gradient">
              <Card.Body>
                <Card.Title>Add New Book</Card.Title>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleAddBook}>
                  Add Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <BookList books={books} onDelete={handleDeleteBook} onUpdate={handleUpdateBook} />
          </Col>
        </Row>
      </Container>

      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
