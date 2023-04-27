import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'
import lion from '../../assets/11334.jpg'

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='sidebar bg-dark d-flex justify-content-between align-items-start flex-column p-3'>
            <div className=''>
                <div className="mx-auto">
                    <img src={lion} alt="" height="150rem" width="auto" className='rounded' />
                </div>

                <div className="sidebar-links">
                    <p className="fs-3 fw-bold mt-3 text-light">Manage</p>

                    <div className='navlinks text-light'>
                        <ul className='text-start'>
                            <li>
                                <i className="bi bi-bar-chart fs-4 me-2">
                                    <button type='button' className="btn btn-transparent text-light" onClick={(e) => { e.preventDefault(); navigate('/dashboard') }}>
                                        Dashboard
                                    </button>
                                </i>
                                
                            </li>
                            <li>
                                <i className="bi bi-people fs-4 me-2"></i>
                                <button type='button' className="btn btn-transparent text-light" onClick={(e) => { e.preventDefault(); navigate('/groups') }}>
                                    Groups
                                </button>
                            </li>
                            <li>
                                <i className="bi bi-cash-stack fs-4 me-2"></i>
                                <button type='button' className="btn btn-transparent text-light" onClick={(e) => { e.preventDefault(); navigate('/loans') }}>
                                    Loans
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-light text-start'>
                <span className="fw-bold">John Doe</span>
                <br />
                <span>johndoe@gmail.com</span>
                <br />
                <br />
                <p>
                    <a href="">
                        <button className="btn btn-danger">
                            Sign out
                        </button>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Sidebar