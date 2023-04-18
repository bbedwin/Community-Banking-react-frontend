import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold fs-4" href="#">Dashboard</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex">
                        <a href="">
                            <button className="btn btn-success d-flex align-items-center justify-content-between">
                                <i class="bi bi-plus fs-4 text-light"></i>
                                <span>Create Group</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar