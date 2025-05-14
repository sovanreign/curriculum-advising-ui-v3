import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/form/form";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forms" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
