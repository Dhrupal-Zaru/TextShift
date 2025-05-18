import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b>TaxtShift</b></Link>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}
