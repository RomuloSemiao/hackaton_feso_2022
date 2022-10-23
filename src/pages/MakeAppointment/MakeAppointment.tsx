import { useState } from "react";
import { CrossPink } from "../../assets/CrossPink";
import { ModalTimetable } from "../../components/ModalTimetable/ModalTimetable";

import "./MakeAppointment.scss"

const MakeAppointment = () => {
  const [modal, setModal] = useState(false)
  
  function closeModal() {
    setModal(false)
  }

  return (
    <div className="MakeAppointment">
      <div className="MakeAppointment_card" onClick={() => setModal(true)}>
        <ul className="MakeAppointment_list">
          <li className="MakeAppointment_item">Dra. Maria</li>
          <li className="MakeAppointment_item">Dentista</li>
          <li className="MakeAppointment_item">Seg - Sex</li>
          <li className="MakeAppointment_item">12h às 18h</li>
          <li className="MakeAppointment_item"><CrossPink /></li>
        </ul>
      </div>
      <div className="MakeAppointment_card">
        <ul className="MakeAppointment_list">
          <li className="MakeAppointment_item">Dr. Miguel</li>
          <li className="MakeAppointment_item">Psicólogo </li>
          <li className="MakeAppointment_item">Ter - Qua</li>
          <li className="MakeAppointment_item">11h às 18h</li>
          <li className="MakeAppointment_item"><CrossPink /></li>
        </ul>
      </div>
      <div className="MakeAppointment_card">
        <ul className="MakeAppointment_list">
          <li className="MakeAppointment_item">Dr. Enos</li>
          <li className="MakeAppointment_item">Cirurgião</li>
          <li className="MakeAppointment_item">Qui - Sex</li>
          <li className="MakeAppointment_item">11h às 15h</li>
          <li className="MakeAppointment_item"><CrossPink /></li>
        </ul>
      </div>
      {modal && <ModalTimetable closeModal={closeModal}/>}
    </div>
  )
}

export { MakeAppointment };