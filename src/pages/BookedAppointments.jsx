import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ViewAppointments from "../components/ViewAppointments";

const BookedAppointments = () => {
  const [value, onChange] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  let currentUser = JSON.parse(localStorage.getItem("user"));
  let format = {year: 'numeric', month: 'numeric', day: 'numeric'};
  useEffect(() => {
    fetch(
      `/api/appointments/date/${currentUser.id}/${new Date(value.toLocaleDateString('en-CA', format)).getTime()}`,
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
      <div
        style={{
          marginLeft: "7rem",
          display: "flex",
          flexDirection: "row",
          height: "80vh",
        }}
      >
        <div style={{width: "40%", marginTop: "15%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <h1 style={{marginBottom : "20px", textDecoration: "bold"}}>Booked Appointments</h1>
          <Calendar onChange={onChange} value={value} />
        </div>
        <ViewAppointments event= {appointments} appointments={appointments} date={value} edit={true}/>
      </div>
    </>
  );
};

export default BookedAppointments;
