import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: '250px' }} className='container mt-5 w-100'>
      <div className='d-flex justify-content-between flex-wrap'>
        <div style={{ width: '400px' }}>

          <h5>
            <i class="fa-solid fa-music me-3"></i>
            Meadia Player </h5>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda maxime veritatis accusamus dolorem libero aperiam ducimus autem cupiditate nulla ipsam alias, obcaecati in provident nobis vitae minima ab eos eius.</p>
          <p>code liscensed luminar</p>
          <p>currently v5.3.2</p>

        </div>

        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>History</Link>

        </div>
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>React bootstrap</Link>
          <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>React Router</Link>



        </div>
        <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input className='form-control' type="text" placeholder='Enter the email' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>



          <div className='d-flex justify-content-between mt-3'>
            <a href="" className='text-white fs-5'><i class="fa-brands fa-facebook"></i></a>
            <a href="" className='text-white fs-5'><i class="fa-brands fa-twitter"></i></a>
            <a href="" className='text-white fs-5'><i class="fa-brands fa-instagram"></i></a>
            <a href="" className='text-white fs-5'><i class="fa-brands fa-linkedin"></i></a>
            <a href="" className='text-white fs-5'><i class="fa-brands fa-github"></i></a>
            <a href="" className='text-white fs-5'><i class="fa-solid fa-phone"></i></a>

          </div>
        </div>

      </div>
      <p className='text-center mt-5 fw-bold pb-5'>Copyright &copy; lantru, Media Player .Built with react</p>

    </div>

  )
}

export default Footer