import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./UI/Sign"; 
import Interface from "./UI/Interface";
import Login from "./UI/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    
  );
}

export default App;
