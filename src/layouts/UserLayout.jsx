import SideNavbar from "../components/SideNavbar";
import { BsCalendarCheck } from "react-icons/bs";
import { Outlet } from "react-router-dom";

/**
 * UserLayout component is used to display the user layout
 * @returns {JSX.Element}
 */
const UserLayout = () => {
  return (
    <>
      <SideNavbar
        Navigation={[
          {
            title: "Book Appointments",
            path: "/user",
            icon: <BsCalendarCheck />,
          },
          {
            title: "Booked Appointments",
            path: "/user/bookedEvent",
            icon: <BsCalendarCheck />,
          },
        ]}
      />
      <Outlet />
    </>
  );
};

export default UserLayout;
