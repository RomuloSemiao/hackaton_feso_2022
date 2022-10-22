import "./CadForm.scss";

const CadForm = () => {
    return (
        <div className="CadForm">
            <h2 className="CadForm_title">Crie sua conta para ser atendido da melhor forma :)</h2>

            <form className="CadForm_formBox" action="submit">
                <div className="CadForm_boxInput">
                    <input className="CadForm_input" type="text" placeholder="Nome" />

                    <input className="CadForm_input" type="text" placeholder="Sobrenome" />

                    <input className="CadForm_input" type="text" placeholder="Sexo" />

                    <input className="CadForm_input" type="number" placeholder="Idade" />

                    <input className="CadForm_input" type="number" placeholder="Altura" />

                    <input className="CadForm_input" type="number" placeholder="Peso" />

                    <input className="CadForm_input" type="email" placeholder="E-mail" />

                    <input className="CadForm_input" type="password" placeholder="Senha" />

                    <input className="CadForm_input" type="password" placeholder="Confirmar Senha" />
                </div>

                <button className="CadForm_button" type="submit">
                    CRIAR CONTA
                </button>
            </form>
        </div>
    )
};

export { CadForm };