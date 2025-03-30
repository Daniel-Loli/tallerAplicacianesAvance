// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("https://tareatalleraplicaciones1.onrender.com/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    setLoading(false);
    if (response.ok) {
      navigate("/welcome");
    } else {
      setError(data.message || "Error en el inicio de sesión.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl flex flex-col items-center">
      <img src="madreFoto.avif" alt="Madre con bebé" className="w-32 h-32 mb-4" />
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-2">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition" />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition" />
        <button type="submit" className="w-full px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition">
          {loading ? <div className="loader border-2 border-t-2 border-gray-200 rounded-full w-5 h-5 animate-spin mx-auto"></div> : "Iniciar Sesión"}
        </button>
      </form>
      {error && <p className="text-center text-red-500">{error}</p>}
      <p className="text-center text-gray-600">
        ¿No tienes cuenta? <span onClick={toggleForm} className="text-purple-500 cursor-pointer hover:underline">Regístrate</span>
      </p>
    </motion.div>
  );
};

export default Login;