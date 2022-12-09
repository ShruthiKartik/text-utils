import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  let toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      //document.body.style.backgroundColor = '#03064a';
      document.body.style.backgroundColor = '#0c0f48';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <BrowserRouter >
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>

        <Route path="/" element={<>
          <div className="container my-3">
            <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={Mode} showAlert={showAlert} /></div></>} />


        <Route path="/about" element={<About mode={Mode} />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
