import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const GroupLoan = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [loanAmount, setLoanAmount] = useState(0)
    const [loanPeriod, setLoanPeriod] = useState(0)
    const [percentageReturn, setPercentageReturn] = useState(0)

  return (
      <div className='apply-loan-bg'>
          <NavigationBar />

          <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
              <div className='fs-4 text-center w-100 mb-5'>
                  <p className='fs-2 fw-bold text-light'>Apply for a Group loan</p>
                  <p className='text-light'>The application will be sent to the investors and only when they approve will your group receive the loan.</p>
              </div>

              <div className="d-md-flex justify-content-around">
                  <div className="card apply-loan-form" style={{ width: "30rem" }}>
                      <h3 className="text-center card-header">Apply for a Group Loan</h3>
                      <div className="card-body">
                          <form>
                              <div className="mb-3">
                                  <label htmlFor="loanAmount" className="form-label">Loan Amount</label>
                                  <input type="number" className="form-control" id="loanAmount" onChange={(e) => setLoanAmount(e.target.value)} />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="loanPeriod" className="form-label">Loan Period</label>
                                  <input type="number" className="form-control" id="loanPeriod" onChange={(e) => setLoanPeriod(e.target.value)} />
                              </div>
                              <div className="mb-3">
                                  <label className="form-label" htmlFor="percentageReturn">Percentage return (%)</label>
                                  <input type="number" className="form-control" id="percentageReturn" onChange={(e) => setPercentageReturn(e.target.value)} />
                              </div>

                              <div>
                                  <button type="submit" className="btn btn-success">Apply</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default GroupLoan