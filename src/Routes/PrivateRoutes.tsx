import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = JSON.parse(localStorage.getItem("token") as string);

  return token ? <Outlet /> : <Navigate to="/" />
}

export { PrivateRoutes };