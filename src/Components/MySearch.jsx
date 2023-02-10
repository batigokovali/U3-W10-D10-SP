import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import MyLocation from "./MyLocation";

const MySearch = () => {
  const [query, setQuery] = useState();
  const [locations, setLocation] = useState(null)

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=eeaa1c4b8d481e6b014d81c4dfe64c54&units=metric`;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setLocation(data)
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className="mr-auto mb-0 jumbotron first-header">
          <h1 className="header">Search for a Location!</h1>
          <Row>
            <Col xs={6} className="mx-auto px-0 mt-5">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search and press Enter..."
                  required
                />
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">{locations ? (<MyLocation data={locations}></MyLocation>) : (
          <h2>Result will be displayed here...</h2>
        )}
        </Col>
      </Row>
    </Container>
  );
};

export default MySearch;
