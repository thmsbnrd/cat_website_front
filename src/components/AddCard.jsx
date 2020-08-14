import React, { useState, useReducer } from "react";
import axios from "axios";
import { Form, Button, Col, Modal } from "react-bootstrap";
import "../style/AddCard.css";

const AddCard = () => {
  const [show, setShow] = useState(false);

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      age: 1,
      image: "",
      description: "",
      breed: "",
    }
  );

  const resetState = {
    name: "",
    age: 1,
    image: "",
    description: "",
    breed: "",
  };

  const handleClose = () => {
    setUserInput(resetState);
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ [name]: value });
  };

  const AddCat = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3000/api/cats/",
      data: userInput,
    })
      .then((response) => setShow(true))
      .catch();
  };

  // const defaultImage =
  //   "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  return (
    <div className="AddCard">
      <Form className="addCardForm">
        <h1>Add a brand new cat to the list!</h1>
        <br />
        {/* <div className="Avatar">
          {userInput.photo ? (
            <img src={userInput.image} alt="avatar" />
          ) : (
            <img src={defaultImage} alt="avatar" />
          )}
        </div> */}
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              value={userInput.name}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" xs={4}>
            <Form.Label>Breed</Form.Label>
            <Form.Control
              as="select"
              name="breed"
              defaultValue="Choose..."
              onChange={handleChange}
              value={userInput.breed}
            >
              <option>Choose...</option>
              <option>American Shorthair</option>
              <option>Siamese</option>
              <option>Sphynx</option>
              <option>Main Coon</option>
              <option>Cararal</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" xs={2}>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              min="1"
              max="50"
              onChange={handleChange}
              value={userInput.age}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formModalDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Tell us about your kitty"
            rows="3"
            onChange={handleChange}
            value={userInput.description}
          />
        </Form.Group>

        <Form.Group controlId="formModalPicture">
          <Form.Label>Picture</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="www.mykittypicture.com/kittycat.jpg"
            onChange={handleChange}
            value={userInput.image}
          />
          <Form.Text className="text-muted">
            Add the URL of the picture.
          </Form.Text>
        </Form.Group>

        <Button variant="success" type="submit" onClick={AddCat}>
          Submit
        </Button>
      </Form>
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>{userInput.name} has been added to party!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCard;
