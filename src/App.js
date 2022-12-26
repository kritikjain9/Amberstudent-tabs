import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TabDetails from './components/TabDetails';

function App() {

  const [selectedTab, setSelectedTab] = useState("London");

  return (
    <div className="main">
      <nav className='nav--bar'>
        <Navbar selectedTab={selectedTab} />
      </nav>
      <section>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/:id" element={<TabDetails selectedTab={selectedTab} />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
