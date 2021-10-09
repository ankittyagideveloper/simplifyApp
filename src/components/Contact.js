import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Menu.scss";
import contactImage from "../Assests/Contact.jpg";

const Contact = () => {
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
        <Card.Img variant="top" src={contactImage} />
        <Card.Body>
          <Card.Title>Ankit Tyagi</Card.Title>
          <Card.Text>
            Hii,I love to learn new things.Contact me on the below social media
            handles.
          </Card.Text>

          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/ankittyagi-webdeveloper/"
            target="_blank"
          >
            <Button variant="primary" className="navbar">
              linkedin
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Contact;
