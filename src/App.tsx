import React from 'react';
import Header from './Components/Header';
import { HashRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Datapoints from './Pages/Datapoints';
import Testresults from './Pages/Testresults';


function App() {
  return (
    <>
      <div className="App">
        <Router>
        <nav>
          <Header />
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Datapoints" element={<Datapoints />} />
            <Route path='/Testresults' element={<Testresults />} />
          </Routes>
          </Router>
      </div>
      </>
    
  );
}

export default App;
