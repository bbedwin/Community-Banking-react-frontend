import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

const LoanStatements = () => {
    const navigate = useNavigate()
    const { userInfo } = useContext(ProjectContext)

    // Get Group ID
    let { id } = useParams();

    const [isLoading, setLoading] = useState(true);
    const [loanID, setLoanID] = useState()
    const [loans, setLoans] = useState([])
    const [loanStatements, setLoanStatements] = useState([]);

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

    const getLoanStatement = async (e) => {
        e.preventDefault()
        const response = await axiosClient.get(`/get-loan-statement-by-loan-id/?loan_id=${loanID}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setLoanStatements(response.data)
        setLoading(false);
    }

    useEffect(() => {
        let mounted = true;
        getMemberLoans()
        return () => mounted = false;
    }, [])

    return (
        <div className='d-flex min-vh-100 flex-column'>
            <NavigationBar />

            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <form action="" onSubmit={getLoanStatement}>
                            <label className="form-label" htmlFor="loan">Choose Loan</label>
                            <div className="d-flex">
                                <select className="form-select" id='loan' onChange={(e) => { setLoanID(e.target.value); setLoanStatements([]) }}>
                                    <option selected>Open this select menu</option>
                                    {
                                        loans.map((loan, i) => {
                                            return (
                                                <option key={i} value={loan.loan_id}>{loan.group_name} for {loan.loan_amount}</option>
                                            )
                                        })
                                    }
                                </select>

                                <button type='submit' className="btn btn-success">Choose</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                {
                    loanStatements.length > 0
                        ?
                        <div className="card groups-list">
                            <div className="card-body">
                                <p className="fs-3 fw-bold text-center">Loan Statement</p>
                                <div className='my-5'>
                                    <p className="fw-bold fs-4 text-center">Loan ID: {loanStatements[0]?.loan_id}</p>
                                    <p className="fw-bold fs-4 text-center">Date: {loanStatements[0]?.created_at.slice(0, 10)}</p>
                                </div>

                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Loan ID</th>
                                            <th scope="col">Principal</th>
                                            <th scope="col">Interest</th>
                                            <th scope="col">Repay Amount</th>
                                            <th scope="col">Repayment Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loanStatements?.map((statement, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td>{statement.loan_id}</td>
                                                        <td>KES {statement.principal_amount}</td>
                                                        <td>KES {statement.total_interest_amount}</td>
                                                        <td>{statement.repayment_amount}</td>
                                                        <td>{statement.repayment_date}</td>
                                                        <td>{statement.status}</td>
                                                        <td>
                                                            {
                                                                statement.status == "unpaid"
                                                                    ?
                                                                    <Link to="/repay-loan" state={{ loanRepayID: statement.loan_id, loanRepaySerialNo: statement.serial_no, repayAmount: statement.repayment_amount }}>
                                                                        <button type='button' className="btn btn-primary">Pay</button>
                                                                    </Link>
                                                                    :
                                                                    <button className="btn btn-success">Paid</button>
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <p className="fs-4 text-center text-light">No loan choosen</p>
                }
            </div>
        </div>
    )
}

export default LoanStatements