import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'


function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [deleteVideoFesponsefromcat,setdeleteVideoResponseFromcat]=useState("")
  const [updatecatefromview,setupdatecatfromView]=useState("")


  return (
    <>
    <div className='container my-5 d-flex justify-content-between'>
    <Add setAddVideoResponse={setAddVideoResponse} />
    <Link to={'/history'} className='text-warning fs-5 text-decoration-none fw-bold'>Watch History</Link>
    </div>

    <div className='container my-5 row'>
      <div className='col-lg-6'>
      <h3 className='text-info'>All Videos</h3>
      <View addVideoResponse={addVideoResponse} deleteVideoFesponsefromcat={deleteVideoFesponsefromcat} setupdatecatfromView={setupdatecatfromView} />
      </div>
     

      <div className='col-lg-6'>
        <Category setdeleteVideoResponseFromcat={setdeleteVideoResponseFromcat} updatecatefromview={updatecatefromview}/>

      </div>

    </div>
    </>
  )
}

export default Home