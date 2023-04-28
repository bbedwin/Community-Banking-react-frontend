import { React, useContext, useState, useEffect } from 'react'
import ProjectContext from '../../context/MainContext'
import './Dashboard.module.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const Dashboard = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const [transactions, setTransactions] = useState([])
    const [isLoading, setLoading] = useState(true)

    let initialValue = 0
    console.log(userInfo)

    async function getMemberTransactions() {
        try {
            const response = await axiosClient.get(`/get-member-saved-amount/?user_id=${userInfo.user_id}`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            console.log(response.data)
            setTransactions(response.data)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let mounted = true;
        getMemberTransactions()
        return () => mounted = false;
    }, [])

    return (
        <div className='min-vh-100'>
            <div className="navigation w-100 pb-2">
                <NavigationBar />
            </div>

            <div className="dashboard-content container text-light bg-transparent pt-3 px-4">

                <div>
                    <span className="fs-2 fw-light">Welcome back <span className="fw-bold">Member</span>,</span>
                    <br />
                    <span>Here's a summary of your activities in the last few days.</span>
                </div>

                <div className="cards d-md-flex justify-content-md-between align-items-center mt-5">
                    <div className="card text-center mx-auto mb-3" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <Link to={"/groups"}>
                            <div className="card-body">
                                <i className="bi bi-people fs-2"></i>
                                <br />
                                <span>Total Groups</span>
                                <p className="fw-bold fs-4">4</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card text-center mx-auto w-md-100 mb-3" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <div className="card-body">
                            <i className="bi bi-cash-stack fs-2"></i>
                            <br />
                            <span>Total Contributions</span>
                            <p className="fw-bold fs-4">KES {
                                transactions.reduce((accumulator, curValue) => {
                                    return accumulator + curValue.pay_amount
                                }, initialValue)
                            }</p>
                        </div>
                    </div>
                    <div className="card text-center mx-auto w-md-100 mb-3" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <div className="card-body">
                            <i className="bi bi-cash fs-2"></i>
                            <br />
                            <span>Total Loan</span>
                            <p className="fw-bold fs-4">KES 0</p>
                        </div>
                    </div>
                    <div className="card text-center mx-auto w-md-100" style={{backgroundColor: Colors.SECONDARY, width: "15rem"}}>
                        <div className="card-body">
                            <i className="bi bi-piggy-bank fs-2"></i>
                            <br />
                            <span>Total Repaid</span>
                            <p className="fw-bold fs-4">KES 0</p>
                        </div>
                    </div>
                </div>

                <div className="transactions-table card mt-5">
                    <p className="fw-bold fs-3 text-start text-dark px-4 py-2">Recent Transactions</p>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Group</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Transaction ID</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transactions.slice(0,10).map((transaction, i) => {
                                        return (
                                            <tr key={i + 1}>
                                                <th scope="row">{i+1}</th>
                                                <td>{transaction.group_id}</td>
                                                <td>{transaction.pay_amount}</td>
                                                <td>{transaction.transaction_id}</td>
                                                <td>{transaction.created_at.slice(0,10)}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard