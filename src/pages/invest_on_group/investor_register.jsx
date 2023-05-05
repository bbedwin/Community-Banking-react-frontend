import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

const InvestorRegisterGroup = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [paymentMode, setPaymentMode] = useState([])
    const [groups, setGroups] = useState([])
    const [investorGroups, setInvestorGroups] = useState([])
    const [chooosenMode, setChoosenMode] = useState()
    const [loanAmount, setLoanAmount] = useState('')

    async function getAllGroups() {
        const response = await axiosClient.get('/group',
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setGroups(response.data)
    }

    async function getAllInvestorGroups() {
        const response = await axiosClient.get(`/investor-registration/${userInfo.user_id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setInvestorGroups(response.data)
    }

    async function registerInvestor(group_id) {
        try {
            const response = await axiosClient.post('/investor-registration/',
                JSON.stringify({
                    "group_id": group_id
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        let mounted = true;
        getAllGroups()
        getAllInvestorGroups()
        return () => mounted = false;
    }, [])

    return (
        <div className='min-vh-100'>
            <NavigationBar />

            <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                <div className='fs-4 text-center w-100 mb-5'>
                    <p className='fs-2 fw-bold text-light'>"An investment in knowledge pays the best interest" </p>
                </div>

                <div className="investor-groups-list w-50">
                    <p className="fs-3 text-center text-light">You're an investor in the following groups</p>
                    <div className="card">
                        <div className="card-body">
                            <ol class="list-group list-group-numbered">
                                {
                                    investorGroups?.map((group, i) => {
                                        return (
                                            <li class="list-group-item" key={i}>
                                                <Link to="/invest-contribute" className='text-primary'>
                                                    {group.group_name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="mt-3 w-50">
                    <p className="fs-3 text-center text-light">Groups List</p>

                    <div className="container">
                        {
                            groups?.map((group, i) => {
                                return (
                                    <div className="card mb-3">
                                        <p className="fw-bold fs-4 card-header">
                                            Name: {group.group_name} <br />
                                            Members: {group.group_trustees.length} <br />
                                            Credit Score: 8
                                        </p>
                                        <div className="card-body">
                                            <p>
                                                {group.group_description}
                                            </p>

                                            <button type='button' className="btn btn-primary" onClick={() => registerInvestor(group.id)}>Become an investor</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorRegisterGroup