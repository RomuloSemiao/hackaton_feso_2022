import { ClockIcon } from "../../assets/ClockIcon";
import { CloseIcon } from "../../assets/CloseIcon";
import { DollarSign } from "../../assets/DollarSign";
import { StarIcon } from "../../assets/StarIcon";
import "./ModalTimetable.scss";

const ModalTimetable = () => {
    return ( 
        <div className="ModalBox">
            <div className="ModalTimetable">
                <div className="ModalTimetable_header">
                    <p className="ModalTimetable_header-text">Consulta</p>
                    <CloseIcon />
                </div>

                <div className="ModalTimetable_content">
                    <p className="ModalTimetable_content-local">Avenida Lúcio Meira (RJ) - 203</p>
                    <div className="ModalTimetable_content-box">
                        <div><DollarSign /><p>- 200,00</p></div>
                        <div><ClockIcon /><p>- 1h</p></div>
                        <div><StarIcon /><p>- 5</p></div>
                    </div>
                    <div className="ModalTimetable_content-horarios">
                        Horários disponíveis
                    </div>
                </div>

                <button className="ModalTimetable_button">Agendar</button>
            </div>  
        </div>
    );
};

export { ModalTimetable };