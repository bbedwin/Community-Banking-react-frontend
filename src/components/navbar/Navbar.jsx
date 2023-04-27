import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ title }) => {
    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg bg-success py-3">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-light fs-4" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex">
                        <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                            <li>
                                <a href="/dashboard" onClick={(e) => {e.preventDefault(); navigate('/dashboard')}} className='text-light btn btn-outline-warning'>
                                    Dashboard
                                </a>
                            </li>
                            <li className='ms-5'>
                                <a href="" className='text-light'>
                                    <i className="bi bi-bell fs-4 me-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar