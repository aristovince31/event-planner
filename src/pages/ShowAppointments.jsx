import React from "react";
import { useState } from "react";
import EventsPage from "../pages/EventsPage";
import AppointmentsPage from "../pages/AppointmentsPage";

const ShowAppointments = ({ edit }) => {
  const [showAppointments, setShowAppointments] = useState({});
  const setShowAppointmentsInEvent = (event) => {
    setShowAppointments(event);
  };
  const [visible, setVisible] = useState(false);
  const changeVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      {!visible ? (
        <EventsPage
          user={JSON.parse(localStorage.getItem("user"))}
          addEvent={edit}
          showAppointments={setShowAppointmentsInEvent}
          visible={changeVisible}
        />
      ) : (
        <AppointmentsPage
          event={showAppointments}
          visible={changeVisible}
          edit={edit}
        />
      )}
    </>
  );
};

export default ShowAppointments;
