import React from 'react'
import { NavLink, useParams } from 'react-router-dom';

const cities = ["London", "Bristol", "Liverpool", "Manchester", "Birmingham", "Brentford", "Sheffield"];
const Navbar = () => {

    const { id } = useParams();

    const citiesTabs = cities.map(city => {
        return (
            <div >
                <NavLink className={`nav--el ${city === id ? "active" : ""}`} key={city} to={`/${city}`}>{city}</NavLink>
            </div>
        )
    })

    return (
        <div>
            <nav className="nav--bar">
                {citiesTabs}
            </nav>
        </div>
    )
}

export default Navbar