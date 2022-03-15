import "./App.css";
import Navabar from "./components/Navabar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navabar />
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
