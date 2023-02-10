import { Container, Row, Col } from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';

const MyLocation = (props) => {

    return (
        <Container>
            <h1>{props.data.name}</h1>
            <h1>Average Temp: {props.data.main.temp}</h1>
            <h3>Feels Like: {props.data.main.feels_like}</h3>
        </Container>

    );
};

export default MyLocation;