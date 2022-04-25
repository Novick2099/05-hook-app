import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ResponsiveDrawer from './ResponsiveDrawer'

export const NavBar = () => {
    return (
        <div>
            <ul>
                {/* todo NavLink a diferencia de Link tiene la propiedad activeClassName="" para aplicar cuando estemos en esa ruta,
                 para que funcione la clase, NavLink debe llevar la palabra exact */}
                <li><NavLink exact activeClassName='clase' to="/">Home</NavLink></li>
                <li> <NavLink exact to="/about">About</NavLink> </li>
                <li> <NavLink exact to="/login">Login</NavLink></li>
            </ul>
        </div>
    )
}
