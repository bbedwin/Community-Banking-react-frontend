import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

const LoanStatements = () => {
    const { userInfo } = useContext(ProjectContext)

    // Get Group ID
    let { id } = useParams();

    return (
        <div className='d-flex min-vh-100 flex-column'>
            <NavigationBar />
            
            <div className="container mt-4">
                <div className="card groups-list">
                    <div className="card-body">
                        <p className="fs-3 fw-bold text-center">Loan Statement</p>
                        <div className='my-5'>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className='fw-bold me-5'>Time Period: 1 year</p>
                                <p className='fw-bold'>Rate of interest: 0%</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className='fw-bold me-5'>Loan Amount: KES 100,000</p>
                                <p className='fw-bold'>Taken from: 02-05-2023</p>
                            </div>

                            <p className="fw-bold fs-4 text-center">Last Payment: 15-09-2023</p>
                        </div>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Loan payment</th>
                                    <th scope="col">Principal</th>
                                    <th scope="col">Interest</th>
                                    <th scope="col">Principal Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>12-03-2021</td>
                                    <td>200</td>
                                    <td>KES 12,000</td>
                                    <td>KES 200</td>
                                    <td>KES 200</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>12-03-2021</td>
                                    <td>200</td>
                                    <td>KES 12,000</td>
                                    <td>KES 200</td>
                                    <td>KES 200</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>12-03-2021</td>
                                    <td>200</td>
                                    <td>KES 12,000</td>
                                    <td>KES 200</td>
                                    <td>KES 200</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>12-03-2021</td>
                                    <td>200</td>
                                    <td>KES 12,000</td>
                                    <td>KES 200</td>
                                    <td>KES 200</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>12-03-2021</td>
                                    <td>200</td>
                                    <td>KES 12,000</td>
                                    <td>KES 200</td>
                                    <td>KES 200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanStatements