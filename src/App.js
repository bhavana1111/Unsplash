

import './App.css';
import axios from "axios";
import Images from './images';
import React, { useEffect } from 'react';
import {useState} from 'react';
//Z9vIs0Vzn-FiCoj6z0fKn9f8W4W2cZKAQKEivlFyX6k
function App(){
  //search box
  const [search,setSearch]=useState("");
  const [photos,setPhotos]=useState([]);
  const [toggle,setToggle]=useState(false);
  function getPhotosonSearch()
  {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=Z9vIs0Vzn-FiCoj6z0fKn9f8W4W2cZKAQKEivlFyX6k`)
    .then((response)=>{
      setPhotos(response.data.results);
      setToggle(true);
    })
  }
  
  return ( 
    <>
    <input 
       type="text"
       value={search}
       className='input-box'
       onChange={(e)=>{setSearch(e.target.value)}}/>
       <button className="button" 
       type='submit' onClick={()=>{getPhotosonSearch() }}>Get Images</button> 
     {search!==""?<div className='gallery'>
         {photos.map((photo)=>{
           return(
             <img src={photo.urls.small}  />
           )
         }) }</div>:<Images/>}
      
           </>

  );
}

export default App;


/** <input 
       type="text"
       value={search}
       className='input-box'
       onChange={(e)=>{setSearch(e.target.value)}}/>
       <button className="button" 
       type='submit'>Get Images</button> 
       {console.log(photos.length)}
    //</div> **/