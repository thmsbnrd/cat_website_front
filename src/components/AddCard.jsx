import React from "react";
import { Form, Button } from "react-bootstrap";
import "../style/AddCard.css";

function AddCard() {
  return (
    <div className="AddCard">
      <Form className="addCardForm">
        <Form.Group controlId="formModalName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter cat's name" />
        </Form.Group>
        <Form.Group controlId="formModalName">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="Dropdown breed" />
        </Form.Group>
        <Form.Group controlId="formModalName">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter cat's name" />
        </Form.Group>
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
