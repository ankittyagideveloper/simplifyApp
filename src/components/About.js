import React from "react";
import { Card, Button } from "react-bootstrap";

const About = () => {
  return (
    <div
      style={{
        margin: "5% ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "20rem",
        }}
      >
        <Card.Img variant="top" src="/icon-512.png" alt="image" />
        <Card.Body>
          <Card.Title>Simplify</Card.Title>
          <Card.Text>An app to simplify our day to day life.</Card.Text>
          <Card.Text>Made With ❤ By Ankit</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default About;
