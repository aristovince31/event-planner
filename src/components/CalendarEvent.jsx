import Calendar from "react-calendar";
import { BsCalendar2, BsCalendar3, BsAlarm } from "react-icons/bs";

/**
 * CalendarEvent component is used to display the event details
 * @param {object} event - event details
 * @param {object} value - date value
 * @param {function} onChange - function to change the date
 * @returns {JSX.Element}
*/
function CalendarEvent({ event, value, onChange }) {
  let format = { day: "numeric", month: "numeric", year: "numeric" };
  return (
    <div className="calendar-appointments">
      <Calendar minDate={new Date()} onChange={onChange} value={value} />
      <div
        style={{
          border: "thin solid #878895",
          width: "100%",
          marginBlock: "2rem",
          minHeight: "370px",
          borderRadius: "5px",
          height: "57vh"
        }}
      >
        <div style={{backgroundColor: "#8f01ed", width: "100%", height: "40px", borderRadius: "5px"}}>
          <div style={{marginLeft: "40%", paddingTop: "6px"}}>
            ⚪⚪⚪
          </div>
        </div>
        <div style={{ marginTop: "10px", marginLeft: "20px", marginRight: "20px", padding: "5px"}}>
          <div style={{ marginBlock: "20px" }}>
            <BsCalendar2 style={{ display: "inline", marginRight: "5px" }} />
            <div
              className="event-title-name"
              style={{ display: "inline", marginRight: "5px" }}
            >
              Event Name:
            </div>
            <div
              className="event-name"
              style={{ display: "inline", marginRight: "5px" }}
            >
              {event.eventName}
            </div>
          </div>
          <div style={{ marginBlock: "20px" }}>
            <BsCalendar3 style={{ display: "inline", marginRight: "5px" }} />
            <div
              className="event-title-date"
              style={{ display: "inline", marginRight: "5px" }}
            >
              Event Date:
            </div>
            <div
              className="event-date"
              style={{ display: "inline", marginRight: "5px" }}
            >
              {new Date(event.startDate).toLocaleDateString("en-CA", format)} to{" "}
              {new Date(event.endDate).toLocaleDateString("en-CA", format)}
            </div>
          </div>
          <div style={{ marginBlock: "20px" }}>
            <BsAlarm style={{ display: "inline", marginRight: "5px" }} />
            <div
              className="event-title-time"
              style={{ display: "inline", marginRight: "5px" }}
            >
              Available Week:
            </div>
            <div
              className="event-time"
              style={{ display: "inline", marginRight: "5px" }}
            >
              {Object.keys(event.selectWeek)
                .map(
                  (x) =>
                    x.substring(0, 1).toUpperCase() +
                    x.substring(1).toLowerCase()
                )
                .join(", ")}
            </div>
          </div>
        </div>
        <div>
          <table
            className="eventTable"
          >
            <thead>
              <tr>
                <th>Week</th>
                <th>Time</th>
                <th>Break</th>
              </tr>
            </thead>
            {Object.keys(event.selectWeek).map((week) => {
              return (
                <tbody key={week}>
                  <tr>
                    <td>
                      {week.substring(0, 1).toUpperCase() +
                        week.substring(1).toLowerCase()}
                    </td>
                    <td>
                      {event.selectWeek[week].startTime} -{" "}
                      {event.selectWeek[week].endTime}
                    </td>
                    <td>
                      {event.selectWeek[week].breakTime} -{" "}
                      {event.selectWeek[week].breakTime}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default CalendarEvent;
