import { Link } from "react-router-dom";
import { doctors } from "../../data/mockData.js";

export default function DemanarCita() {
    return (
        <div>
            <h1>Selecciona un doctor</h1>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        {doctor.name} - {doctor.specialty}{" "}
                        <Link to={`/pacient/demanar-cita/${doctor.id}`}>Veure hores</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
