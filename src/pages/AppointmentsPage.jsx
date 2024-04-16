import { useEffect, useState } from "react";
import CalendarEvent from "../components/CalendarEvent";
import ViewAppointments from "../components/ViewAppointments";

const AppointmentsPage = ({ event, visible, edit }) => {
  const [value, onChange] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  let format = { year: "numeric", month: "numeric", day: "numeric" };
  const setDate = (date) => {
    onChange(date);
  };
  useEffect(() => {
    let url = edit
      ? `api/appointments/date/${event.id}/${new Date(
          value.toLocaleDateString("en-CA", format)
        ).getTime()}`
      : `api/events/timeSlots/${event.id}/${new Date(
          value.toLocaleDateString("en-CA", format)
        ).getTime()}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setAppointments(data);
        }
      });
  }, [value]);
  return (
    <>
      <button className="back-appointments" onClick={visible}>
        Back
      </button>
      <div className="double-container-event">
        <CalendarEvent event={event} value={value} onChange={onChange} />
        {appointments && (
          <ViewAppointments
            event={event}
            appointments={appointments}
            setDate={setDate}
            date={value}
            edit={edit}
          />
        )}
      </div>
    </>
  );
};

export default AppointmentsPage;
