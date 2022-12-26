// Imports:
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TabDetails } from './components/TabDetails';
import './App.css';


// Exports:
export const App = () => {
  const defaultCity = "London";

  return (
    <div className="main">
      <div className="heading util__center">
        <h1 className='util__font'>Trending Properties</h1>
      </div>

      <nav className='nav__bar'>
        <Navbar />
      </nav>

      <section util__center>
        <Routes>
          <Route path="/" element={<Navigate to={`/${defaultCity}`} replace />} />
          <Route path="/:id" element={<TabDetails />}></Route>
        </Routes>
      </section>
    </div>
  );
}

