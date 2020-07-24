import React, { useEffect, useState, useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Button, Col, Modal } from "react-bootstrap";
import "../style/AddCard.css";

function UpdateCard({ match }) {
  const { id } = match.params;

  const [show, setShow] = useState(false);

  // const [cat, setCat] = useState([]);
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

  const getCatData = () => {
    const url = `http://localhost:3000/api/cats/${id}`;
    axios
      .get(url)
      .then((response) => response.data[0])
      .then((data) => {
        setUserInput(data);
      })
      .catch();
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/cats/${Number(id)}`;
    axios
      .put(url, userInput)
      .then((response) => response.data[0])
      .catch((event) => {
        alert(`Error while updating cat profile : ${event.message}`);
      });
  };

  useEffect(() => {
    getCatData();
  }, []);

  return (
    <div className="UpdateCard">
      <Form className="addCardForm" onSubmit={handleSubmit}>
        <h1>{`Update ${userInput.name} informations`}</h1>
        <br />
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

        <Button variant="primary" type="submit" onClick={() => setShow(true)}>
          Update
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
          <h4>{userInput.name} has been updated!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button href={`/`} variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

UpdateCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default UpdateCard;
