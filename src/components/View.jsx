import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getSingleCategoryAPI, getVideoAPI, updateCategoryAPI } from '../Services/allAPI'



function View({addVideoResponse,deleteVideoFesponsefromcat,setupdatecatfromView}) {
  const[allVideos,setAllVideos]=useState([])
  const [deleteVideoresponse,setDeleteVideoResponse]=useState('')
 console.log(allVideos);
 
  useEffect(()=>{
    getALLVideos()
  },[addVideoResponse,deleteVideoresponse,deleteVideoFesponsefromcat])


  const getALLVideos=async()=>{
    try{
      const result=await getVideoAPI()
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
    }
    }
    catch(err){
      console.log(err);
      
    }
  }

  const dragOverCategory=(e)=>{
    e.preventDefault()
  }
 
  const dropCategoryVideo= async(e)=>{
    const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(videoDetails ,categoryId );

    try{
      const {data}=await getSingleCategoryAPI(categoryId)
      console.log(data);
      const updatedcategoryAllvideos=data.allVideos.filter(item=>item.id!=videoDetails.id)
      console.log(updatedcategoryAllvideos);

      const {id,categoryName}=data

      const response=await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedcategoryAllvideos})
      console.log(response);
      setupdatecatfromView(response)
      const result=await addVideoAPI(videoDetails)
      console.log(result);
      getALLVideos()

      
      
    }
    catch (err){

    }
  }

  return (
    <>
    <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropCategoryVideo(e)}>

        {
          allVideos?.length>0 ?

        allVideos?.map(video=>(
          <Col key={video?.id} lg={4} sm={6} xs={12}>

          <VideoCard videoDetails={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
          </Col>
        ))
        :
        <div className='text-danger text-center'>
         Nothing to display
        </div>
        }
        
        
        
    </Row> 
    </>
  )
}

export default View