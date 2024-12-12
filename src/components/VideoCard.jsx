import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { deleteVideoAPI, savewatchHistory } from '../Services/allAPI';






function VideoCard({videoDetails,setDeleteVideoResponse ,insidecategory}) {
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    
    const {caption,youtubeUrl}=videoDetails
    const localTime =new Date()
    const formatedDate=localTime.toLocaleString()
    console.log(formatedDate);

    const historyData={caption,youtubeUrl,formatedDate}
    try{
      await savewatchHistory(historyData)
    }
    catch(err){
      console.log(err);
      
    }
    
    
    setShow(true)

  }

  //function to delete video
  const deleteVideo=async(videoId)=>{
    
    try{
      const result=await deleteVideoAPI(videoId)
      setDeleteVideoResponse(result.data)
    }
    catch(err){
      console.log(err);
      
    }


  }

  const dragVideostarted=(e,videoId)=>{
    console.log(`on drag strted with video id ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
  }

  return (
    <>

      <Card className='mb-5 'draggable={true} onDragStart={(e)=>dragVideostarted(e,videoDetails?.id)} style={{ width: '14rem', height:'18rem'}}>
        <Card.Img onClick={handleShow} style={{ height: '190px' }} variant="top" src={videoDetails?.imageUrl} />
        <Card.Body >
          <Card.Title className='d-flex align-items-center justify-content-center' >
         <p className=' mt-2 me-3 text-white'>{videoDetails?.caption}</p>


{ !insidecategory &&
           <button onClick={()=>deleteVideo(videoDetails?.id)} className='btn' variant="primary"><i class="fa-solid fa-trash" style={{ color: 'red', fontSize: '22px' }}></i></button>
  
}
          </Card.Title>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Avesham</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="770" height="377" src={videoDetails?.youtubeUrl} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default VideoCard