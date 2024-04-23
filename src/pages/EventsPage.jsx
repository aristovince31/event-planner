import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Event from "../components/Event";
import Form from "../components/Form";
import noEvent from "../assets/no-event-bg.jpg";

/**
 * EventsPage component is used to display the events page
 * @param {object} user - user details
 * @param {function} addEvent - function to add the event
 * @param {function} showAppointments - function to show the appointments
 * @param {boolean} visible - boolean value to check whether to show or not
 * @returns {JSX.Element}
 */
const EventsPage = ({ user, addEvent, showAppointments, visible }) => {
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
  };
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
      <div className="container-event">
        <div style={{ marginLeft: "25px" }}>
          <span className="relative top-7 text-gray-900 left-10 text-xl">
            BookItNow
          </span>
          <img
            className="h-8 w-auto"
            src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design-1068x974.png"
            alt=""
          />
        </div>
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
            <div style={{ marginLeft: "45%", marginTop: "16%" }}>
              <ClipLoader size={150} />
            </div>
          ) : events.length != 0 ? (
            events.map((event) => (
              <Event
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
