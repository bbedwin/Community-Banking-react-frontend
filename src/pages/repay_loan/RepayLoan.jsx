import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const RepayLoan = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()
    const location = useLocation()

    const { group_id } = useParams();

    const [paymentMode, setPaymentMode] = useState([])
    const [chooosenMode, setChoosenMode] = useState()
    const [loading, setLoading] = useState(true)

    async function repayLoan(e) {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/loan-repay/', 
                JSON.stringify({
                    "serial_no": location.state.loanRepaySerialNo,
                    "loan_id": location.state.loanRepayID,
                    "repayment_amount": location.state.repayAmount
                }),
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            console.log(response.data)
            toast.success("Successfully Repaid Loan")
            navigate("/loan-statement")
        } catch (error) {
            console.log(error)
            toast.success(error.response.data)
        }
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
                            <div className="mb-3">
                                <label htmlFor="loanID" className="form-label">Loan ID</label>
                                <input type="text" className="form-control" id="loanID" defaultValue={location.state.loanRepayID} contentEditable={false} readOnly={true} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loanAmount" className="form-label">Amount</label>
                                <input type="number" className="form-control" id="loanAmount" defaultValue={location.state.repayAmount} contentEditable={false} readOnly={true} />
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