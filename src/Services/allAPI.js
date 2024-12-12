import commonAPI from "./comonAPI";
import server_url from "./serviceUrl";


// api call for add video details,

export const addVideoAPI=async(video)=>{
return  await commonAPI("POST",`${server_url}/allVideos`,video)

}


//api call to get data

export const getVideoAPI=async()=>{
 return  await commonAPI("GET",`${server_url}/allVideos`,"")

}

//api call to delete object

export const deleteVideoAPI=async(videoId)=>{
    return  await commonAPI("DELETE",`${server_url}/allVideos/${videoId}`,{})
   
   }

// api for watch history

export const savewatchHistory=async(videoDetails)=>{
    return  await commonAPI("POST",`${server_url}/watchHistory`,videoDetails)
   
   }
// api call to get watch history

export const getHistoryAPI=async()=>{
    return  await commonAPI("GET",`${server_url}/watchHistory`,"")
   
   }

//api call to delete watch history

export const deleteHistoryAPI=async(videoId)=>{
    return  await commonAPI("DELETE",`${server_url}/watchHistory/${videoId}`,{})
   
   }

// api call to add category

export const addCategoryAPI=async(categoryDetails)=>{
    return  await commonAPI("POST",`${server_url}/category`,categoryDetails)

}
// api call to get all category

export const getCategoryAPI=async(categoryDetails)=>{
    return  await commonAPI("GET",`${server_url}/category`,"")

}

// category delete api

export const deletecategoryAPI=async(categoryId)=>{
    return  await commonAPI("DELETE",`${server_url}/category/${categoryId}`,{})
   
   }
// api call to get single video
export const getSingleVideoAPI=async(videoId)=>{
    return  await commonAPI("GET",`${server_url}/allVideos/${videoId}`,"")

}
// api call for update category
export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
    return  await commonAPI("PUT",`${server_url}/category/${categoryId}`,categoryDetails)

}

// api call to get single video
export const getSingleCategoryAPI=async(categoryId)=>{
    return  await commonAPI("GET",`${server_url}/category/${categoryId}`,"")

}