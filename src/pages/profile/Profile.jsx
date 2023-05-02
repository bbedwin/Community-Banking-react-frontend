import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import { toast } from 'react-toastify'
import axiosClient from '../../components/Axios'

const Profile = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const [fullName, setFullName] = useState('')
    const [photo, setPhoto] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [nationalID, setNationalID] = useState('')
    const [KRA, setKRA] = useState('')

    const updateProfile = async (e) => {
        e.preventDefault()

        console.log(authToken)

        try {
            const response = await axiosClient.put('/profile',
                JSON.stringify({
                    "full_name": fullName,
                    "phone_number": phoneNumber,
                    "national_id": nationalID,
                    "kra_pin_number": KRA,
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                }
            )
            
            if (response.status == 201) {
                toast.success("Profile updated successfully")
                navigate("/home")
            }
        } catch (error) {
            toast.warn(error.response.data)
            console.log(error)
        }
    }

    return (
        <div className='profile min-vh-100'>
            <div className='content'>
                <div className="pb-2">
                    <Navbar title={'Profile'} />
                </div>
                <div className="profile-form d-flex justify-content-center flex-column align-items-center">
                    <div className="card">
                        <h3 className='card-header text-center'>Profile</h3>
                        <div className="card-body">
                            <form onSubmit={updateProfile}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder='john doe' id="fullName" onChange={(e) => setFullName(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="photoFile" className="form-label">Photo</label>
                                    <input className="form-control" type="file" id="photoFile" onChange={(e) => setPhoto(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder='+254 71231234' id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nationalID" className="form-label">National ID</label>
                                    <input type="number" className="form-control" placeholder='12345678' id="nationalID" onChange={(e) => setNationalID(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="kraPIN" className="form-label">KRA PIN</label>
                                    <input type="text" className="form-control" placeholder='A0123445D345' id="kraPIN" onChange={(e) => setKRA(e.target.value)} required />
                                </div>
                                <button type="submit" className="btn btn-success w-100 mx-auto mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile