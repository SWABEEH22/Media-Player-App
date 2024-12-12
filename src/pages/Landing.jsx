import React from 'react'
import landingImg from '../assets/CH7i.gif';
import Card from 'react-bootstrap/Card';
import depositphotos from '../assets/depositphotos_247749738-stock-illustration-technology-computer-screen-cartoon-removebg-preview.png';
import fileimage from '../assets/png-transparent-video-camera-folder-play-folder-video-camera-file-play-button-folder-folder-file-3d-icon-thumbnail-removebg-preview.png';
import watchhistory from '../assets/528-5288626_click-to-watch-video-hd-png-download-removebg-preview.png'
import { Link } from 'react-router-dom';



function Landing() {
  return (
   <>   
   <div className='container mt-5'>

      <div className='row align-items-center my-5'>
        <div className='col-lg-5'>
          <h3 style={{ fontFamily: "Antonio" }}>Welcom to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-4'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum fugit impedit aut dicta accusamus sint commodi, suscipit est dignissimos vitae laboriosam? Alias deleniti eaque consequatur natus sequi blanditiis eligendi!</p>

          <Link to={'/home'}><button className='btn btn-warning'>Get Started</button></Link>
        </div>
        <div className='col-lg'>

        </div>
        <div className='col-lg-6'>
          <img style={{ width: '32rem',height:'500px' }} className='ms-5' src={landingImg} alt="" />

        </div>
      </div>

      {/*feutures*/}

      <div className='container mt-5'>
        <h3 style={{ fontFamily: "Antonio" }} className='text-warning text-center'>Feutures</h3>

        <div className='row mt-4'>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem',height:'400px' }} className='p-3'>
              <Card.Img variant="top" style={{height:'250px'}} src={depositphotos} alt=""/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload view and remove the videos
                </Card.Text>
            
              </Card.Body>
            </Card>

          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem',height:'400px' }} className='p-3'>
              <Card.Img variant="top" style={{height:'250px'}} src={fileimage} alt=""/>
              <Card.Body>
                <Card.Title>Categorized Videos</Card.Title>
                <Card.Text>
                  Users can catogorize the video by drag and drop features
                </Card.Text>
            
              </Card.Body>
            </Card>

          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem',height:'400px' }} className='p-3'>
              <Card.Img variant="top" style={{height:'250px'}} src={watchhistory} alt=""/>
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all video
                </Card.Text>
            
              </Card.Body>
            </Card>

          </div>

        </div>

      </div>

    </div>
    

    <div className='container border border-3 border-white rounded p-3 mt-5'>
    <div className='row'>

      <div className='col-lg'>
        <div>
          <p><span className='fs-5'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe quasi nulla culpa vitae adipisci quia corrupti dolor inventore quod? Fugit impedit dolores maiores, tempore sint odio. Fugit, pariatur optio!</p>
        </div>
        <div>
          <p><span className='fs-5'>Categorize Video :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe quasi nulla culpa vitae adipisci quia corrupti dolor inventore quod? Fugit impedit dolores maiores, tempore sint odio. Fugit, pariatur optio!</p>
        </div>
        <div>
          <p><span className='fs-5'>Manage History :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe quasi nulla culpa vitae adipisci quia corrupti dolor inventore quod? Fugit impedit dolores maiores, tempore sint odio. Fugit, pariatur optio!</p>
        </div>

      </div>

      <div className='col-lg '>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TDPsg54Q2B4?si=JvsU2i_xbseheTpp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>

    </div>
    </div>
    </>


  )
}

export default Landing