"use client";
import React from 'react';
import AutoSearch from './AutoSearch/AutoSerach';

const getFeatureComponent = (name: String) => {
    switch(name){
        case 'auto-search':
            return <AutoSearch/>
        default:
            return null;
    }
}
export default function FeaturesPage({name}:{name:String}){
    return getFeatureComponent(name);
}