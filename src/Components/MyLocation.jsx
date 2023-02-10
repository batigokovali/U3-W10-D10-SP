import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Location = ({ data, index }) => {
    const dispatch = useDispatch();
    let locations = useSelector((state) => state.locations.content);

    return (
        <Row
            className="mx-0 mt-3 p-3 d-flex align-items-center"
            style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
            <p>Test</p>

        </Row>
    );
};

export default Job;
