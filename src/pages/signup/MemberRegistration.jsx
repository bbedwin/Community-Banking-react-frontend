import { React, useState } from 'react'
import '../login/Login.css'

const MemberRegistration = () => {
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
                        <p className="fw-bold fs-3">Sign Up</p>
                        <p className="fw-bold">Member Account Resgistration</p>
                    </div>

                    <form action="" method="post" onSubmit={register} className='text-start'>
                        {/* <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder='John' id="firstName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder='Doe' id="lastName" />
                        </div> */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder='example@mail.com' id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder='password' id="password" />
                        </div>

                        <button type='submit' className="btn btn-success w-100 mt-2">Sign up</button>
                    </form>

                    <div className='mt-3'>
                        <p>Already have an account? <a href="/signin" onClick={(e) => { e.preventDefault(); navigate('/signin') }}>Sign in</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberRegistration