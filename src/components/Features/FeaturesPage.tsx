"use client";
import React from 'react';
import AutoSearch from './AutoSearch/AutoSerach';
import ImgCrousal from './ImgCrousal/ImgCrousal';

const getFeatureComponent = (name: String) => {
    switch(name){
        case 'auto-search':
            return <AutoSearch/>
        case 'crousal':
            return <ImgCrousal/>
        default:
            return null;
    }
}
export default function FeaturesPage({name}:{name:String}){
    return getFeatureComponent(name);
}