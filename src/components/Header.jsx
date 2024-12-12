import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import musiclogo from '../assets/music_jpeg_4x-removebg-preview.png';



function Header() {
  return (
    <>
     <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>   
           <Navbar.Brand style={{color:"white",fontSize:'30px',fontWeight:'bold'}}>
           <img style={{width:"100px"}} src={musiclogo} alt="" />
            Media Player
          </Navbar.Brand>
          </Link>
          </Container>
      </Navbar>

    </>
  )
}

export default Header