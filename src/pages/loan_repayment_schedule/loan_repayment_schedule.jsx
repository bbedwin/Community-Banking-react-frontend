import { React, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { toast } from 'react-toastify'
import './loan_repayment_schedule.css'

const LRepaymentSchedule = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const [loanAmount, setLoanAmount] = useState('')
    const [loanIntrestterm, setLoanIntrestTerm] = useState('')
    const [loanFrequency, setLoanFrequency] = useState('')
    const [loanIntrestrate, setLoanIntrestRate] = useState('')


    const lrepaymentschedule = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/loan-module/repayment-schedule/', {
                "loan_amount": loanAmount,
                "terms_in_year": loanIntrestterm,
                "frequency": loanFrequency,
                "interest_rate": loanIntrestrate,
            })

            if (response.status == 201) {
                toast.success("Repayment Scheduled successfully")
                navigate('/loanrepaymentschedule')
            }

        } catch (error) {
            if (error.response.data.message == "Please complete your profile to proceed") {
                toast.warn("Please complete your profile to proceed")
                navigate('/profile')
            }
            toast.warn(error.response.data)
            console.log(error)
        }
    }


    return (
        <div className='loan-repay-bg'>
            <div className='loan-repay-content'>
                <div className="pb-2">
                    <NavigationBar />
                </div>

                <div className='bg-div d-flex flex-column justify-content-center text-light align-items-center pt-2'>
                    <div className='fs-4 text-center w-100'>
                        <p className='fs-2 fw-bold'>Loan Repayment Schedule</p>
                        <p>
                            Make your Repayment Schedule simple
                        </p>
                    </div>
                </div>

                <div className="card mx-auto loan-repay-form" style={{ width: "35rem" }}>
                    <h3 className='card-header text-center'>Repayment Schedule Form</h3>
                    <div className="card-body">
                        <form onSubmit={lrepaymentschedule} className=''>
                            <div className="mb-3">
                                <label htmlFor="loan_amount" className="form-label">Loan amount</label>
                                <input type="text" className="form-control" id="loan_amount" onChange={(e) => { setLoanAmount(e.target.value) }} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="terms_in_year" className="form-label">Interest Terms In Year</label>
                                <input type="text" className="form-control" id="terms_in_year" onChange={(e) => { setLoanIntrestTerm(e.target.value) }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="frequency" className="form-label">Frequency</label>
                                <select className="form-select" id='frequency' name='Frequency'
                                    onChange={(e) => { setLoanFrequency(e.target.value) }}>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="montly">Montly</option>
                                    <option value="quarterly">Quaterly</option>
                                    <option value="half_yearly">Half Yearly</option>
                                    <option value="annualy">Annualy</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="interest_rate">Interest Rate In Percentage</label>
                                <input type="text" className="form-control" id="interest_rate" onChange={(e) => { setLoanIntrestRate(e.target.value) }} />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-success">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LRepaymentSchedule