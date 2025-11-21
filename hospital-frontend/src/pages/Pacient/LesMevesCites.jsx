import { appointments, doctors, availableHours } from "../../data/mockData.js";
import { useState } from "react";

export default function LesMevesCites() {
    const [cites, setCites] = useState(appointments);

    const borrarCita = (index) => {
        const cita = cites[index];

        if (availableHours[cita.doctorId]) {
            availableHours[cita.doctorId].push(cita.hour);
            availableHours[cita.doctorId].sort();
        }

        appointments.splice(index, 1);

        setCites([...appointments]);
    };

    return (
        <div>
            <h1>Les meves cites</h1>
            {cites.length === 0 && <p>No tens cap cita reservada.</p>}
            <ul>
                {cites.map((cita, index) => {
                    const doctor = doctors.find((d) => d.id === cita.doctorId);
                    return (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            {doctor.name} - {cita.hour}{" "}
                            <button
                                onClick={() => borrarCita(index)}
                                style={{ marginLeft: "10px" }}
                            >
                                Cancel·lar
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
