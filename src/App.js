import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TabDetails from './components/TabDetails';

function App() {

  const defaultCity = "London"; 

  return (
    <div className="main">
      <nav className='nav--bar'>
        <Navbar />
      </nav>
      <section util--center>
        <Routes>
          <Route path="/" element={<Navigate to={`/${defaultCity}`} replace />} />
          <Route path="/:id" element={<TabDetails />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
