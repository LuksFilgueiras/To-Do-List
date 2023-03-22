import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Components/Pages/Main';
import { TaskProvider } from "./Context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
