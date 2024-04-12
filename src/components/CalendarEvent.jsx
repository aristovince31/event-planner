import Calendar from "react-calendar";
import { BsCalendar2, BsCalendar3, BsAlarm } from "react-icons/bs";

function CalendarEvent({ event, value, onChange}) {
  let format = { day: "numeric", month: "numeric", year: "numeric" };
  return (
      <div style={{width: "39%"}}>
      <Calendar onChange={onChange} value={value}/>
      <div
        style={{
          border: "thin solid #878895",
          width: "100%",
          padding: "5px",
          marginBlock: "2rem",
          minHeight: "370px",
          borderRadius: "5px",
        }}
      >
        <div style={{margin: "20px"}}>
          <div style={{marginBlock: "20px"}}>
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
          <div style={{marginBlock: "20px"}}>
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
              {new Date(event.startDate).toLocaleDateString("en-CA", format)} to {new Date(event.endDate).toLocaleDateString("en-CA", format)}
            </div>
          </div>
          <div style={{marginBlock: "20px"}}>
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
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
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
