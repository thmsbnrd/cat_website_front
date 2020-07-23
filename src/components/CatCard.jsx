import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "../style/CatCard.css";

function CatCard({ data, index, removeCat }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleSubmit = () => {
    removeCat(index);
    setShow(false);
  };
  return (
    <div className="CatCard">
      <Card className="">
        <Card.Img variant="top" src={data.image} alt={data.imageDescription} />
        <Card.Body>
          <Card.Title>
            {data.name}{" "}
            <span role="img" aria-label={data.emojiLabel}>
              {data.emoji}
            </span>
            <br />
            <small class="text-muted">
              {data.breed}, {data.age}
            </small>
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Button variant="outline-primary" size="sm">
            Edit
          </Button>{" "}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => setShow(true)}
          >
            Delete
          </Button>{" "}
          <Button variant="outline-dark" size="sm" disabled>
            Message
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>
            You're about to delete {data.name}, <br /> are you sure ?
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button variant="danger" onClick={handleSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CatCard;
