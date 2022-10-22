import { Link } from "react-router-dom"

import { Logo } from "../../assets/Logo";

import "./Header.scss"

const Header = () => {
    return (
        <header className="Header">
            <Link className="Header_logo" to="/home">
                <Logo />
            </Link>

            <nav className="Header_nav">
                <ul className = "Header_list">
                    <li className="Header_list-item">
                        <Link className="Header_link" to="/home">Home</Link>
                    </li>
                    <li className="Header_list-item">
                        <Link className="Header_link" to="/make-appointment">Marcar Consulta</Link>
                    </li>
                    <li className="Header_list-item">
                        <Link className="Header_link" to="/fast-appointment">Consulta Rápida</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )    
}

export { Header };