import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';




function Add({setAddVideoResponse}) {

    // state for video details
    const [videoDetails, setVideoDetails] = useState({ caption: "", imageUrl: "", youtubeUrl: "" })
    console.log(videoDetails);

    //modal
    const [isinvalidUrl, setInvalidUrl] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    //chack youtube url

    const getEmbedUrl = (url) => {

        if (url.includes('v=')) {

            const videoId = url.split('v=')[1].slice(0,11)
            console.log(videoId);

            setVideoDetails({ ...videoDetails, youtubeUrl: `https://www.youtube.com/embed/${videoId}` })
            setInvalidUrl(false)
        }
        else {
            setInvalidUrl(true)
            setVideoDetails({ ...videoDetails, youtubeUrl: "" })
        }


    }

    const uploadData = async() => {
        const { caption, imageUrl, youtubeUrl } = videoDetails

        if (caption && imageUrl && youtubeUrl) {

              try{
            const result= await addVideoAPI(videoDetails)
             if (result.status>=200 && result.status<300){
                toast.success(`${result.data.caption} added to your collection`)
                setAddVideoResponse(result.data)
                handleClose()
             }
            
          }
          catch(err){
          console.log(err);
          
          }
            

        }
        else {
            toast.warning("please enter the field competely")
        }
    }


    return (
        <>

            <div>

                <h5>Add New Video <button className='btn btn-warning fs-5 ms-3 rounded-circle' onClick={handleShow}>+</button></h5>

            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <div className='border border-3 border-info p-3 rounded'>

                        <FloatingLabel controlId="caption" label="Caption Url" className="mb-3">
                            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Caption" />
                        </FloatingLabel>
                        <FloatingLabel controlId="image" label="Image Url" className="mb-3">
                            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="Image Url" />
                        </FloatingLabel>
                        <FloatingLabel controlId="url" label="Youtube Url" className="mb-3">
                            <Form.Control onChange={e => getEmbedUrl(e.target.value)} type="text" placeholder="Youtube Url" />
                        </FloatingLabel>

                        {isinvalidUrl &&
                            <div className='text-danger mt-3'>
                                Invalid Url
                            </div>
                        }
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={uploadData} >Upload</Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default Add