import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/form/form";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/profile";
import Students from "./pages/students/Students";
import Coaches from "./pages/coaches/Coaches";
import Assignment from "./pages/assignment/Assignment";
// import Curriculum from "./pages/curriculum/Curriculum";
import CurriculumCoach from "./pages/curriculum_coach/CurriculumCoach";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/students" element={<Students />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/assignment" element={<Assignment />} />
          {/* <Route path="/assignment" element={<Curriculum />} /> */}
          <Route path="/curriculum-coach" element={<CurriculumCoach />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
