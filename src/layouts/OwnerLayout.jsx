import SideNavbar from "../components/SideNavbar";
import { BsCalendarCheck } from "react-icons/bs";
import { Outlet } from "react-router-dom";

/**
 * OwnerLayout component is used to display the owner layout
 * @returns {JSX.Element}
 */
const OwnerLayout = () => {
  return (
    <>
      <SideNavbar
        Navigation={[
          {
            title: "Available Events",
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
