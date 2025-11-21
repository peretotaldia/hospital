import { doctors } from "../../data/mockData.js";

export default function Doctors() {
    return (
        <div>
            <h1>Llista de doctors</h1>
            <ul>
                {doctors.map((d) => (
                    <li key={d.id}>
                        {d.name} - {d.specialty}{" "}
                        <button>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button>Afegeix doctor</button>
        </div>
    );
}
