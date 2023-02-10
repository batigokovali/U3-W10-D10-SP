import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySearch from './Components/MySearch';

function App() {
  return (
    <div className="App">
      <MySearch></MySearch>
    </div>
  );
}

export default App;
