import React, { useEffect, useState } from "react";
import './ImgCrousal.css';
import { ImageList } from "./constants";

export default function ImgCrousal() {
    const [activeImg, setActiveImg]=useState(0);
    const handleNextClick=()=>{
        setActiveImg((activeImg + 1) % ImageList.length);
    }
    const handlePrev=()=>{
        if(activeImg===0){
            setActiveImg(ImageList.length-1)
        }
        else{
            setActiveImg((prev)=>prev-1);
        }
    }

useEffect(()=>{
    let timer=setTimeout(()=>{
        handleNextClick();
    },5000);

    return ()=>{
        clearTimeout(timer);
    }
},[activeImg])

  return (
    <div className="Container">
      <h1>Image Crousal Functionality</h1>
      <div className="carousel-wrapper">
        <button className="btn prev-btn" onClick={handlePrev}>Previous</button>
        <div className="img_crousal">
          {
              ImageList.map((image,i)=>{
                  return <div key={image} className="image-container" style={{display: activeImg === i ? 'block' : 'none'}} >
            <img 
              src={image} 
              alt="crousal image" 
              width={400} 
              height={350} 
            />
          </div>
              })
          }
        </div>
        <button className="btn next-btn" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
