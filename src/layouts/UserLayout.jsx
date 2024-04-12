import SideNavbar from "../components/SideNavbar";
import { BsCalendarCheck } from "react-icons/bs";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <SideNavbar
        Navigation={[
          { title: "Book Events", path: "/user", icon: <BsCalendarCheck /> },
          {
            title: "Booked Events",
            path: "/user/bookedEvent",
            icon: <BsCalendarCheck />,
          },
        ]}
      />
      <Outlet/>
    </>
  );
};

export default UserLayout;
