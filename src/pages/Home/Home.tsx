import { Link } from "react-router-dom"
import { ModalWarning } from "../../components/ModalWarning/ModalWarning";
import "./Home.scss"

const Home = () => {
  return (
    <div className="HomeContainer">
      <ModalWarning />
      <h1 className="HomeTitle">Olá, Luiz</h1>
      <h1 className="HomeTitle">Você não tem consultas marcadas</h1>
      <Link className="HomeButton" to="/home/make-appointment">Buscar Consulta</Link>
    </div>
  )
}

export { Home };