import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FastAppointment } from "../pages/FastAppointment/FastAppointment";
import { Home } from "../pages/Home/Home";
import { MakeAppointment } from "../pages/MakeAppointment/MakeAppointment";
import { PrivateRoutes } from "./PrivateRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PrivateRoutes />}>
          <Route path="/add" element={<MakeAppointment />} />
          <Route path="/add" element={<FastAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router };
