import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import HeroImage from '../../assets/6617.png'

import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Colors from '../../components/colors/Colors'

const LandingPage = () => {
  return (
    <div className='min-vh-100'>
      <div>
        <NavigationBar />
      </div>

      <div className='hero-content d-md-flex justify-content-md-between align-items-center container mt-5'>
        <div className="hero-text text-light">
          <p className="fs-2 fw-bold">
            Community Banking
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quam quod suscipit perferendis aut rerum dolores possimus, ratione iure rem tempora distinctio ex. Quibusdam, cupiditate suscipit commodi, repudiandae dolorum beatae quas nesciunt officiis praesentium reprehenderit eius eaque, nihil soluta! Unde eveniet magnam praesentium quibusdam dicta? Molestias possimus molestiae iure alias.
          </p>

          <div className='mt-5'>
            <Link to={"/signup"}>
              <button type='button' className="btn text-light fs-5 me-4 w-25" style={{ backgroundColor: Colors.SECONDARY }}>Sign up</button>
            </Link>
            <Link to={"/signin"}>
              <button type='button' className="btn btn-outline-success text-light fs-5 w-25" style={{ borderColor: Colors.SECONDARY }}>Sign in</button>
            </Link>
          </div>
        </div>
        <div className="hero-svg">
          <img src={HeroImage} alt="" srcset="" className='img-fluid' />
        </div>
      </div>


      <div class="navbar fixed-bottom text-light py-2" style={{ backgroundColor: Colors.SECONDARY }}>
        <div className='text-light d-flex flex-column mx-auto text-center'>
          <p className="fw-bold text-center fs-5">Supporting Over 8 payment options</p>

          <div className="d-flex text-center mx-auto">
            <div className='me-4'>
              <i class="bi bi-paypal"></i> <span>PayPal</span>
            </div>
            <div>
              <i class="bi bi-credit-card"></i> <span>Credit Card</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage