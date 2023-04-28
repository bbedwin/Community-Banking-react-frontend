import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../components/Axios'
import { toast } from 'react-toastify'
import Colors from '../../components/colors/Colors'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/users',
                JSON.stringify({ email, password }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            if (response.status == 201) {
                toast.success("Successfully registered. You can now log in")
                navigate('/signin')
            }

        } catch (error) {
            console.log(error)
            toast.warning("Please provide all the required fields")
        }
    }

    return (
        <div className="signup-form d-flex justify-content-center align-items-center min-vh-100">
            <div className="card">
                <div className="card-body">
                    <div className='mb-4 text-center'>
                        <p className="fw-bold fs-2">Sign Up</p>
                        <p className="fw-bold mb-5">Community Bank</p>
                    </div>

                    <form action="" method="post" onSubmit={register} className='text-start' style={{ width: "35rem", height: "auto" }}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder='example@mail.com' id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder='password' id="password" />
                        </div>

                        <button type='submit' className="btn btn-lg w-100 mt-3 text-light fw-bold" style={{ backgroundColor: Colors.SECONDARY }}>Sign up</button>
                    </form>

                    <div className='mt-3'>
                        <p>Already have an account? <a href="/signin" className='text-primary' onClick={(e) => { e.preventDefault(); navigate('/signin') }}>Sign in</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup