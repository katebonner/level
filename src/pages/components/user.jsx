import React from 'react';
import { useQuery } from 'react-query';
import queryMe from '../../api/queryMe';
import { Link } from "react-router-dom";


const User = () => {
  
  const { data, isLoading } = useQuery('me', async () => await queryMe());
  
    return (
      <>
        {isLoading ?  <h1>loading...</h1> :
          <>
          <div key={data?.id} className='me-container'>
          <div>
            <h1 className='floating no-padding'>{data?.display_name}</h1>
            <img className='wave no-padding floating2' src={require('../../assets/wave.png')} alt='sin wave'/>
            </div>
            <Link to='/score'><button className='valence-btn no-padding'>calculate valence</button></Link>
            <img className='orbit' src={data?.images[0].url} alt='profile'/> 
          </div> 
          </>}
      </>
    )
}

export default User;