import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { loginFake } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (role) => {
        loginFake(role);
        if (role === "pacient") navigate("/pacient");
        if (role === "admin") navigate("/admin");
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => handleLogin("pacient")}>Entrar com Pacient</button>
            <button onClick={() => handleLogin("admin")}>Entrar com Admin</button>
        </div>
    );
}
