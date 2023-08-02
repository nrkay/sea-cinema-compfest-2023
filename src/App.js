import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DetailMovie from "./Pages/DetailMovie";
import Contoh from "./Pages/contoh";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/movie/:id" element={<DetailMovie />}></Route>
        <Route path="/contoh" element={<Contoh />}></Route>
      </Routes>
    </>
  );
}

export default App;
