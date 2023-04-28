import { React, useContext } from 'react'
import ProjectContext from '../../context/MainContext'
import './Dashboard.module.css'
import { Link } from 'react-router-dom'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const Dashboard = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    console.log(userInfo)
    return (
        <div>
            <div className="navigation w-100 pb-2">
                <NavigationBar />
            </div>

            <div className="dashboard-content container text-light bg-transparent pt-3 px-4">

                <div>
                    <span className="fs-2 fw-light">Welcome back <span className="fw-bold">Member</span>,</span>
                    <br />
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, corporis.</span>
                </div>

                <div className="cards d-md-flex justify-content-between mt-5">
                    <div className="card text-center" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <Link to={"/groups"}>
                            <div className="card-body">
                                <i className="bi bi-people fs-2"></i>
                                <br />
                                <span>Total Groups</span>
                                <p className="fw-bold fs-4">4</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card text-center" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <div className="card-body">
                            <i className="bi bi-cash-stack fs-2"></i>
                            <br />
                            <span>Total Contributions</span>
                            <p className="fw-bold fs-4">$300.04</p>
                        </div>
                    </div>
                    <div className="card text-center" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <div className="card-body">
                            <i className="bi bi-cash fs-2"></i>
                            <br />
                            <span>Total Loan</span>
                            <p className="fw-bold fs-4">$30</p>
                        </div>
                    </div>
                    <div className="card text-center" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <div className="card-body">
                            <i className="bi bi-piggy-bank fs-2"></i>
                            <br />
                            <span>Total Repaid</span>
                            <p className="fw-bold fs-4">$20.04</p>
                        </div>
                    </div>
                </div>

                <div className="transactions-table card mt-5">
                    <p className="fw-bold fs-3 text-start text-dark px-4 py-2">Recent Transactions</p>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard