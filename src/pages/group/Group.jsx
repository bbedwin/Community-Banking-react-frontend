import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Group = () => {
    return (
        <div className='d-flex'>
            <Sidebar />
            <div className='stats container'>
                <div className="navigation w-100 pb-2">
                    <Navbar title={'Group Details'} />
                </div>

                <div className="d-flex justify-content-between align-items-center px-4">
                    <div>
                        <p className='fs-3 fw-bold'>Group Admin</p>
                        <p className='fs-4 fw-bold text-success'>JOHN DOE</p>
                    </div>
                    <div>
                        <p className='fs-3 fw-bold'>Number of Members</p>
                        <p className='fs-4 fw-bold text-success'>200</p>
                    </div>
                    <div>
                        <p className='fs-3 fw-bold'>Total Contributions</p>
                        <p className='fs-4 fw-bold text-success'>$200, 378</p>
                    </div>
                </div>

                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div class="input-group w-50 my-5">
                            <input type="search" name='group-name' class="form-control" placeholder="group name" />
                            <button class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                        </div>
                        <div>
                            <a href="">
                                <button className="btn btn-warning">Apply Loan</button>
                            </a>
                        </div>
                    </div>

                    <div className="card groups-list">
                        <p className="fs-3 fw-bold text-start">Group Members</p>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">Joining Date</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Total Loan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        My Group
                                    </td>
                                    <td>12-03-2021</td>
                                    <td>Member</td>
                                    <td>$200</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        My Group
                                    </td>
                                    <td>12-03-2021</td>
                                    <td>Member</td>
                                    <td>$200</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        My Group
                                    </td>
                                    <td>12-03-2021</td>
                                    <td>Member</td>
                                    <td>$200</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>
                                        My Group
                                    </td>
                                    <td>12-03-2021</td>
                                    <td>Member</td>
                                    <td>$200</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Group