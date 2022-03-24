import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";


export default function Images() {
    const [photos,setPhotos]=useState([]);
    const getPhoto=()=>{
        axios.get(`https://api.unsplash.com/collections?page=1&client_id=Z9vIs0Vzn-FiCoj6z0fKn9f8W4W2cZKAQKEivlFyX6k`)
        .then((response)=>{
          console.log("clicked");
          setPhotos(response.data);
        }
        )
      }
      useEffect(getPhoto,[]);
    return (
        <>
        <div className='gallery'>
            {
                photos.map((photo) => {
                    return <img key={photos.id} src={photo.cover_photo.urls.regular} />
                }
                )
            }
        </div>
        </>
    );
}
