import React from 'react'

const Navbar = ({title}) => {
    return (
        <nav class="navbar navbar-expand-lg bg-light py-4 mb-2">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold fs-4" href="#">{title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex">
                        <a href="">
                            <ul className='list-unstyled'>
                                <li>
                                    <a href="">
                                        <i class="bi bi-bell fs-4 me-2"></i>
                                    </a>
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar