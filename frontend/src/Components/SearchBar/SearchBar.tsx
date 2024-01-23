import React from 'react';
import { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './SearchBar.css';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { response } from 'express';
import { json } from 'stream/consumers';


export default function Search(props: { campaigns: any; getmyCampaign: any; }) {
 
    const [input,setInput]=useState("");

    const {campaigns,getmyCampaign}=props;
   


   const handleCampaign=()=>{

            //  checls made to filter the array according to search field
             getmyCampaign(campaigns,input);

   }

   const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleCampaign();
    }
  };
   



    const handleSearch=()=>{
      handleCampaign();

    }

    const handleChange=(value:any)=>{
        setInput(value);
    }

    return (
        <>
        <div className='input-wrapper search'>
        <FaSearch className='search-icon' onClick={()=>handleSearch()}/>
        <input placeholder='Search for a campaign' className='search-box' value={input} onChange={(e)=>handleChange(e.target.value)}  onKeyPress={handleKeyPress}/>
        </div>
      </>
        
    ); 
}