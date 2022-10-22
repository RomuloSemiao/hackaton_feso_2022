import { Routes, Route } from "react-router-dom";
import { Cadastre } from "../pages/Cadastre/Cadastre";
import { FastAppointment } from "../pages/FastAppointment/FastAppointment";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { MakeAppointment } from "../pages/MakeAppointment/MakeAppointment";
import { PrivateRoutes } from "./PrivateRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastre" element={<Cadastre />} />
      <Route path="/home" element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/make-appointment" element={<MakeAppointment />} />
        <Route path="/home/fast-appointment" element={<FastAppointment />} />
      </Route>
    </Routes>
  )
}

export { Router };
