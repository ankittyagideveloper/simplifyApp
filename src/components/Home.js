import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "./Menu.scss";
const Home = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);
  const [weight, setWeight] = useState(0);
  const [newAmount, setNewAmount] = useState(0);
  const [newWeight, setNewWeight] = useState(0);
  const [answerAmount, setAnswerAmount] = useState("");
  const [answerWeight, setAnsewerWeight] = useState("");
  const showHandler = (show) => {
    setShow(!show);
    setAnsewerWeight("");
    setAnswerAmount("");
  };
  const calAmount = () => {
    if (newWeight > 0) {
      let newAmount = (amount / weight) * newWeight;
      setAnswerAmount(newAmount + "₹");
    }
  };

  const calWeight = () => {
    if (newAmount > 0) {
      let newWeight = (weight / amount) * newAmount;
      setAnsewerWeight(newWeight + "Kg");
    }
  };

  return (
    <Container style={{ marginTop: "3%" }}>
      <Row>
        <Col xs="auto">
          <InputGroup className="mb-2">
            <InputGroup.Text>Kg</InputGroup.Text>
            <FormControl
              onChange={(e) => setWeight(e.target.value)}
              disabled={show}
              type="Number"
              id="inlineFormInputGroup"
              placeholder="Weight"
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <InputGroup className="mb-2">
            <InputGroup.Text>₹</InputGroup.Text>
            <FormControl
              onChange={(e) => setAmount(e.target.value)}
              disabled={show}
              type="Number"
              id="inlineFormInputGroup"
              placeholder="Amout"
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Button
            className="navbar"
            disabled={weight === 0 || amount === 0}
            onClick={() => showHandler(show)}
          >
            {show ? "Reset" : "Set"}
          </Button>
        </Col>
      </Row>
      {show ? (
        <Row>
          <Col className="align-items-center">
            <Row xs="auto">
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Text>Kg</InputGroup.Text>
                  <FormControl
                    onChange={(e) => setNewWeight(e.target.value)}
                    type="Number"
                    id="inlineFormInputGroup"
                    placeholder="Weight"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Button onClick={() => calAmount()} variant="success">
                  Calculate
                </Button>
              </Col>
              <Col>{answerAmount}</Col>
            </Row>

            <Col xs="align-items-center">
              <Row xs="auto">
                <Col>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>₹</InputGroup.Text>
                    <FormControl
                      onChange={(e) => setNewAmount(e.target.value)}
                      type="Number"
                      id="inlineFormInputGroup"
                      placeholder="Amout"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Button onClick={() => calWeight()} variant="success">
                    Calculate
                  </Button>
                </Col>
                <Col>{answerWeight}</Col>
              </Row>
            </Col>
          </Col>
        </Row>
      ) : (
        <Form.Text className="text-danger">Fill the data* </Form.Text>
      )}
    </Container>
  );
};
export default Home;
