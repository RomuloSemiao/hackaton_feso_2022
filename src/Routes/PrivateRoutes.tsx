import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);

  return user ? <Outlet /> : <Navigate to="/" />
}

export { PrivateRoutes };