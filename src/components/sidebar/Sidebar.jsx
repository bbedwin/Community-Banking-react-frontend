import React from 'react'
import './Sidebar.css'
import lion from '../../assets/11334.jpg'

const Sidebar = () => {
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
                                <a href="">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Analytics
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Groups
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Investors
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Trustees
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Members
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Notifications
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar