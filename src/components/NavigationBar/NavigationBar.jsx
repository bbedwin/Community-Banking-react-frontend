import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../colors/Colors'

const NavigationBar = () => {
    return (
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor: Colors.SECONDARY }}>
            <div class="container-fluid">
                <a class="navbar-brand fw-bold" href="#" style={{ color: Colors.WHITE }}>Community Banking</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>

                    <ul className='navbar-nav mb-2'>
                        <Link to={"/home"}>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{ color: Colors.WHITE }}>Home</a>
                            </li>
                        </Link>
                        <Link to={"/dashboard"}>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#" style={{ color: Colors.WHITE }}>Dashboard</a>
                            </li>
                        </Link>
                        <Link to={"/groups"}>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#" style={{ color: Colors.WHITE }}>Groups</a>
                            </li>
                        </Link>
                        <Link to={"/signin"}>
                            <li class="nav-item me-4">
                                <a class="nav-link btn" href="" style={{ color: Colors.WHITE, borderColor: Colors.SECONDARY }}>Sign in</a>
                            </li>
                        </Link>
                        <Link to={"/signup"}>
                            <li class="nav-item me-4">
                                <a class="nav-link btn" href="" style={{ color: Colors.WHITE, backgroundColor: Colors.BG }}>Sign up</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar