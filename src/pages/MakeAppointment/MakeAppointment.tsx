import { CrossPink } from "../../assets/CrossPink";
import { CrossWhite } from "../../assets/CrossWhite";
import { ModalTimetable } from "../../components/ModalTimetable/ModalTimetable";

import "./MakeAppointment.scss"

const MakeAppointment = () => {
  return (
    <div className="MakeAppointment">
      {/* <div className="MakeAppointment_card">
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
          <li className="MakeAppointment_item">Dra. Maria</li>
          <li className="MakeAppointment_item">Dentista</li>
          <li className="MakeAppointment_item">Seg - Sex</li>
          <li className="MakeAppointment_item">12h às 18h</li>
          <li className="MakeAppointment_item"><CrossPink /></li>
        </ul>
      </div>
      <div className="MakeAppointment_card">
        <ul className="MakeAppointment_list">
          <li className="MakeAppointment_item">Dra. Maria</li>
          <li className="MakeAppointment_item">Dentista</li>
          <li className="MakeAppointment_item">Seg - Sex</li>
          <li className="MakeAppointment_item">12h às 18h</li>
          <li className="MakeAppointment_item"><CrossPink /></li>
        </ul>
      </div> */}
      <ModalTimetable />
    </div>
  )
}

export { MakeAppointment };