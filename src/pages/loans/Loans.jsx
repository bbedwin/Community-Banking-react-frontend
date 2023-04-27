import React from 'react'
import './Loans.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Loans = () => {
    return (
        <div className='d-flex'>
            <Sidebar />
            <div className='stats container'>
                <div className="navigation w-100 pb-2">
                    <Navbar title={'Loans'} />
                </div>

                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-bold fs-2">2 Loans</p>
                    </div>

                    <div>
                        <div className="input-group my-5">
                            <input type="search" name='group-name' className="form-control" placeholder="group name" />
                            <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                        </div>

                        <div className="card groups-list">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Group Name</th>
                                        <th scope="col">Loan Amount</th>
                                        <th scope="col">From Date</th>
                                        <th scope="col">Loan Maturity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <a href="">
                                                My Group
                                            </a>
                                        </td>
                                        <td>$12,000</td>
                                        <td>12-02-1023</td>
                                        <td>12-02-1023</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <a href="">
                                                My Group
                                            </a>
                                        </td>
                                        <td>$12,000</td>
                                        <td>12-02-1023</td>
                                        <td>12-02-1023</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <a href="">
                                                My Group
                                            </a>
                                        </td>
                                        <td>$12,000</td>
                                        <td>12-02-1023</td>
                                        <td>12-02-1023</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <a href="">
                                                My Group
                                            </a>
                                        </td>
                                        <td>$12,000</td>
                                        <td>12-02-1023</td>
                                        <td>12-02-1023</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            )
}

            export default Loans