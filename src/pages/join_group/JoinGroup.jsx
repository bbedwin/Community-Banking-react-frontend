import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './JoinGroup.css'

const JoinGroup = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const [inviteCode, setInviteCode] = useState('')

    const joinGroup = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/group-trustee-registration/',
                JSON.stringify({
                    "invite_code": inviteCode
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )

            navigate(`/group/${response.data.data.id}`)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='join-group-bg'>
            <div className='content'>
                <div className="pb-2">
                    <NavigationBar />
                </div>

                <div className='bg-div d-flex flex-column justify-content-center text-light align-items-center pt-2'>
                    <div className='fs-4 text-center w-100'>
                        <p className='fs-2 fw-bold'>Join Group</p>
                        <p>
                            Join a group, start saving or request a loan for a better future
                        </p>
                    </div>
                </div>
                <div className="card mx-auto" style={{ width: "35rem" }}>
                    <h3 className="card-header">Join a Group</h3>
                    <div className="card-body">
                        <form onSubmit={joinGroup}>
                            <div className="mb-3">
                            </div>
                            <div className="mb-3">
                                <label htmlFor="invite-code" className="form-label">Invite Code</label>
                                <input type="text" placeholder='Enter an invite code' onChange={(e) => setInviteCode(e.target.value)} className="form-control" id="invite-code" />
                            </div>

                            <div className="mx-auto text-center">
                                <button type='submit' className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinGroup