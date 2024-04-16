import SideNavbar from "../components/SideNavbar";
import { BsCalendarCheck } from "react-icons/bs";
import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <>
      <SideNavbar
        Navigation={[
          {
            title: "Ongoing Events",
            path: "/owner",
            icon: <BsCalendarCheck />,
          },
        ]}
      />
      <Outlet />
    </>
  );
};

export default OwnerLayout;
