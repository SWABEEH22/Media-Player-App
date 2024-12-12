import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'


function History() {
  const [history,setHistory]=useState([])
  console.log(history);


    useEffect(()=>{
      getAllHistory()
    },[])

    const  getAllHistory=async()=>{

      try{
        const result=await getHistoryAPI()
        setHistory(result.data)
      }
      catch(err){
        console.log(err);
        
      }
    
  }
   
  const deleteHistory=async(videoId)=>{

    try{
      await deleteHistoryAPI(videoId)
      getAllHistory()
      
    }
    catch(err){
      console.log(err);
      
    }

  }


  return (
    <>
    <div className='container '>
      <div className='d-flex justify-content-between'>
        <h3 className='text-warning fw-bold mt-2'>Wathch History</h3>
        <Link to={'/home'} className='text-info fw-bold text-decoration-none fs-5'>Back to <i class="fa-solid fa-house "></i></Link>

      </div>
    
      


     { 
      history?.length>0 ?
      <table className='table mt-5'>
        <thead>
          <tr >
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>

          {
            history?.map(video=>(
              <tr key={video?.id}>
            <td>{video?.id}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.youtubeUrl}>{video.youtubeUrl}</a></td>
            <td>{video?.formatedDate}</td>
            <td><button onClick={()=>deleteHistory(video?.id)}><i class="fa-solid fa-trash"></i></button></td>
            
          </tr>

            ))
          
          }
        </tbody>
      </table>
      :
      <h1>nothing to display</h1>

      
      }
      
    </div>
    
    </>
  )
}

export default History