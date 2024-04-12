import React from "react";
import {useState} from "react";
import EventsPage from "../pages/EventsPage";
import AppointmentsPage from "../pages/AppointmentsPage";

const ShowAppointments = ({edit}) => {
  const [showAppointments, setShowAppointments] = useState({});
  const showAppointmentsInEvent = (event) => {
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
          addEvent={true}
          showAppointments={showAppointmentsInEvent}
          visible={changeVisible}
        />
      ) : (
        <AppointmentsPage event={showAppointments} visible={changeVisible} edit={edit}/>
      )}
    </>
  );
};

export default ShowAppointments;
