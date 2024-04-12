import { useEffect, useState } from "react";
import CalendarEvent from "../components/CalendarEvent";
import ViewAppointments from "../components/ViewAppointments";

const AppointmentsPage = ({event, visible, edit}) => {
  const [value, onChange] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  let format = {year: 'numeric', month: 'numeric', day: 'numeric'};
  let currentUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    let url = edit ? `api/appointments/date/${currentUser.id}/${new Date(value.toLocaleDateString('en-CA', format)).getTime()}` : 
    `api/events/timeSlots/${event.id}/${new Date(value.toLocaleDateString('en-CA', format)).getTime()}`;
    fetch(
      url,
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
     <button className="back" onClick={visible} style={{marginLeft: "7rem", marginBlock: "1rem", textDecoration: "underline"}}>Back</button>
      <div
        style={{
          marginLeft: "7rem",
          display: "flex",
          flexDirection: "row",
          height: "80vh",
        }}
      >
      <CalendarEvent event={event} value={value} onChange={onChange} />
      <ViewAppointments event ={event} appointments={appointments} date={value} edit={edit}/>
    </div>
    </>
  );
};

export default AppointmentsPage;
