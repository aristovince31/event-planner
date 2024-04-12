import { BsPencilSquare, BsTrash, BsCalendarPlus } from "react-icons/bs";
import PopupForm from "./PopupForm";
import { useState } from "react";
import { reduceEventName } from "../Utility.js";
import Swal from "sweetalert2";

const ViewAppointments = ({ event, appointments, date, edit }) => {
  const [visible, setVisible] = useState(false);
  const changeVisible = (value) => {
    setVisible(value);
  };
  let format = {year: 'numeric', month: 'numeric', day: 'numeric'};
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [data, setData] = useState(
    event.id
      ? {
          eventId: event.id,
          userId: event.userId,
          ownerId: event.ownerId,
          eventDate: new Date(date.toLocaleDateString('en-CA', format)).getTime(),
          personName: event.personName ? event.personName : "",
          personPhone: event.personPhone ? event.personPhone : "",
        }
      : {}
  );
  const deleteAppointment = (timeSlot) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure want to delete the Event ${timeSlot}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/appointments`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({date: new Date(new Date(date.toLocaleDateString('en-CA', format))).getTime(), timeSlot: timeSlot}),
        }).then(response => {
          if (response.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Your details has been deleted.",
              icon: "success",
            });
          }
          else
          {
            Swal.fire({
              title: "Error!",
              text: "Error in deleting the details",
              icon: "error",
            });
          }
        });
      }
    });
  }

  const actions = (id) => {
    if (edit) {
      return (
        <div className="actions">
          <button
            className="editAppoint"
            onClick={() => {
              setData({ ...appointments[id], timeSlot: appointments[id].timeSlot });
              setVisible(true);
            }}
          >
            <BsPencilSquare />
          </button>
          <button className="deleteAppoint" onClick={() => {deleteAppointment(appointments[id].timeSlot)}}>
            <BsTrash />
          </button>
        </div>
      );
    } else {
      return (
        <div className="actions">
          <button
            onClick={() => {
              setData({ ...data, timeSlot: appointments[id] });
              setVisible(true);
            }}
          >
            <BsCalendarPlus />
          </button>
        </div>
      );
    }
  };
  return (
    <>
      <div className="view">
        <div className="today-date">
          <div className="event-day">{week[date.getDay()]}</div>
          <div className="event-date">{`${date.getDate()} ${
            months[date.getMonth()]
          } ${date.getFullYear()}`}</div>
        </div>
        <div className="down">
          <div className="viewSlots">
            {appointments.map((appointment, index) => {
                  return (
                    <div className="appointmentSlot" key={index}>
                      <div>
                        <div>Time</div>
                        <div>: {edit ? appointment.timeSlot : appointment}</div>
                      </div>
                      {
                        edit && (                      
                        <div>
                          <div>Name</div>
                          <div>: {reduceEventName(appointment.personName)}</div>
                        </div>)
                      }
                      {actions(index)}
                    </div>
                  );
                })
              }
          </div>
        </div>
      </div>
      {visible && (
        <PopupForm setVisible={changeVisible} edit={edit} data={data} date={date}/>
      )}
    </>
  );
};

export default ViewAppointments;
