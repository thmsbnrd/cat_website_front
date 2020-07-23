import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "../style/AddCard.css";

function AddCard() {
  return (
    <div className="AddCard">
      <Form className="addCardForm">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Cat's name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" xs={4}>
            <Form.Label>Breed</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>American Shorthair</option>
              <option>Siamese</option>
              <option>Sphynx</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" xs={2}>
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" min="1" max="50" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formModalDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Tell us about your kitty"
            rows="3"
          />
        </Form.Group>

        <Form.Group controlId="formModalPicture">
          <Form.Label>Picture</Form.Label>
          <Form.Control
            type="text"
            placeholder="www.mykittypicture.com/kittycat.jpg"
          />
          <Form.Text className="text-muted">
            Add the URL of the picture.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddCard;
