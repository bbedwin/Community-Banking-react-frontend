import { React, useContext, useState } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import './Login.css'
import lion from '../../assets/11334.png'

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

            console.log(response.data)

            setAuthToken(response.data.access)

            const userInfo = jwt_decode(response.data.access).userInfo

            setUserInfo(userInfo)

            navigate('/dashboard')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login-page container">
            <div className="left-card text-light">
                <div className="parent-card card bg-dark d-flex justify-content-between flex-column p-5">
                    <div>
                        <h1 className="fw-light">
                            Banking That's Always on Your Side
                        </h1>

                        <p className='mt-4 text-start '>
                            Community Bank is here to Secure your family's future and present in times of need.
                        </p>
                    </div>


                    <div className='bg-success rounded text-start p-3'>
                        <p>
                            Community Banking is a great platform which helped me manage my loans and finances within my close friends and family. I made good use of tracking loans and establishing finacial goals that are easy to follow
                        </p>

                        <p className="text-left fst-italic fw-bold mt-2">~ John Doe</p>
                    </div>
                </div>


            </div>

            <div className="right-card">
                <div className="login-form">
                    <img src={lion} alt="" />

                    <div className='mb-4'>
                        <p className="fw-bold fs-3">Sign In</p>
                        <p className="fw-bold">Community Bank</p>
                    </div>

                    <form action="" method="post" onSubmit={signIn} className='text-start'>
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

                    <div className='mt-3'>
                        <p className='mb-3'><a href="">Forgot password?</a></p>
                        <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login