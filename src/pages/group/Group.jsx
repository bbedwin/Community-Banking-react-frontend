import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './Group.css'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

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
            <div className="fw-bold fs-4">Loading ....</div>
        )
    } else {
        return (
            <div className='d-flex'>
                <Sidebar />
                <div className='group-stats'>
                    <div className="navigation w-100 pb-2">
                        <Navbar title={'Group Details'} />
                    </div>

                    <div className="d-flex justify-content-around align-items-center text-center flex-wrap px-4">
                        <div>
                            <p>Group Name</p>
                            <small className='fs-4 fw-bold text-success'>{groupDetails.group_name}</small>
                        </div>
                        <div>
                            <p>Group Code</p>
                            <small className='fs-4 fw-bold text-success'>{groupDetails.group_code}</small>
                        </div>
                        <div>
                            <p>Account Number</p>
                            <small className='fs-4 fw-bold text-success'>{groupDetails.account_number | 0}</small>
                        </div>
    
                        <div>
                            <p>Group Admin</p>
                            <small className='fs-4 fw-bold text-success'>{groupDetails.group_admin.email}</small>
                        </div>
                        <div>
                            <p>Number of Members</p>
                            <small className='fs-4 fw-bold text-success'>{groupDetails.group_trustees.length}</small>
                        </div>
                        <div>
                            <p>Total Contributions</p>
                            <small className='fs-4 fw-bold text-success'>$200, 378</small>
                        </div>
                    </div>

                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="input-group w-50 my-5">
                                <input type="search" name='group-name' className="form-control" placeholder="group name" />
                                <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                            </div>
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
                        </div>

                        {/* Modal */}
                        {/* <div className=" text-start modal fade" id="contribute" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Contribute to Group</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={contribute}>
                                            <div className="mb-3">
                                                <label htmlFor="amount" className="form-label">Amount</label>
                                                <input type="number" className="form-control" id="amount" onChange={(e) => setAmount(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="paymentMode" className="form-label">Mode of payment</label>
                                                <select className="form-select" id='paymentMode' onChange={(e) => setPaymentMode(e.target.value)}>
                                                    <option key="1" value="M-Pesa">M-Pesa</option>
                                                    <option key="2" value="Bank">Bank</option>
                                                </select>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-success">Save</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>  */}

                        <div className="card groups-list">
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
                                            <tr key={i+1}>
                                                <th scope="row">{i+1}</th>
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
        )
    }
}

export default Group