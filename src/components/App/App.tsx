import { BrowserRouter } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RoutesContainer } from "../RoutesContainer/RoutesContainer";
import { Router } from "../../routes/Router";

const App = () =>  {
  return (
    <BrowserRouter>
      <Header />
        <RoutesContainer>
          <Router />
        </RoutesContainer>
      <Footer />
    </BrowserRouter>
  );
}

export { App };
