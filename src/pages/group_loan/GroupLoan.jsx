import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const GroupLoan = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const location = useLocation()
    const { group_id } = location.state
    
    const [loading, setLoading] = useState(true)
    const [groupLoans, setGroupLoans] = useState([])
    const [loanAmount, setLoanAmount] = useState(0)
    const [loanPeriod, setLoanPeriod] = useState(0)
    const [percentageReturn, setPercentageReturn] = useState(0)

    const applyGroupLoan = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('group-loan-apply/', {
                "loan_amount": loanAmount,
                "loan_period": loanPeriod,
                "percentage_return": percentageReturn,
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
                toast.success("Group Loan application successful")
                setLoanAmount()
                setLoanPeriod()
                setPercentageReturn()
            }
        } catch (error) {
            toast.warn(error.response.data.status)
            console.log(error)
        }
    }

    async function getGroupLoans() {
        const response = await axiosClient.get(`/group-loan-apply/${group_id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setGroupLoans(response.data)
        setLoading(false);
    }

    useEffect(() => {
        let mounted = true;
        getGroupLoans()
        return () => mounted = false;
    }, [])

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
                          <form onSubmit={applyGroupLoan}>
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

          <div className='container mt-5'>
              <div className="card groups-list">
                  <div className="card-body">
                    <p className='fw-bold fs-4'>Group Loans</p>
                      <table className="table table-hover">
                          <thead>
                              <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Group Name</th>
                                  <th scope="col">Loan Amount</th>
                                  <th scope="col">Loan Period</th>
                                  <th scope="col">Percentage Return</th>
                              </tr>
                          </thead>
                          <tbody>
                              {groupLoans.map((loan, i) => {
                                  return (
                                      <tr key={i + 1}>
                                          <th scope="row">{i + 1}</th>
                                          <td>{loan.group_id}</td>
                                          <td>{loan.loan_amount}</td>
                                          <td>{loan.loan_period}</td>
                                          <td>{loan.percentage_return}</td>
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

export default GroupLoan