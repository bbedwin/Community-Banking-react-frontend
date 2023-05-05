import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

const InvestorRegisterGroup = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [paymentMode, setPaymentMode] = useState([])
    const [chooosenMode, setChoosenMode] = useState()
    const [loanAmount, setLoanAmount] = useState('')

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
                    <p className='fs-2 fw-bold text-light'>"An investment in knowledge pays the best interest" </p>
                </div>
                <div className="card apply-loan-form" style={{ width: "30rem" }}>
                    <h3 className="text-center card-header">Invest On Group</h3>
                    <div className="card-body">
                        <form>
                        <div className="mb-3">
                                <label htmlFor="paymentMode" className="form-label">Choose Group To Invest</label>
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
                            <div className="mb-3">
                                <label htmlFor="loanAmount" className="form-label">Amount in $</label>
                                <input type="number" className="form-control" id="loanAmount" onChange={(e) => setLoanAmount(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loanAmount" className="form-label">Time Period (In Year)</label>
                                <input type="number" className="form-control" id="loanAmount" onChange={(e) => setLoanAmount(e.target.value)} />
                            </div>
                           

                            <div>
                                <center><button type="submit" className="btn btn-success" onClick={(e) => navigate('/invest-contribute')}>Invest</button></center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorRegisterGroup