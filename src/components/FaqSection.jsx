import Accordion from "react-bootstrap/Accordion";

function FaqSection() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who can go to these events?</Accordion.Header>
        <Accordion.Body>All students are welcome to attend.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I need to bring anything?</Accordion.Header>
        <Accordion.Body>Just bring your student ID.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are the events free?</Accordion.Header>
        <Accordion.Body>Yes, every event on this page is free.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FaqSection;
