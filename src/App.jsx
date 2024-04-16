import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Support from "./pages/Support";
import Service from "./pages/Service";
import LoginSignUp from "./pages/LoginSignUp";
import ForgotPassword from "./components/ForgotPassword";
import UserLayout from "./layouts/UserLayout";
import OwnerLayout from "./layouts/OwnerLayout";
import BookedAppointments from "./pages/BookedAppointments";
import ShowAppointments from "./pages/ShowAppointments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="support" element={<Support />} />
        <Route path="service" element={<Service />} />
        <Route path="login" element={<LoginSignUp />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<ShowAppointments edit={false} />} />
        <Route path="bookedEvent" element={<BookedAppointments />} />
      </Route>
      <Route path="/owner" element={<OwnerLayout />}>
        <Route index element={<ShowAppointments edit={true} />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
