import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { useSelector } from "react-redux";
import Chat from "./pages/chat/Chat";

function App() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/chat");
    } else {
      navigate("/auth");
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/" element={null} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<div>Страница не найдена</div>} />
    </Routes>
  );
}

export default App;
