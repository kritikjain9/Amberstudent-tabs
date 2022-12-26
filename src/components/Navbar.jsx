// Imports:
import React from 'react'
import { NavLink, useParams } from 'react-router-dom';



const cities = ["London", "Bristol", "Liverpool", "Manchester", "Birmingham", "Brentford", "Sheffield"];

// Exports:
export const Navbar = () => {
    const { id } = useParams();

    const citiesTabs = cities.map(city => {
        return (
            <div >
                <NavLink
                    key={city}
                    to={`/${city}`}
                    className={`nav__item ${city === id ? "active" : ""}`}
                >{city}
                </NavLink>
            </div>
        )
    })

    return (
        <div>
            <nav className="nav__bar">
                {citiesTabs}
            </nav>
        </div>
    )
}
