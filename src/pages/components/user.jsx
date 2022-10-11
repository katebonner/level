import React from 'react';
import { useQuery } from 'react-query';
import queryMe from '../../api/queryMe';


const User = () => {
  
  const { data, isLoading } = useQuery('me', async () => await queryMe());
  
    return (
      <>
        {isLoading ?  <h1>loading...</h1> :
          <>
          <div key={data?.id} className='me-container'>
          <div>
            <h1 className='floating'>{data?.display_name}</h1>
            <img className='wave floating2' src={require('../../assets/wave.png')} alt='sin wave'/>
            </div>
            <img className='border-radius margin-medium floating3' src={data?.images[0].url} alt='profile'/> 
          </div> 
          </>}
      </>
    )
}

export default User;