import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deletecategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form } from 'react-bootstrap';
import VideoCard from './VideoCard'









function Category({setdeleteVideoResponseFromcat,updatecatefromview}) {

  //state for user
  const [categoryName, setCategoryName] = useState("")

  const [allcategory, setAllCategory] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    getAllCategory()
  }, [updatecatefromview])



  const addCategory = async () => {
    try {

      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      console.log(result);
      getAllCategory()
      handleClose()

    }
    catch (err) {

      console.log(err);


    }
  }
  const getAllCategory = async () => {
    try {


      const result = await getCategoryAPI()
      setAllCategory(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }
  const deleteCategory = async (categoryId) => {
    try {
      await deletecategoryAPI(categoryId)
      getAllCategory()
    }
    catch (err) {
      console.log(err);

    }
  }
  const dropvideo = async (e, categoryId) => {

    const videoId = e.dataTransfer.getData("videoId")
    console.log(`video id ${videoId} category id ${categoryId}`);

    try {
      const { data } = await getSingleVideoAPI(videoId)
      console.log(data);
      const selectedCategory = allcategory?.find(category => category.id == categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);

      await updateCategoryAPI(categoryId, selectedCategory)
      getAllCategory()
      const response= await deleteVideoAPI(videoId)
      setdeleteVideoResponseFromcat(response)
      
    }
    catch (err) {
      console.log(err);

    }

  }

  const dragOvercategory = (e) => {
    e.preventDefault()
  }
  
  const videoDragStarted=(e,videoDetails,categoryId)=>{
    console.log(videoDetails,categoryId);
    const shareData={videoDetails,categoryId}
    e.dataTransfer.setData("shareData",JSON.stringify(shareData))
    
  }

  return (
    <>
      <div className=' ms-5 d-flex justify-content-between w-100'>
        <h3 className='text-info'>All Category</h3>
        <button onClick={handleShow} className='btn btn-warning fs-5 fw-bold rounded-circle'>+</button>

      </div>

      {allcategory?.length > 0 ?
        allcategory?.map(category => (

          <div droppable={true} onDrop={(e) => dropvideo(e, category?.id)} onDragOver={(e) => dragOvercategory(e)} className=' border border-3 rounded border-white p-2 mt-5 ms-5 '>
           <div className='d-flex justify-content-between'>
              <h5 className='text-warning'>{category.categoryName}</h5>
              <button onClick={() => deleteCategory(category.id)} className='btn'><i class="fa-solid fa-trash"></i></button>
           </div>
           <div className='row mt-2 ms-4'>
            
            { 
            category.allVideos?.length>0 &&

            category.allVideos?.map(video=>(
              <div draggable={true} onDragStart={(e)=>videoDragStarted(e,video,category.id)} key={video?.id} className='col-lg-6'>
             
           <VideoCard videoDetails={video} insidecategory={true}/>

          </div>
            ))


            }

          
           </div>
          </div>

        ))
        :
        <div className='text-danger fw-bold mt-3'>No category Added yet</div>



      }



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-3 border-info p-3 rounded'>
            <FloatingLabel controlId="caption" label="Caption Url" className="mb-3">
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category name" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}


export default Category