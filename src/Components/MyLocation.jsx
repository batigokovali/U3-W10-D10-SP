import { Container, Row, Col } from "react-bootstrap";
import { BsFillSunFill, BsCloudsFill, BsFillCloudRainFill, BsSnow2, BsFillCloudSunFill } from 'react-icons/bs'

const MyLocation = (props) => {

    return (
        <Container className="display-weather py-5">
            <h1>{props.data.name}, {props.data.sys.country}</h1>
            <h1>{props.data.main.temp}°C</h1>
            <h3>Feels Like: {props.data.main.feels_like}°C, {props.data.weather[0].description}
                {props.data.weather[0].main === "Clear" && (<BsFillSunFill className="ml-2"></BsFillSunFill>)}
                {props.data.weather[0].main === "Clouds" && (<BsCloudsFill className="ml-2"></BsCloudsFill>)}
                {props.data.weather[0].main === "Rain" && (<BsFillCloudRainFill className="ml-2"></BsFillCloudRainFill>)}
                {props.data.weather[0].main === "Snow" && (<BsSnow2 className="ml-2"></BsSnow2>)}
                {props.data.weather[0].main === "Half Cloud" && (<BsFillCloudSunFill className="ml-2"></BsFillCloudSunFill>)}
            </h3>
            <Row>
                <Col xs={6}>
                    <h3>Wind Degree: {props.data.wind.deg}</h3>
                    <h3>Wind Speed: {props.data.wind.speed}</h3>
                </Col>
                <Col xs={6}>
                    <h3>Humidity: {props.data.main.humidity}%</h3>
                    <h3>Pressure: {props.data.main.pressure}hPa</h3>
                </Col>
            </Row>
        </Container>

    );
};

export default MyLocation;