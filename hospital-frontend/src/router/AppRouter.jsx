import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";

import HomePacient from "../pages/Pacient/HomePacient.jsx";
import DemanarCita from "../pages/Pacient/DemanarCita.jsx";
import SeleccionarHores from "../pages/Pacient/SeleccionarHores.jsx";
import LesMevesCites from "../pages/Pacient/LesMevesCites.jsx";

import Dashboard from "../pages/Admin/Dashboard.jsx";
import Doctors from "../pages/Admin/Doctors.jsx";
import Pacients from "../pages/Admin/Pacients.jsx";
import Cites from "../pages/Admin/Cites.jsx";

export default function AppRouter() {
    return (
        <Routes>
            {/* PUBLIC */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PACIENT */}
            <Route path="/pacient" element={<HomePacient />} />
            <Route path="/pacient/demanar-cita" element={<DemanarCita />} />
            <Route path="/pacient/demanar-cita/:idDoctor" element={<SeleccionarHores />} />
            <Route path="/pacient/les-meves-cites" element={<LesMevesCites />} />

            {/* ADMIN */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/doctors" element={<Doctors />} />
            <Route path="/admin/pacients" element={<Pacients />} />
            <Route path="/admin/cites" element={<Cites />} />

            {/* DEFAULT */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
