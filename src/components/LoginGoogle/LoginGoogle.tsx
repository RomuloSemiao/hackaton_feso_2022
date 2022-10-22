import { Link } from "react-router-dom"

import { GoogleIcon } from "../../assets/GoogleIcon";

import "./LoginGoogle.scss";

const LoginGoogle = () => {
    return (
        <div className="LoginGoogle">
            <h1 className="LoginGoogle_title">Seja bem vindo ao E-Health</h1>

            <Link className="LoginGoogle_button" to="/home">
                <GoogleIcon />
            </Link>
        </div>
    )
}

export { LoginGoogle }
