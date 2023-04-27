import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import Navbar from '../../components/navbar/Navbar'
import './ApplyLoan.css'

const ApplyLoan = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [loanAmount, setLoanAmount] = useState('')
    const [loanPeriod, setLoanPeriod] = useState('')
    const [interestRate, setInterestRate] = useState('')

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

            if (response.status == 200) {
                navigate(`/group/${group_id}`)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='apply-loan-bg'>
            <div className='create-group-content'>
                <div className="pb-2">
                    <Navbar title={'Create a Group'} />
                </div>

                <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                    <div className='fs-4 text-center w-100'>
                        <p className='fs-2 fw-bold'>Apply for a loan</p>
                        <p>
                            Apply for a loan
                        </p>
                    </div>

                    <div className="card" style={{ width: "30rem" }}>
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
                                    <button type="submit" className="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyLoan