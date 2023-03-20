import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Components/Pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
