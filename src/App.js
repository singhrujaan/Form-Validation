
import './App.css';
import Form from './components/Form';
import { Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
  );
}

export default App;
