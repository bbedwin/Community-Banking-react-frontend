import { React, useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import './Loans.css'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

const Loans = () => {
    const { authToken, userInfo } = useContext(ProjectContext)

    const location = useLocation()
    const { admin } = location.state

    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(true)

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

    useEffect(() => {
        let mounted = true;
        getMemberLoans()
        return () => mounted = false;
    }, [])

    return (
        <div className='min-vh-100'>
            <NavigationBar />

            <div className='container'>
                <div className="text-light">
                    <p className="fw-bold fs-2">{loans?.length || 0} Loan(s)</p>
                </div>

                <div>
                    <div className="card groups-list">
                        <div className="card-body">
                            <p className="fs-4 ps-4 fw-bold">Your Loans</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Group Name</th>
                                        <th scope="col">Loan Amount</th>
                                        <th scope="col">Loan Status</th>
                                        <th scope="col">Credit Status</th>
                                        {
                                            admin == userInfo.user_id
                                                ?
                                                <th scope="col">Action</th>
                                                :
                                                null
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {loans.map((loan, i) => {
                                        return (
                                            <tr key={i + 1}>
                                                <th scope="row">{i + 1}</th>
                                                <td>
                                                    {loan.group_name}
                                                </td>
                                                <td>{loan.loan_amount}</td>
                                                <td>{loan.is_approved ? "Approved" : "Not Approved"}</td>
                                                <td className='fw-bold text-success btn'>Good</td>
                                                {
                                                    admin == userInfo.user_id
                                                        ?
                                                        <td>{
                                                            loan.is_approved
                                                                ?
                                                                "Approved"
                                                                :
                                                                <button type='button' className='btn btn-success'>Approve</button>
                                                        }</td>
                                                        :
                                                        null
                                                }
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Loans