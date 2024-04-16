import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ViewAppointments from "../components/ViewAppointments";

const BookedAppointments = () => {
  const [value, onChange] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  let currentUser = JSON.parse(localStorage.getItem("user"));
  let format = { year: "numeric", month: "numeric", day: "numeric" };
  const setDate = (date) => {
    onChange(date);
  };
  useEffect(() => {
    fetch(
      `/api/appointments/date/${currentUser.id}/${new Date(
        value.toLocaleDateString("en-CA", format)
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
  }, [value]);
  return (
    <>
      <div className="double-container-booked">
        <div className="double-container-calendar">
          <h1 style={{ marginBottom: "20px", textDecoration: "bold" }}>
            Booked Appointments
          </h1>
          <Calendar onChange={onChange} value={value} />
        </div>
        {appointments && (
          <ViewAppointments
            event={appointments}
            appointments={appointments}
            date={value}
            setDate={setDate}
            edit={true}
          />
        )}
      </div>
    </>
  );
};

export default BookedAppointments;
