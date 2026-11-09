import Container from "react-bootstrap/Container";
import EventCard from "./components/EventCard.jsx";
import FaqSection from "./components/FaqSection.jsx";
import { eventsData } from "./data/eventsData.js";

function App() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Campus Events Board</h1>

      <h2 className="mb-3">Upcoming Events</h2>
      {eventsData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <h2 className="mt-5 mb-3">FAQ</h2>
      <FaqSection />
    </Container>
  );
}

export default App;
