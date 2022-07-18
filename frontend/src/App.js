import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Send from "./components/Send/Send";
import Message from "./components/Message/Message";

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace  />} />
        <Route path="/send" element={<Send />} />
        <Route path="/message" element={<Message />} />
        <Route path="/auth"  element={ (!user ? <Auth /> : <Navigate to="/auth" replace  />)} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
