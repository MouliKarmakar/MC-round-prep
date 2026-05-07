"use client";
import React from 'react';
import AutoSearch from './AutoSearch/AutoSerach';
import ImgCrousal from './ImgCrousal/ImgCrousal';
import NestedCheckbox from './NestedCheckbox/NestedCheckbox';

const getFeatureComponent = (name: String) => {
    switch(name){
        case 'auto-search':
            return <AutoSearch/>
        case 'crousal':
            return <ImgCrousal/>
        case 'nested-checkbox':
            return <NestedCheckbox/>
        default:
            return null;
    }
}
export default function FeaturesPage({name}:{name:String}){
    return getFeatureComponent(name);
}