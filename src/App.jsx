
import "./App.css";
import Home from "./Screens/Home";
import Feature from "./Screens/Feature";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/feature" element={<Feature />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
