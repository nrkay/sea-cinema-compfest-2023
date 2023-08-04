import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DetailMovie from "./Pages/DetailMovie";
import Contoh from "./Pages/contoh";
import TicketPage from "./Pages/TicketPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ticket" element={<TicketPage />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/movie/:id" element={<DetailMovie />}></Route>
        <Route path="/contoh" element={<Contoh />}></Route>
      </Routes>
    </>
  );
}

export default App;
