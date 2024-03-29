import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllReservation from "./pages/allReservation/AllReservation";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Myreservation from "./pages/myreservation/myreservation";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myreservation" element={<Myreservation />} />
        <Route path="/allreservation" element={<AllReservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
