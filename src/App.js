import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Components/Pages/Main';
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp"

import { TaskProvider } from "./Context/TaskContext";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path='/' element={<ProtectedRoute><MainPage/></ProtectedRoute>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/:verify' element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
