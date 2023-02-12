import { Container, Row, Col } from "react-bootstrap";
import { BsFillSunFill, BsCloudsFill, BsFillCloudRainFill, BsSnow2, BsFillCloudSunFill } from 'react-icons/bs'
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { parseISO, format } from 'date-fns'


const MyLocation = (props) => {

    const [forecast, setForecast] = useState("")

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.name}&APPID=eeaa1c4b8d481e6b014d81c4dfe64c54&units=metric`

    const fetchForecast = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setForecast(data)
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchForecast();
    }, [props]);

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
            <Row>
                <Col>
                    <h2>Forecast</h2>
                </Col>
            </Row>
            <Row className="mt-5 mx-3 d-flex justify-content-center">
                {forecast ? (
                    forecast.list.map((forecastData) => (
                        <>
                            <Col key={forecastData.dt_txt} xs={2} className="mb-3 mx-2 forecast">
                                <p>{format(parseISO(forecastData.dt_txt), "EEEE, MMMM do p")}</p>
                                <p>{forecastData.main.temp}°C</p>
                                <p>Min: {forecastData.main.temp_min}</p>
                                <p>Max: {forecastData.main.temp_max}</p>
                            </Col>

                        </>
                    ))
                ) : (<h1><Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner></h1>)}

            </Row>

        </Container>
    )
};


export default MyLocation;