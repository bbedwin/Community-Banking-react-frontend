import { React, useContext, useState } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import { toast } from 'react-toastify'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const { setAuthToken, setUserInfo } = useContext(ProjectContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('/token/',
                JSON.stringify({ email, password }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            setAuthToken(response.data.access)

            localStorage.setItem("authToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            localStorage.setItem('status', '1')

            const userInfo = jwt_decode(response.data.access)

            setUserInfo(userInfo)

            console.log(userInfo)

            toast.success("Successfully logged in");

            navigate('/home')

        } catch (error) {
            console.log(error)
            toast.warn("Invalid Email or Password");
        }
    }

    return (
        <div className="signup-form d-flex justify-content-center align-items-center min-vh-100">
            <div className="card">
                <div className="card-body">

                    <div className='mb-4 text-center'>
                        <p className="fw-bold fs-2">Sign In</p>
                        <p className="fw-bold">Community Bank</p>
                    </div>

                    <form action="" method="post" onSubmit={signIn} className='sign-in-form text-start' style={{ width: "35rem", height: "auto" }}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder='example@mail.com' id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder='password' id="password" />
                        </div>

                        <button type='submit' className="btn btn-success w-100 mt-2">Sign in</button>
                    </form>

                    <div className='mt-4 text-center'>
                        <a href="" className='text-primary'>Forgot password?</a>
                        <p>Don't have an account? <a href="/signup" className='text-primary' onClick={(e) => { e.preventDefault(); navigate('/signup') }} >Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login