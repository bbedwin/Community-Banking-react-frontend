import React from 'react'
import './Dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Dashboard = () => {
    return (
        <div className='d-flex'>
            <Sidebar />
            <div className='stats container'>
                <div className="navigation w-100 pb-2">
                    <Navbar />
                </div>

                <div className="content bg-light pt-3">
                    <div className="cards d-flex justify-content-around">
                        <div className="card px-5">
                            <div className="card-body">
                                <i class="bi bi-wallet2 fs-2 fw-bold"></i>
                                <br />
                                <small>Total Groups</small>
                                <p className="fw-bold fs-4">4</p>
                            </div>
                        </div>
                        <div className="card px-5">
                            <div className="card-body">
                                <i class="bi bi-wallet2 fs-2 fw-bold"></i>
                                <br />
                                <small>Total Contributions</small>
                                <p className="fw-bold fs-4">$300.04</p>
                            </div>
                        </div>
                        <div className="card px-5">
                            <div className="card-body">
                                <i class="bi bi-wallet2 fs-2 fw-bold"></i>
                                <br />
                                <small>Total Loan</small>
                                <p className="fw-bold fs-4">$30</p>
                            </div>
                        </div>
                        <div className="card px-5">
                            <div className="card-body">
                                <i class="bi bi-wallet2 fs-2 fw-bold"></i>
                                <br />
                                <small>Total Repaid</small>
                                <p className="fw-bold fs-4">$20.04</p>
                            </div>
                        </div>
                    </div>

                    <div className="last-transctions bg-light my-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-around">
                                <p className="fw-bold fs-3">Last 30 days</p>
                                <div>
                                    <p className="fw-bold fs-4">Transactions</p>
                                    <p className='fs-4'>38</p>
                                </div>
                                <p>
                                    <p className="fw-bold fs-4">Contributions</p>
                                    <p className='fs-4'>$2,478</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="transactions-table">
                        <p className="fw-bold fs-3 text-start">Transactions</p>
                        <table class="table">
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
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard