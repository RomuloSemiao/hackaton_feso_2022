import { GoogleIcon } from "../../assets/GoogleIcon";

import "./Login.scss";

const Login = () => {
    return (
        <div className="Login">
            <h1 className="Login_title">Seja bem vindo ao E-Health</h1>

            <a className="Login_button" href="#">
                <GoogleIcon />
            </a>
        </div>
    )
}