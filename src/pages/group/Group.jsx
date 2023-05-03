import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './Group.css'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const Group = () => {
    const { userInfo } = useContext(ProjectContext)
    // const navigate = useNavigate()

    // Get Group ID
    let { id } = useParams();

    const [isLoading, setLoading] = useState(true);
    const [groupDetails, setGroupDetails] = useState({})
    const [groupTotal, setGroupTotal] = useState(0)

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

    async function getGroupTotal() {
        const response = await axiosClient.get(`/get-group-collection?group_id=${id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setGroupTotal(response.data.available_funds)
        setLoading(false);
    }

    useEffect(() => {
        let mounted = true;
        getGroupDetails()
        getGroupTotal()
        return () => mounted = false;
    }, [])



    if (isLoading) {
        return (
            <div className='min-vh-100'></div>
        )
    } else {
        return (
            <div className='d-flex min-vh-100 flex-column'>
                <NavigationBar />

                <div className="container mt-3">
                    <div className="card flex-wrap px-4 mb-3">
                        <div className="group-details-card card-body">
                            <div>
                                <span className='fs-4 fw-bold'>Group Name</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails?.group_name}</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Group Code</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails?.group_code}</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Account Number</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails?.account_number || 0}</small>
                            </div>

                            <div>
                                <span className='fs-4 fw-bold'>Group Admin</span> <br />
                                <small className='fs-5 fw-bold'>asdasdasd</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Number of Members</span> <br />
                                <small className='fs-5 fw-bold'>{groupDetails?.group_trustees?.length ? groupDetails.group_trustees.length : 0}</small>
                            </div>
                            <div>
                                <span className='fs-4 fw-bold'>Total Contributions</span> <br />
                                <small className='fs-5 fw-bold'>KES {groupTotal}</small>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="d-md-flex justify-content-between align-items-center my-4">
                            <div className=''>
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

                                <Link to={"/repay-loan"}>
                                    <button type="button" className="btn btn-primary text-light me-2">
                                        <i className="bi bi-cash-coin fs-4 me-2"></i>
                                        <span>Repay Loan</span>
                                    </button>
                                </Link>
                                <Link to={'/loans'}>
                                    <button type="button" className="btn btn-primary text-light me-2">
                                        <i className="bi bi-cash-coin fs-4 me-2"></i>
                                        <span>Loans</span>
                                    </button>
                                </Link>
                                <Link to={'/loan-statement'}>
                                    <button type="button" className="btn btn-danger text-light me-2">
                                        <i className="bi bi-cash-coin fs-4 me-2"></i>
                                        <span>Loan Statement</span>
                                    </button>
                                </Link>
                                <Link to={"/loan-repayments"}>
                                    <button type="button" className="btn btn-secondary text-light me-2">
                                        <i className="bi bi-cash-coin fs-4 me-2"></i>
                                        <span>Loan Repayments</span>
                                    </button>
                                </Link>
                                <Link to={"/credit-interest"}>
                                    <button type="button" className="btn btn-secondary text-light me-2">
                                        <i className="bi bi-cash-coin fs-4 me-2"></i>
                                        <span>Credit Interest</span>
                                    </button>
                                </Link>
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