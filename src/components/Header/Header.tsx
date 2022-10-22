import { Logo } from "../../assets/Logo";

import "./Header.scss"

const Header = () => {
    return (
        <header className="Header">
            <a className="Header_logo" href="#">
                <Logo />
            </a>

            <nav className="Header_nav">
                <ul className = "Header_list">
                    <li className="Header_list-item">
                        <a className="Header_link" href="#">Home</a>
                    </li>
                    <li className="Header_list-item">
                        <a className="Header_link" href="#">Marcar Consulta</a>
                    </li>
                    <li className="Header_list-item">
                        <a className="Header_link" href="#">Consulta Rápida</a>
                    </li>
                </ul>
            </nav>
        </header>
    )    
}

export { Header };