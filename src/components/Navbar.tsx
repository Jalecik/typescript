import { render } from '@testing-library/react'
import React from 'react'

export const Navbar: React.FunctionComponent = () => {
    render(
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">React Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>
    </nav>
    )
}