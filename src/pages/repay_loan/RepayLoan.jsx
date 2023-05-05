import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const RepayLoan = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [paymentMode, setPaymentMode] = useState([])
    const [chooosenMode, setChoosenMode] = useState()
    const [loading, setLoading] = useState(true)
    const [loanAmount, setLoanAmount] = useState('')
    const [loanID, setLoanID] = useState()
    const [loans, setLoans] = useState([])

    async function repayLoan(e) {
        e.preventDefault()
        const selected_loan = loans.find(x => x.id == loanID)
        console.log(selected_loan)
        try {
            const response = await axiosClient.post('/loan-repay/', 
                JSON.stringify({
                    "serial_no": selected_loan.id,
                    "loan_id": loanID,
                    "repayment_amount": loanAmount
                }),
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            console.log(response.data)
            setLoanID(null)
            setLoanAmount(null)
        } catch (error) {
            setLoanID(null)
            setLoanAmount(null)
            console.log(error)
        }
    }

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

    async function getPaymentModes() {
        const response = await axiosClient.get('/payment-mode/',
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        setPaymentMode(response.data)
    }

    useEffect(() => {
        let mounted = true;
        getMemberLoans()
        getPaymentModes()
        return () => mounted = false;
    }, [])

    return (
        <div className='min-vh-100'>
            <NavigationBar />

            <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                <div className='fs-4 text-center w-100 mb-5'>
                    <p className='fs-2 fw-bold text-light'>Repay Your loan</p>
                </div>
                <div className="card apply-loan-form" style={{ width: "30rem" }}>
                    <h3 className="text-center card-header">Repay Your Loan</h3>
                    <div className="card-body">
                        <form onSubmit={repayLoan}>
                            <div>
                                <label htmlFor="loan" className="form-label">Loan</label>
                                <select className="form-select" id='loan' onChange={(e) => setLoanID(e.target.value)}>
                                    <option selected>Open this select menu</option>
                                    {
                                        loans.map((loan, i) => {
                                            return (
                                                <option key={i} value={loan.id}>{loan.group_name} for {loan.loan_amount}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loanAmount" className="form-label">Amount</label>
                                <input type="number" className="form-control" id="loanAmount" defaultValue={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="paymentMode" className="form-label">Mode of payment</label>
                                <select className="form-select" id='paymentMode' defaultValue={chooosenMode} onChange={(e) => setChoosenMode(e.target.value)} required={true}>
                                    <option selected value={""}>Open to select</option>
                                    {
                                        paymentMode.map((mode, i) => {
                                            return (
                                                <option key={i + 1} value={mode.id}>{mode.mode}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-success">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepayLoan