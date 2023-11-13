import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Learners from './pages/Learners';
import Admin from './pages/Admin';
import Classes from './pages/Classes';
import Claims from './pages/Claims';
import Home from "./pages/Home";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/learners" element={<Learners />} />
          <Route path="/dashboard/admin" element={<Admin />} />
          <Route path="/dashboard/claims" element={<Claims />} />
          <Route path="/dashboard/classes" element={<Classes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
