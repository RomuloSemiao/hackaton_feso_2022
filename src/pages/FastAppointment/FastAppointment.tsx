import "./FastAppointment.scss";

const FastAppointment = () => {
  return (
    <div className="FastAppointment__wrapper">
      <p className="FastAppointment__title">Consulta Rapida</p>
      <small className="FastAppointment__warnning">*  Atualize as suas medidas caso estejam erradas</small>
      <form className="FastAppointment__form">
        <input className="FastAppointment__input" type="text" placeholder="Peso" />
        <input className="FastAppointment__input" type="text" placeholder="Altura" />
        <input className="FastAppointment__input" type="text" placeholder="Idade" />
        <input className="FastAppointment__search" type="text" placeholder="Sintomas" />

        <div className="FastAppointment__sendContainer">
          <button className="FastAppointment__send" type="submit">ENVIAR</button>
          <div></div>
        </div>
      </form>
    </div>
  )
}

export { FastAppointment };
