import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Events from "../components/Events";
import Form from "../components/Form";
import noEvent from "../assets/no-event-bg.jpg";

const EventsPage = ({ user, addEvent, showAppointments, visible}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [event, setEvent] = useState({});
  const [eventsModified, setEventsModified] = useState(false);
  const setFormVisibleFalse = () => {
    setEvent({});
    setEditFormVisible(false);
  };
  const loadDetailsOfEvent = (eventToEdit) => {
    setEditFormVisible(true);
    setEvent(eventToEdit);
  };
  const eventUpdate = (event) => {
    if (event.id) {
      setEvents(events.map((e) => (e.id === event.id ? event : e)));
    } else {
      setEvents([...events, event]);
    }
    setEventsModified(true);
  };
  const eventDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setEventsModified(true);
  }
  useEffect(() => {
    const api_url =
      user.loginType.toLowerCase() === "user"
        ? `/api/events/user/${new Date().getTime()}`
        : `/api/events/${user.loginType.toLowerCase()}/${user.id}`;
    fetch(api_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setEvents(response);
        setLoading(false);
      });
  }, [eventsModified]);
  return (
    <>
      <div className="container-event" style={{ marginLeft: "4rem" }}>
        <div className="event-title">
          <div>Events</div>
          {addEvent && (
            <button
              className="addEvent"
              onClick={() => setEditFormVisible(true)}
            >
              Add Event
            </button>
          )}
        </div>
        <div className="event-container">
          {loading ? (
            <div style={{marginLeft: "45%", marginTop: "16%"}}>
            <ClipLoader size={150}/>
            </div>
          ) : events.length != 0 ? (
            events.map((event) => (
              <Events
                key={event.id}
                user={user}
                event={event}
                edit={loadDetailsOfEvent}
                eventDelete={eventDelete}
                showAppointments={showAppointments}
                visible={visible}
              />
            ))
          ) : (
            <img
              src={noEvent}
              height="50%"
              width="40%"
              style={{ position: "relative", top: "20%", left: "30%" }}
            />
          )}
        </div>
      </div>
      {editFormVisible && (
        <Form
          event={event}
          eventUpdate={eventUpdate}
          visible={setFormVisibleFalse}
        />
      )}
    </>
  );
};

export default EventsPage;
