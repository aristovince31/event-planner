import {
  BsPencilSquare,
  BsTrash,
  BsCalendar2,
  BsCalendar3,
  BsAlarm,
} from "react-icons/bs";
import Swal from "sweetalert2";

/**
 * Event component is used to display the event details
 * @param {object} user - user details
 * @param {object} event - event details
 * @param {function} edit - function to edit the event
 * @param {function} eventDelete - function to delete the event
 * @param {function} showAppointments - function to show the appointments
 * @param {function} visible - function to set the visibility
 * @returns {JSX.Element}
*/
const Event = ({
  user,
  event,
  edit,
  eventDelete,
  showAppointments,
  visible,
}) => {
  function deleteTheEvent(id) {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure want to delete the Event ${event.eventName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/events`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            ownerId: user.id,
          }),
        })
          .then(async (response) => {
            if (response.ok) {
              Swal.fire({
                title: "Deleted!",
                text: "Your details has been deleted.",
                icon: "success",
              });
              eventDelete(id);
            } else {
              Swal.fire({
                title: "Oops! Sorry",
                text: "Appointments exists for this event. Please delete the appointments first.",
                icon: "warning",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
  let format = { day: "numeric", month: "numeric", year: "numeric" },
    buttonCon = "";
  if (user.loginType === "Owner") {
    buttonCon = "Show Appointments";
  } else if (user.loginType === "User") {
    buttonCon = "Book Appointments";
  }
  const accessOperations = (id, user) => {
    if (user === "Owner") {
      return (
        <div className="actions">
          <BsPencilSquare
            className="editAvail"
            value={id}
            onClick={() => edit(event)}
            style={{ display: "inline", marginRight: "5px" }}
          ></BsPencilSquare>
          <BsTrash
            className="deleteAvail"
            value={id}
            onClick={() => deleteTheEvent(id)}
            style={{ display: "inline", marginRight: "5px" }}
          ></BsTrash>
        </div>
      );
    } else {
      return "";
    }
  };
  return (
    <>
      <div className="event-view">
        <div>
          <div className="event-name" style={{fontSize: "1.5rem"}}>{event.eventName}</div>
        </div>
        <div>
          <BsCalendar3 style={{ display: "inline", marginRight: "5px" }} />
          <div className="event-title-date inline">Event Date: </div>
          <div className="event-date inline">
            {new Date(event.startDate).toLocaleDateString("en-CA", format)} to {new Date(event.endDate).toLocaleDateString("en-CA", format)}
          </div>
        </div>
        <div>
          <BsAlarm style={{ display: "inline", marginRight: "5px" }} />
          <div className="event-title-time inline">Available Week: </div>
          <div className="event-time inline">
            {Object.keys(event.selectWeek)
              .map(
                (x) =>
                  x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase()
              )
              .join(", ")}
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap:"20px"}}>
          <button
            className="event-book-btn"
            value={event.id}
            onClick={() => {
              showAppointments(event);
              visible();
            }}
          >
            {buttonCon}
          </button>
          {accessOperations(event.id, user.loginType)}
        </div>
      </div>
    </>
  );
};

export default Event;
