import { React, useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { toast } from 'react-toastify'

const GroupUpdate = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    let { id } = useParams();

    const [groupTypesChoices, setGroupTypesChoices] = useState([])
    const [groupType, setGroupType] = useState()
    const [groupName, setGroupName] = useState()
    const [groupDescription, setGroupDescription] = useState()
    const [groupStatus, setGroupStatus] = useState()
    const [groupDetails, setGroupDetails] = useState()
    const [loanPeriod, setLoanPeriod] = useState(0)
    const [interestRate, setInterestRate] = useState(0)
    const [otherFees, setOtherFees] = useState(0)
    const [loanRepayments, setLoanRepayments] = useState('')

    async function getGroupTypes() {
        const response = await axiosClient.get('/group_type',
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        setGroupTypesChoices(response.data)
    }

    async function getGroupDetails() {
        const response = await axiosClient.get(`/get-group-detail-by-id/${id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
        setGroupDetails(response.data)
        setLoading(false);
    }

    const createGroupLoanELigibity = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/groupasdsd',
                JSON.stringify({
                    "group_id": id,
                    "loan_period": loanPeriod,
                    "interest_rate": interestRate,
                    "other_fees": otherFees,
                    "loan_repayments": loanRepayments
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )

            if (response.status == 200) {
                navigate(`/group/${id}`)
                toast.success("Group Details updated successfully")
            }
        } catch (error) {
            console.log(error)
            toast.success(error.response.data)
        }
    }

    const updateGroup = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/groupasdsd',
                JSON.stringify({
                    "group_id": id,
                    "group_type": groupType,
                    "group_name": groupName,
                    "group_description": groupDescription,
                    "group_admin": userInfo.user_id,
                    "group_status": groupStatus
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )

            if (response.status == 201) {
                toast.success("Group updated successfully")
                navigate('/groups')
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

    useEffect(() => {
        let mounted = true;
        getGroupTypes()
        getGroupDetails()
        return () => mounted = false;
    }, [])
    return (
        <div className='d-flex min-vh-100 flex-column'>
            <NavigationBar />

            <div className="container">
                <div className='my-4 text-center'>
                    <h3 className="text center text-light ">
                        Update Group Information and Details
                    </h3>
                </div>
                <div className="card mx-auto" style={{maxWidth: "35rem"}}>
                    <h2 className="card-header text-center">Group Details</h2>

                    <div className="card-body">
                        <form onSubmit={updateGroup} className=''>
                            <div className="mb-3">
                                <label htmlFor="groupType" className="form-label">Group Type</label>
                                <select className="form-select" id='groupType' name='groupType'
                                    onChange={(e) => { setGroupType(e.target.value) }} required={true}>
                                    <option selected value={""}>Open to select</option>
                                    {groupTypesChoices.map((type, i) => {
                                        return (
                                            <option key={i} value={type.id}>{type.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="groupName" className="form-label">Group Name</label>
                                <input type="text" className="form-control" id="groupName" defaultValue={groupDetails?.group_name} onChange={(e) => { setGroupName(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="groupDescription">Group Description</label>
                                <textarea name="groupDescription" id="groupDescription" defaultValue={groupDetails?.group_description} className='form-control' cols="30" rows="10" onChange={(e) => { setGroupDescription(e.target.value) }}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="groupStatus" className="form-label">Group Status</label>
                                <select className="form-select" id='groupStatus' name='groupStatus' defaultValue={groupDetails?.status}
                                    onChange={(e) => { setGroupStatus(e.target.value) }}>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-success">Save</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card my-4 mx-auto" style={{maxWidth: "35rem"}}>
                    <h2 className="card-header text-center">Loan Eligibity Rules</h2>

                    <div className="card-body">
                        <form onSubmit={createGroupLoanELigibity} className=''>
                            <div className="mb-3">
                                <label htmlFor="loanPeriod" className="form-label">Loan Period (weeks)</label>
                                <input type="number" className="form-control" id="loanPeriod" onChange={(e) => { setLoanPeriod(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="interestRate" className="form-label">Interest Rate</label>
                                <input type="number" className="form-control" id="interestRate" onChange={(e) => { setInterestRate(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="otherFees">Other Fees</label>
                                <input type="number" className="form-control" id="otherFees" onChange={(e) => { setOtherFees(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loanRepayments" className="form-label">Loan Repayments</label>
                                <select className="form-select" id='loanRepayments' name='loanRepayments'
                                    onChange={(e) => { setLoanRepayments(e.target.value) }}>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Semi-Annualy">Semi-Annualy</option>
                                    <option value="Per Annum">Per Annum</option>
                                </select>
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

export default GroupUpdate