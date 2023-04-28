import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './Group.css'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Colors from '../../components/colors/Colors'

const Group = () => {
    const { userInfo } = useContext(ProjectContext)
    // const navigate = useNavigate()

    // Get Group ID
    let { id } = useParams();

    const [isLoading, setLoading] = useState(true);
    const [groupDetails, setGroupDetails] = useState({})

    async function getGroupDetails() {
        const response = await axiosClient.get(`/get-group-detail-by-id/${id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setGroupDetails(response.data)
        setLoading(false);
    }

    useEffect(() => {
        let mounted = true;
        getGroupDetails()
        return () => mounted = false;
    }, [])



    if (isLoading) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className='d-flex min-vh-100 flex-column'>
                <NavigationBar />

                <div className="container mt-3">
                    <div className="card flex-wrap px-4">
                        <div className="group-details-card card-body">
                            <div>
                                <span className='fs-4 fw-bold'>Group Name</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails.group_name}</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Group Code</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails.group_code}</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Account Number</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails.account_number | 0}</small>
                            </div>

                            <div>
                                <span className='fs-4 fw-bold'>Group Admin</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails.group_admin.email}</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Number of Members</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails.group_trustees.length}</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Total Contributions</span> <br />
                                <small className='fs-5 fw-bold'>$200, 378</small>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div className='d-flex'>
                                <Link to={`/apply-loan/${groupDetails.id}`}>
                                    <button type="button" className="btn btn-warning text-light me-2">
                                        <i className="bi bi-cash-coin fs-4 me-2"></i>
                                        <span>Apply for a Loan</span>
                                    </button>
                                </Link>
                                <Link to={`/contribute/${groupDetails.id}`}>
                                    <button type="button" className="btn btn-success text-light me-2">
                                        <i className="bi bi-cash-coin fs-4 me-2"></i>
                                        <span>Contribute</span>
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-primary text-light me-2">
                                    <i className="bi bi-cash-coin fs-4 me-2"></i>
                                    <span>Repay Loan</span>
                                </button>
                            </div>
                            <div className="input-group w-50 my-5">
                                <input type="search" name='group-name' className="form-control" placeholder="group name" />
                                <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>

                        <div className="card groups-list">
                            <div className="card-body">
                                <p className="fs-3 fw-bold text-start">Group Members</p>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Member Email</th>
                                            <th scope="col">Joining Date</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Total Loan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {groupDetails.group_trustees.map((trustee, i) => {
                                            return (
                                                <tr key={i + 1}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{trustee.email}</td>
                                                    <td>12-03-2021</td>
                                                    <td>Member</td>
                                                    <td>$200</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group