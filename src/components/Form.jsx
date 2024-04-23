import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { triggerToaster } from "../Utility.js";
import { BsCalendarPlus } from "react-icons/bs";

/**
 * getTheDetails function is used to get the details of the selected week days
 * @param {object} event - event details
 * @returns {object} - selected week day details
 */
function getTheDetails(event) {
  const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  let selectedWeekDayDetails = [];
  week.forEach((key) => {
    if (event.selectWeek && event.selectWeek[key]) {
      selectedWeekDayDetails.push({
        ...event.selectWeek[key],
        selected: true,
        break: event.selectWeek[key].breakStart ? true : false,
      });
    } else {
      selectedWeekDayDetails.push({
        selected: false,
        startTime: "",
        endTime: "",
        break: false,
      });
    }
  });
  return selectedWeekDayDetails;
}

/**
 * Form component is used to display the form to add or edit the event
 * @param {object} props - event details
 * @returns {JSX.Element}
*/
const Form = ({ event = {}, eventUpdate, visible }) => {
  const [eventName, setEventName] = useState(
    event.eventName ? event.eventName : ""
  );
  const [startDate, setStartDate] = useState(
    event.startDate ? event.startDate : ""
  );
  const [endDate, setEndDate] = useState(event.endDate ? event.endDate : "");
  const [slotDuration, setSlotDuration] = useState(
    event.slotDuration ? event.slotDuration : ""
  );
  const format = { year: "numeric", month: "2-digit", day: "2-digit" };
  const [selectedWeekDayDetails, setSelectedWeekDayDetails] = useState(
    getTheDetails(event)
  );
  const [dayTimeVisible, setDayTimeVisible] = useState(
    selectedWeekDayDetails.map((day) => day.selected)
  );
  const [dayBreakVisible, setDayBreakVisible] = useState(
    selectedWeekDayDetails.map((day) => day.break)
  );
  const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const formEdit = (e) => {
    e.preventDefault();
    const weekDetails = {};
    week.forEach((key, index) => {
      if (selectedWeekDayDetails[index].selected) {
        weekDetails[key] = {
          startTime: selectedWeekDayDetails[index].startTime,
          endTime: selectedWeekDayDetails[index].endTime,
        };
        if (selectedWeekDayDetails[index].break) {
          weekDetails[key].breakStart =
            selectedWeekDayDetails[index].breakStart;
          weekDetails[key].breakEnd = selectedWeekDayDetails[index].breakEnd;
        }
      }
    });
    const data = {
      id: event.id,
      eventName: eventName,
      startDate: new Date(startDate).getTime(),
      endDate: new Date(endDate).getTime(),
      slotDuration: slotDuration,
      selectWeek: weekDetails,
      ownerId: JSON.parse(localStorage.getItem("user")).id,
    };
    if (Object.keys(event).length === 0) {
      fetch("/api/events", {
        method: Object.keys(event).length === 0 ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          eventUpdate(data);
          triggerToaster("success", "Event added successfully");
        } else {
          triggerToaster("error", "Event add failed");
        }
        visible();
      });
    } else {
      fetch(`/api/events/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(async (response) => {
        if (response.ok) {
          triggerToaster(
            "success",
            Object.keys(event).length === 0
              ? "Event added successfully"
              : "Event edited successfully"
          );
          eventUpdate(data);
          visible();
        } else {
          triggerToaster("error", "Event edit failed");
        }
      });
    }
  };
  return (
    <div className="inputDetails">
      <form id="form" onSubmit={formEdit} className="overlay-content">
        <BsXLg className="close-btn" onClick={visible} style={{fontSize: "20rem"}}/>
        <div className="align">
          <div className="right">
            <div className="title">
              <div>Event Details</div>
            </div>
            <div className="content-display">
              <div className="content-label">
                <label id="eventNameLabel">Event Name:</label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  placeholder="Name"
                  required=""
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
            </div>
            <div className="content-display">
              <div className="content-label">
                <label id="timeStartLabel">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required=""
                  value={new Date(startDate).toLocaleDateString(
                    "en-CA",
                    format
                  )}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>
            <div className="content-display">
              <div className="content-label">
                <label id="timeStartLabel">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  required=""
                  value={new Date(endDate).toLocaleDateString("en-CA", format)}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <span className="error-msg" id="error-msg-endDate" />
            </div>
            <div className="content-display">
              <div className="content-label">
                <label>Slot Duration:</label>
                <input
                  type="text"
                  placeholder="hh:mm"
                  min="00:00"
                  max="23:59"
                  pattern="[0-9]{2}:[0-9]{2}"
                  id="duration1"
                  name="slotDuration"
                  required=""
                  value={slotDuration}
                  onChange={(e) => setSlotDuration(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="content-label-week">
            <label id="timeStartLabel">Weekly Details:</label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {week.map((day, index) => {
                return (
                  <div key={day} className="weekElementDetail">
                    <input
                      className="messageCheckboxWeek"
                      type="checkbox"
                      id={`week${index}`}
                      name={`week${index}`}
                      defaultValue={day}
                      checked={selectedWeekDayDetails[index].selected}
                      onChange={(e) => {
                        setSelectedWeekDayDetails([
                          ...selectedWeekDayDetails.slice(0, index),
                          {
                            ...selectedWeekDayDetails[index],
                            selected: e.target.checked,
                          },
                          ...selectedWeekDayDetails.slice(index + 1),
                        ]);
                        if (e.target.checked) {
                          let temp = [...dayTimeVisible];
                          temp[index] = true;
                          setDayTimeVisible(temp);
                        } else {
                          let temp = [...dayTimeVisible];
                          temp[index] = false;
                          setDayTimeVisible(temp);
                        }
                      }}
                    />
                    <label className="week">
                      {day.substring(0, 1).toUpperCase() + day.substring(1)}
                    </label>
                    <br />
                    {dayTimeVisible[index] && (
                      <div className="viewTime">
                        <label className="timeEndLabel">Time:</label>
                        <div className="time-label">
                          <input
                            type="time"
                            placeholder="00:00"
                            min="00:00"
                            max="23:59"
                            pattern="[0-9]{2}:[0-9]{2}"
                            name={`timeStart${index}`}
                            id={`timeStart${index}`}
                            required=""
                            value={selectedWeekDayDetails[index].startTime}
                            onChange={(e) => {
                              setSelectedWeekDayDetails([
                                ...selectedWeekDayDetails.slice(0, index),
                                {
                                  ...selectedWeekDayDetails[index],
                                  startTime: e.target.value,
                                },
                                ...selectedWeekDayDetails.slice(index + 1),
                              ]);
                            }}
                          />
                          <input
                            type="time"
                            placeholder="00:00"
                            min="00:00"
                            max="23:59"
                            pattern="[0-9]{2}:[0-9]{2}"
                            name={`timeEnd${index}`}
                            id={`timeEnd${index}`}
                            required=""
                            value={selectedWeekDayDetails[index].endTime}
                            onChange={(e) => {
                              setSelectedWeekDayDetails([
                                ...selectedWeekDayDetails.slice(0, index),
                                {
                                  ...selectedWeekDayDetails[index],
                                  endTime: e.target.value,
                                },
                                ...selectedWeekDayDetails.slice(index + 1),
                              ]);
                            }}
                          />
                        </div>
                        <div className="break">
                          <input
                            className="messageCheckbox"
                            type="checkbox"
                            id={`weekBreak${index}`}
                            name={`break${index}`}
                            defaultValue={`break${index}`}
                            checked={selectedWeekDayDetails[index].break}
                            onChange={(e) => {
                              setSelectedWeekDayDetails([
                                ...selectedWeekDayDetails.slice(0, index),
                                {
                                  ...selectedWeekDayDetails[index],
                                  break: e.target.checked,
                                },
                                ...selectedWeekDayDetails.slice(index + 1),
                              ]);
                              if (e.target.checked) {
                                let temp = [...dayBreakVisible];
                                temp[index] = true;
                                setDayBreakVisible(temp);
                              } else {
                                let temp = [...dayBreakVisible];
                                temp[index] = false;
                                setDayBreakVisible(temp);
                              }
                            }}
                          />
                          <label className="breakLabel">Break:</label>
                        </div>
                        {dayBreakVisible[index] && (
                          <div className="breakTime-label">
                            <input
                              type="time"
                              placeholder="00:00"
                              min="00:00"
                              max="23:59"
                              pattern="[0-9]{2}:[0-9]{2}"
                              name={`breakStart${index}`}
                              id={`breakStart${index}`}
                              required=""
                              value={selectedWeekDayDetails[index].breakStart}
                              onChange={(e) => {
                                setSelectedWeekDayDetails([
                                  ...selectedWeekDayDetails.slice(0, index),
                                  {
                                    ...selectedWeekDayDetails[index],
                                    breakStart: e.target.value,
                                  },
                                  ...selectedWeekDayDetails.slice(index + 1),
                                ]);
                              }}
                            />
                            <input
                              type="time"
                              placeholder="00:00"
                              min="00:00"
                              max="23:59"
                              pattern="[0-9]{2}:[0-9]{2}"
                              name={`breakEnd${index}`}
                              id={`breakEnd${index}`}
                              required=""
                              value={selectedWeekDayDetails[index].breakEnd}
                              onChange={(e) => {
                                setSelectedWeekDayDetails([
                                  ...selectedWeekDayDetails.slice(0, index),
                                  {
                                    ...selectedWeekDayDetails[index],
                                    breakEnd: e.target.value,
                                  },
                                  ...selectedWeekDayDetails.slice(index + 1),
                                ]);
                              }}
                            />
                          </div>
                        )}
                        {!dayBreakVisible[index] && (
                          <div className="breakTime-label"></div>
                        )}
                      </div>
                    )}
                    {!dayTimeVisible[index] && (
                      <div style={{ width: "515px" }}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button title="submit" className="submit" type="submit" id="changeable">
          <span>
            {Object.keys(event).length === 0 ? "Add Event" : "Edit Event"}
          </span>
          <BsCalendarPlus style={{display: "inline", marginLeft: "10px", marginBottom: "3px"}}/>
        </button>
      </form>
    </div>
  );
};

export default Form;
