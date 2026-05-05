'use client';
import React from "react";
import BassicNav from "./Common/Navbar";
import TextCard from "./Common/TextCard";
import { ComponentsList } from "./Constants/ComponentsList";
export default function HomePage(){
    return (
         <div style={{display:'flex',alignItems:'flex-start', gap:'12px', flexWrap:'wrap'}}>
            {
                ComponentsList.map((item)=><TextCard key={item.id} data={item}/>)
            }
         </div>)
}