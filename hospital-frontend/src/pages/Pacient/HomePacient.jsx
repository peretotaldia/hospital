import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function HomePacient() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const cardStyle = {
        display: "inline-block",
        width: "200px",
        height: "120px",
        margin: "20px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "16px",
        color: "white",
        lineHeight: "1.4",
        cursor: "pointer",
        transition: "transform 0.2s",
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Benvingut, pacient!</h1>
            <p>Selecciona una opció:</p>

            <div>
                <Link to="/pacient/demanar-cita" style={{ textDecoration: "none" }}>
                    <div
                        style={{ ...cardStyle, backgroundColor: "#4CAF50" }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        Demanar nova cita
                    </div>
                </Link>

                <Link to="/pacient/les-meves-cites" style={{ textDecoration: "none" }}>
                    <div
                        style={{ ...cardStyle, backgroundColor: "#2196F3" }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        Gestionar les meves cites
                    </div>
                </Link>
            </div>

            {/* Botó de logout */}
            <div style={{ marginTop: "40px" }}>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#f44336",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
