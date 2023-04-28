import { React, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { toast } from 'react-toastify'
import './CreateGroup.css'

const CreateGroup = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const [groupTypesChoices, setGroupTypesChoices] = useState([])
    const [groupType, setGroupType] = useState('')
    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')
    const [groupStatus, setGroupStatus] = useState('')

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

    useEffect(() => {
        let mounted = true;
        getGroupTypes()
        return () => mounted = false;
    }, [])

    const createGroup = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/group',
                JSON.stringify({
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
                toast.success("Group created successfully")
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

    return (
        <div className='create-group-bg'>
            <div className='create-group-content'>
                <div className="pb-2">
                    <NavigationBar />
                </div>

                <div className='bg-div d-flex flex-column justify-content-center text-light align-items-center pt-2'>
                    <div className='fs-4 text-center w-100'>
                        <p className='fs-2 fw-bold'>Create Group</p>
                        <p>
                            Create a group, invite members and start saving for a better future
                        </p>
                    </div>
                </div>

                <div className="card mx-auto create-group-form" style={{ width: "35rem" }}>
                    <h3 className='card-header text-center'>Group Form</h3>
                    <div className="card-body">
                        <form onSubmit={createGroup} className=''>
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
                                <input type="text" className="form-control" id="groupName" onChange={(e) => { setGroupName(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="groupDescription">Group Description</label>
                                <input type="text" className="form-control" id="groupDescription" onChange={(e) => { setGroupDescription(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="groupStatus" className="form-label">Group Status</label>
                                <select className="form-select" id='groupStatus' name='groupStatus'
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
            </div>
        </div>
    )
}

export default CreateGroup