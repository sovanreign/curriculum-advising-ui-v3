import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/form/form";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/profile";
import Students from "./pages/students/Students";
import Coaches from "./pages/coaches/Coaches";
import Assignment from "./pages/assignment/Assignment";
import Curriculum from "./pages/curriculum/Curriculum";
import CurriculumCoach from "./pages/curriculum_coach/CurriculumCoach";
import CoachDashboard from "./pages/dashboard/CoachDashboard";
import AcadForm from "./pages/my_students/AcadForm";
import AcademicAdvisingForm from "./pages/my_students/AcademicAdvisingForm";
import MyStudents from "./pages/my_students/MyStudents";
import StudentCourses from "./pages/my_students/StudentCourse";
import CoachDetails from "./pages/programs/CoachDetails";
import CurriculumCoachesList from "./pages/programs/CurriculumCoachesList";
import Program from "./pages/programs/Program";
import StudentSubjects from "./pages/programs/StudentSubjects";
import SubjectSummary from "./pages/programs/SubjectSummary";
import MySubjects from "./pages/subjects/MyCourse";
import Summary from "./pages/summary/Summary";
import SummaryDetails from "./pages/summary/SummaryDetails";

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
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/curriculum-coach" element={<CurriculumCoach />} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/acad-form" element={<AcadForm />} />
          <Route
            path="/academicadvisingform"
            element={<AcademicAdvisingForm />}
          />
          <Route path="/my-students" element={<MyStudents />} />
          <Route path="/student-courses" element={<StudentCourses />} />
          <Route path="/coach-details" element={<CoachDetails />} />
          <Route
            path="/curriculum-coaches-list"
            element={<CurriculumCoachesList />}
          />
          <Route path="/programs" element={<Program />} />
          <Route path="/student-subjects" element={<StudentSubjects />} />
          <Route path="/subject-summary" element={<SubjectSummary />} />
          <Route path="/my-course" element={<MySubjects />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/summary-details" element={<SummaryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
