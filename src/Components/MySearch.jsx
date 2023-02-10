import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const MySearch = () => {
  const [query, setQuery] = useState("");
  //const [location, setLocation] = useState([]);

  const baseEndpoint =
    `api.openweathermap.org/data/2.5/weather?q=${query}&APPID=56db6901d4a5b12ceea085dbc13358d4`;

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        //setLocation(data)
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={8} className="mr-auto my-3">
          <h1>Search for a Location!</h1>
        </Col>
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MySearch;
