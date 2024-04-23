import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ViewAppointments from "../components/ViewAppointments";

/**
 * BookedAppointments component is used to display the booked appointments
 * @returns {JSX.Element}
 */
const BookedAppointments = () => {
  const [date, onDateChange] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  let currentUser = JSON.parse(localStorage.getItem("user"));
  let format = { year: "numeric", month: "numeric", day: "numeric" };
  const setDate = (date) => {
    onDateChange(date);
  };
  useEffect(() => {
    fetch(
      `/api/appointments/date/${currentUser.id}/${new Date(
        date.toLocaleDateString("en-CA", format)
      ).getTime()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setAppointments(data);
        }
      });
  }, [date]);
  return (
    <>
      <div className="double-container-booked">
        <div className="double-container-calendar">
          <h1
            style={{
              marginBottom: "20px",
              fontWeight: "400",
              fontSize: "2rem",
              alignSelf: "flex-start",
            }}
          >
            Booked Appointments
          </h1>
          <Calendar onChange={onDateChange} value={date} />
        </div>
        {appointments && (
          <ViewAppointments
            event={appointments}
            appointments={appointments}
            date={date}
            setDate={setDate}
            edit={true}
          />
        )}
      </div>
    </>
  );
};

export default BookedAppointments;
