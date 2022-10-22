import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RoutesContainer } from "../RoutesContainer/RoutesContainer";
import { Router } from "../../routes/Router";

const App = () =>  {
  return (
    <>
      <Header />
        <RoutesContainer>
          <Router />
        </RoutesContainer>
      <Footer />
    </>
  );
}

export { App };
