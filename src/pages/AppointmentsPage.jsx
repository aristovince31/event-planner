import { useEffect, useState } from "react";
import CalendarEvent from "../components/CalendarEvent";
import ViewAppointments from "../components/ViewAppointments";

/**
 * AppointmentsPage component is used to display the appointments page
 * @param {object} event - event details
 * @param {function} visible - function to set the visibility
 * @param {boolean} edit - boolean value to check whether to edit or not
 * @returns {JSX.Element}
 */
const AppointmentsPage = ({ event, visible, edit }) => {
  const [date, onDateChange] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  let format = { year: "numeric", month: "numeric", day: "numeric" };
  const setDate = (date) => {
    onDateChange(date);
  };
  useEffect(() => {
    let url = edit
      ? `api/appointments/date/${event.id}/${new Date(
          date.toLocaleDateString("en-CA", format)
        ).getTime()}`
      : `api/events/timeSlots/${event.id}/${new Date(
          date.toLocaleDateString("en-CA", format)
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
  }, [date]);
  return (
    <>
      <button className="back-appointments" onClick={visible}>
        Back
      </button>
      <div className="double-container-event">
        <CalendarEvent event={event} value={date} onChange={onDateChange} />
        {appointments && (
          <ViewAppointments
            event={event}
            appointments={appointments}
            setDate={setDate}
            date={date}
            edit={edit}
          />
        )}
      </div>
    </>
  );
};

export default AppointmentsPage;
