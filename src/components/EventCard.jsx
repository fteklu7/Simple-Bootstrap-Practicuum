import { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function EventCard({ event }) {
  const [going, setGoing] = useState(false);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Badge bg="primary" className="mb-2">{event.category}</Badge>
        {going && <Badge bg="success" className="mb-2 ms-2">Going</Badge>}
        <Card.Title>{event.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {event.date} - {event.location}
        </Card.Subtitle>
        <Card.Text>{event.description}</Card.Text>
        <Button
          variant={going ? "outline-danger" : "primary"}
          onClick={() => setGoing(!going)}
        >
          {going ? "Cancel" : "I'm Going"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
