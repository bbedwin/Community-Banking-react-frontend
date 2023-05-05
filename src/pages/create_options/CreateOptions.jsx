import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import './CreateOptions.css'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import family from '../../assets/family-min.webp'
import hands from '../../assets/hands-min.webp'
import invest from '../../assets/invest-min.webp'

const CreateOptions = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    return (
        <div className='options-bg min-vh-100'>
            <div className='create-options-content'>
                <div className="pb-2">
                    <NavigationBar />
                </div>

                <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                    <div className='fs-4 text-light text-center w-100'>
                        <p className='fs-2 fw-bold'>Advantage Banking</p>
                        <p>
                            Community Banking meets your unique financial needs while positioning you for growth and success.
                        </p>
                    </div>

                    <div className="buttons d-md-flex justify-content-evenly mt-4">
                        <div>
                            <div className="card p-0 mx-5 mb-3 bg-dark text-light border-0" style={{ width: "20rem" }}>
                                <img src={family} className="card-img-top img-fluid" alt="family" />
                                <div className="card-body">
                                    <h5 className="card-title">Create a Group</h5>
                                    <p className="card-text">Create your group and invite members to join</p>
                                    <button type='button' className="btn btn-success w-100 btn-lg" onClick={(e) => navigate('/create-group')}>Create Group</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card p-0 mx-5 mb-3 bg-dark text-light border-0" style={{ width: "20rem" }}>
                                <img src={hands} className="card-img-top img-fluid" alt="family" />
                                <div className="card-body">
                                    <h5 className="card-title">Join a group</h5>
                                    <p className="card-text">Join an already existing group using an invite code and start saving</p>
                                    <button type='button' className="btn btn-primary w-100 btn-lg" onClick={(e) => navigate('/join-group')}>Join Group</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card p-0 mx-5 mb-3 bg-dark text-light border-0" style={{ width: "20rem" }}>
                                <img src={invest} className="card-img-top img-fluid" alt="family" />
                                <div className="card-body">
                                    <h5 className="card-title">Become an investor</h5>
                                    <p className="card-text">Invest in a group and start reaping benefits</p>
                                    <button type='button' className="btn btn-secondary w-100 btn-lg"  onClick={(e) => navigate('/investor-register-group')}>Invest</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateOptions