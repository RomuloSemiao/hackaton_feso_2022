import { BrowserRouter } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RoutesContainer } from "../RoutesContainer/RoutesContainer";
import { Router } from "../../routes/Router";
import { AuthProvider } from "../../contexts/AuthContext";

const App = () =>  {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
          <RoutesContainer>
            <Router />
          </RoutesContainer>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export { App };
