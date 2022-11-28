import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Room from './pages/Room';
import Door_to_room from './pages/Door_to_room';
import "./style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/door_to_room/*" element={<Door_to_room/>}/>
          <Route path="/room/*" element={<Room/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}