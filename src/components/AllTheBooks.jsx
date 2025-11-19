import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AllTheBooks = function ({ books, onSelectBook, searchTerm }) {
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <Container>
      <Row>
        {filteredBooks.map((book) => {
          return (
            <Col key={book.asin} className="w-25 mb-5 " xs={12} md={4} lg={3}>
              <Card className="h-100 border border-dark">
                <Card.Img src={book.img} className="h-100 w-100" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="flex-grow-1">{book.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    At cost of {book.price}$
                  </Card.Text>
                  <Button variant="primary" onClick={() => onSelectBook(book)}>
                    Mostra dettagli
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
