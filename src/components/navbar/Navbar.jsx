import React from 'react'

const Navbar = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-4 mb-2">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-4" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex">
                        <ul className='list-unstyled'>
                            <li>
                                <a href="">
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