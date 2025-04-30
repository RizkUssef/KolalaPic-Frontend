import React from 'react'
import ImagesContainer from '../ImagesContainer/ImagesContainer'

export default function SearchResult({ catName, data }) {
    console.log(data);
    console.log(catName);
    
  return <>
    <ImagesContainer catName={catName} data={data}/>
  </>
}
