import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/welcome.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      {showLogin ? <Login toggleForm={() => setShowLogin(false)} /> : <Register toggleForm={() => setShowLogin(true)} />}
    </div>
  );
};

export default App;
