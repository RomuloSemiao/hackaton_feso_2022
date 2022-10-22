import { useState } from "react";

import { CloseIcon } from "../../assets/CloseIcon";

import "./ModalWarning.scss";

const ModalWarning = () => {
    const [showNotification, setShowNotification] = useState(true);

    const handleCloseNotification = () => {
        setShowNotification(!showNotification)
    }

    return (
        <div className="ModalWarning">
            <p className="ModalWarning_text">Sua consulta com <span>a Dra.</span> <span>Maria</span> será daqui a <span className="ModalWarning_text-date">2</span> dias</p>

            <CloseIcon className="" onClick={() => handleCloseNotification()} />
        </div>
    )
}

export { ModalWarning }