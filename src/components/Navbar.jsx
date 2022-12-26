import React from 'react'
import { NavLink, Link, useParams } from 'react-router-dom';

const countries = ["London", "Bristol", "Liverpool", "Manchester", "Birmingham", "Brentford", "Sheffield"];
const Navbar = () => {

    const {id} = useParams();


    const countriesTabs = countries.map(country => {
        return <NavLink key={country} name={country} to={`/${country}`}>{country}</NavLink>
    })

    return (
        <div>
            <nav className="navEl">
                {countriesTabs}
            </nav>
        </div>
    )
}

export default Navbar