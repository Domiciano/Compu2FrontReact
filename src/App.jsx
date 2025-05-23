import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import StudentSection from "./sections/StudentSection";
import CourseSection from "./sections/CourseSection";
import ProtectedLayout from './components/ProtectedLayout';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>

      <Route path="/login" element={<Login />}></Route>

      <Route element={<ProtectedLayout/>}>
        <Route path="/home" element={<Home />}></Route>
      </Route>
      
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<StudentSection />}></Route>
        <Route path="students" element={<CourseSection />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App
