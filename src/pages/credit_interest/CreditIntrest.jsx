import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

const CreditIntrest = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [investment, setInvestment] = useState(0)
    const [frequency, setFrequency] = useState()
    const [calculation, setCalculation] = useState()

    return (
        <div className='min-vh-100'>
            <NavigationBar />

            <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                <div className='fs-4 text-center w-100 mb-5'>
                    <p className='fs-2 fw-bold text-light'>Credit Interest</p>
                </div>
                <div className="card apply-loan-form" style={{ width: "30rem" }}>
                    <h3 className="text-center card-header">Credit Interest</h3>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="investment" className="form-label">% on investment</label>
                                <input type="number" className="form-control" id="investment" onChange={(e) => setInvestment(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="frequency" className="form-label">Frequency</label>
                                <select className="form-select" id='frequency' onChange={(e) => setFrequency(e.target.value)}>
                                    <option selected value={""}>Open to select</option>
                                    <option selected value="Daily">Daily</option>
                                    <option selected value="Monthly">Monthly</option>
                                    <option selected value="Weekly">Weekly</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="calculation" className="form-label">Calculation Basis</label>
                                <select className="form-select" id='calculation' onChange={(e) => setCalculation(e.target.value)}>
                                    <option selected value={""}>Open to select</option>
                                    <option selected value="360 days">360 days</option>
                                    <option selected value="365 days">365 days</option>
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

export default CreditIntrest