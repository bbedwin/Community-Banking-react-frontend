import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './Contribute.css'
import Colors from '../../components/colors/Colors'

const Contribute = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [amount, setAmount] = useState(0)
    const [paymentMode, setPaymentMode] = useState([])
    const [chooosenMode, setChoosenMode] = useState()

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

    const contribute = async (e) => {
        e.preventDefault()

        console.log(`Choosen Mode is ${chooosenMode}`)

        if (chooosenMode == "") {
            toast.warning("Payment Mode is required")
            return
        }

        try {
            const response = await axiosClient.post('member-amount-saving/', {
                "pay_amount": amount,
                "trustee_id": userInfo.user_id,
                "group_id": group_id,
                "payment_mode": chooosenMode
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )

            if (response.status == 200) {
                console.log(response.data)
                toast.success("Loan application successful")
                navigate(`/group/${group_id}`)
            }
        } catch (error) {
            toast.warn(error.response.data.error)
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        let mounted = true;
        getPaymentModes()
        return () => mounted = false;
    }, [])

    return (
        <div className='contribute-bg'>
            <NavigationBar />

            <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                <div className='fs-4 text-center w-100 mb-5' style={{ color: Colors.WHITE }}>
                    <p className='fs-2 fw-bold'>Contribute to Group</p>
                    <p>
                        Create a group, invite members and start saving for a better future
                    </p>
                </div>

                <div className="d-md-flex">
                    <div className="loan-contribution-description me-4" style={{ color: Colors.WHITE }}>
                        <p className="fs-3 fw-bold">Group Contribution Terms and Conditions</p>
                        <ul>
                            <li>Maximum Loan Period: 36 months</li>
                            <li>Interest Rate: 0 (zero)</li>
                            <li>Other Fees: KES 100 for each month that the loan is outstanding.</li>
                            <li>Loan Repayments: Monthly</li>
                        </ul>
                    </div>

                    <div className="card" style={{ width: "30rem" }}>
                        <h3 className="text-center card-header">Contribute to group</h3>
                        <div className="card-body">
                            <form onSubmit={contribute}>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                    <input type="number" className="form-control" id="amount" onChange={(e) => setAmount(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paymentMode" className="form-label">Mode of payment</label>
                                    <select className="form-select" id='paymentMode' onChange={(e) => setChoosenMode(e.target.value)} required={true}>
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

                                <div className="mt-3">
                                    <button type="submit" className="btn btn-success">Contribute</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contribute