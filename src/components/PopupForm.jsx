import React from "react";
import { BsArrowRightShort, BsXLg } from "react-icons/bs";
import { useState } from "react";
import { triggerToaster } from "../Utility.js";

/**
 * PopupForm component is used to display the form to book the appointment
 * @param {object} setVisible - function to set the visibility of the form
 * @param {object} edit - boolean value to check whether to edit or not
 * @param {object} data - appointment details
 * @param {object} setDate - function to set the date
 * @param {object} date - date value
 * @returns {JSX.Element}
 */
const PopupForm = ({ setVisible, edit, data, setDate, date }) => {
  const [name, setName] = useState(data.personName ? data.personName : "");
  const [phone, setPhone] = useState(data.personPhone ? data.personPhone : "");
  let format = { year: "numeric", month: "numeric", day: "numeric" };
  let currentUser = JSON.parse(localStorage.getItem("user"));
  const submitData = (e) => {
    e.preventDefault();
    let temp = {
      eventId: data.eventId,
      userId: currentUser.id,
      ownerId: data.ownerId,
      appointmentDate: new Date(
        date.toLocaleDateString("en-CA", format)
      ).getTime(),
      personName: name,
      personPhone: phone,
      appointmentId: data.appointmentId,
      timeSlot: data.timeSlot,
      eventName: data.eventName,
    };
    fetch("/api/appointments", {
      method: edit ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    }).then((response) => {
      if (response.ok) {
        setVisible(false);
        setDate(new Date(date));
        triggerToaster(
          "success",
          edit
            ? "Appointment Updated Successfully"
            : "Appointment Booked Successfully"
        );
      } else {
        triggerToaster("warning", "Appointment Booking Failed");
      }
    });
  };
  return (
    <>
      <div className="inputDetails">
        <form id="form" className="overlay-content1" onSubmit={submitData}>
          <div className="title">
            <label>Required Information</label>
            <BsXLg
              onClick={() => setVisible(false)}
              style={{ display: "inline", marginLeft: "40%" }}
            />
          </div>
          <div className="content-label-timeSlot">
            <label>Time Slot:</label>
            <p id="timeSlotView">{data.timeSlot}</p>
          </div>
          <div className="content-label">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="content-label">
            <label>Phone:</label>
            <input
              type="tel"
              placeholder="Phone"
              id="phone"
              pattern="[0-9]{10}"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            title="submit"
            className="submit"
            type="submit"
            style={{
              color: "8f01ed",
              fontSize: "1.5rem",
              border: "1px solid #8f01ed",
              borderRadius: "5px",
            }}
          >
            <BsArrowRightShort />
          </button>
        </form>
      </div>
    </>
  );
};

export default PopupForm;
