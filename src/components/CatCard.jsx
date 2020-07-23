import React from "react";
import { Card, Button } from "react-bootstrap";
import "../style/CatCard.css";

function CatCard({ data, deletecard }) {
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
            onClick={() => deletecard(data.id)}
          >
            Delete
          </Button>{" "}
          <Button variant="outline-dark" size="sm" disabled>
            Message
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CatCard;
