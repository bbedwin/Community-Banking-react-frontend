import { React, useContext } from 'react'
import ProjectContext from '../../context/MainContext'
import { Link } from 'react-router-dom'
import Colors from '../colors/Colors'

const NavigationBar = () => {
    const { Logout } = useContext(ProjectContext)
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: Colors.SECONDARY }}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#" style={{ color: Colors.WHITE }}>Community Banking</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>

                    <ul className='navbar-nav py-3'>
                        <Link to={"/"}>
                            <li className="nav-item me-4 fw-bold">
                                Home
                            </li>
                        </Link>
                        <Link to={"/dashboard"}>
                            <li className="nav-item me-4 fw-bold">
                                Dashboard
                            </li>
                        </Link>
                        <Link to={"/home"}>
                            <li className="nav-item me-4 fw-bold">
                                Create
                            </li>
                        </Link>
                        <Link to={"/groups"}>
                            <li className="nav-item me-4 fw-bold">
                                Groups
                            </li>
                        </Link>

                        {
                            localStorage.getItem("status") == 0
                                ?
                                <>
                                    <Link to={"/signin"}>
                                        <li className="nav-item me-4 fw-bold">
                                            Sign in
                                        </li>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <li className="nav-item me-4 fw-bold">
                                            Sign up
                                        </li>
                                    </Link>
                                </>
                                :
                                <Link onClick={() => Logout()}>
                                    <li className="nav-item me-4 fw-bold text-danger">
                                        Sign out
                                    </li>
                                </Link>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar