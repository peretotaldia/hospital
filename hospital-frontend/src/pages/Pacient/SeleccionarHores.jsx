import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { availableHours, doctors, appointments } from "../../data/mockData.js";

export default function SeleccionarHores() {
    const { idDoctor } = useParams();
    const navigate = useNavigate();
    const doctor = doctors.find((d) => d.id === parseInt(idDoctor));

    const [hours, setHours] = useState(availableHours[idDoctor] || []);

    const reservarHora = (hora) => {
        appointments.push({ doctorId: doctor.id, hour: hora });

        availableHours[idDoctor] = availableHours[idDoctor].filter(h => h !== hora);

        setHours([...availableHours[idDoctor]]);

        alert(`Cita reservada amb ${doctor.name} a les ${hora}`);
        navigate("/pacient/les-meves-cites");
    };

    return (
        <div>
            <h1>Selecciona hora per {doctor.name}</h1>
            {hours.length === 0 && <p>No hi ha hores disponibles.</p>}
            <ul>
                {hours.map((hora) => (
                    <li key={hora}>
                        {hora} <button onClick={() => reservarHora(hora)}>Reservar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
