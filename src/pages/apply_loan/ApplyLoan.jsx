import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './ApplyLoan.css'
import Colors from '../../components/colors/Colors'

const ApplyLoan = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const location = useLocation()
    const { admin, group_id } = location.state

    console.log(`Admin is ${admin}, Group ID is ${group_id}`)

    const [loanAmount, setLoanAmount] = useState(0)
    const [loanPeriod, setLoanPeriod] = useState(0)
    const [interestRate, setInterestRate] = useState(0)
    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(true)

    async function getMemberLoans() {
        const response = await axiosClient.get(`/member-loan-apply?trustee_id=${userInfo.user_id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setLoans(response.data)
        setLoading(false);
    }

    const applyLoan = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('member-loan-apply/', {
                "loan_amount": loanAmount,
                "loan_period": loanPeriod,
                "interest_rate": interestRate,
                "trustee_id": userInfo.user_id,
                "group_name": group_id,
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )

            console.log(response.data)

            if (response.status == 200) {
                toast.success("Loan application successful")
                navigate(`/group/${group_id}`)
            }
        } catch (error) {
            toast.warn(error.response.data.status)
            console.log(error)
        }

    }

    const approveLoan = async (e, loan_id) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('loan-approval/', {
                "loan_apply_id": loan_id,
                "group_admin_id": admin,
                "group_id": group_id,
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )

            console.log(response.data)

            if (response.status == 200) {
                toast.success("Loan approved")
                getMemberLoans()
            }
        } catch (error) {
            toast.warn(error.response.data.status)
            console.log(error)
        }

    }

    useEffect(() => {
        let mounted = true;
        getMemberLoans()
        return () => mounted = false;
    }, [])

    return (
        <div className='apply-loan-bg'>
            <NavigationBar />

            <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                <div className='fs-4 text-center w-100 mb-5'>
                    <p className='fs-2 fw-bold text-light'>Apply for a loan</p>
                </div>

                <div className="d-md-flex justify-content-around">
                    <div className="loan-application-description me-4" style={{color: Colors.WHITE}}>
                        <p className="fs-3 fw-bold">Loan Terms and Conditions</p>
                            <ul>
                                <li>Maximum Loan Period: 36 months</li>
                                <li>Interest Rate: 0 (zero)</li>
                                <li>Other Fees: KES 100 for each month that the loan is outstanding.</li>
                                <li>Loan Repayments: Monthly</li>
                            </ul>
                    </div>
                    <div className="card apply-loan-form" style={{ width: "30rem" }}>
                        <h3 className="text-center card-header">Apply Loan</h3>
                        <div className="card-body">
                            <form onSubmit={applyLoan}>
                                <div className="mb-3">
                                    <label htmlFor="loanAmount" className="form-label">Loan Amount</label>
                                    <input type="number" className="form-control" id="loanAmount" onChange={(e) => setLoanAmount(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="loanPeriod" className="form-label">Loan Period</label>
                                    <input type="number" className="form-control" id="loanPeriod" onChange={(e) => setLoanPeriod(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="interestRate">Interest Rate</label>
                                    <input type="number" className="form-control" id="interestRate" onChange={(e) => setInterestRate(e.target.value)} />
                                </div>

                                <div>
                                    <button type="submit" className="btn btn-success">Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="text-light">
                    <p className="fw-bold fs-2">{loans?.length || 0} Loan(s)</p>
                </div>

                <div>
                    <div className="card groups-list">
                        <div className="card-body">
                            <p className="fs-4 ps-4 fw-bold">Your Loans</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Group Name</th>
                                        <th scope="col">Loan Amount</th>
                                        <th scope="col">Loan Status</th>
                                        <th scope="col">Credit Status</th>
                                        {
                                            admin == userInfo.user_id
                                                ?
                                                <th scope="col">Action</th>
                                                :
                                                null
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {loans.map((loan, i) => {
                                        return (
                                            <tr key={i + 1}>
                                                <th scope="row">{i + 1}</th>
                                                <td>
                                                    {loan.group_name}
                                                </td>
                                                <td>{loan.loan_amount}</td>
                                                <td>{loan.is_approved ? "Approved" : "Not Approved"}</td>
                                                <td className='fw-bold text-success btn'>Good</td>
                                                {
                                                    admin == userInfo.user_id
                                                        ?
                                                        <td>{
                                                            loan.is_approved
                                                                ?
                                                                "Approved"
                                                                :
                                                                <button type='button' className='btn btn-success' onClick={(e) => approveLoan(e, loan.id) }>Approve</button>
                                                        }</td>
                                                        :
                                                        null
                                                }
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

export default ApplyLoan