import React from 'react';
import { useQuery } from 'react-query';
import queryMe from '../../api/queryMe';
import { Link } from "react-router-dom";


const User = () => {
  
  const { data, isLoading } = useQuery('me', async () => await queryMe());
  
    return (
      <>
        {isLoading ? 
          <div key={data?.id} className='me-container'>
            <div>
              <h1 className='floating no-padding'>loading profile ...</h1>
              <img className='wave no-padding floating2' src={require('../../assets/wave.png')} alt='sin wave'/>
            </div>
            <Link to='/score'><button disable='true' className='valence-btn no-padding'>valence</button></Link>
            <div className='orbit circle'></div>
          </div>
        
        :
          <div key={data?.id} className='me-container'>
            <div>
              <h1 className='floating no-padding'>{data?.display_name}</h1>
              <img className='wave no-padding floating2' src={require('../../assets/wave.png')} alt='sin wave'/>
            </div>
            <Link to='/score'><button className='valence-btn no-padding'>calculate valence</button></Link>
            {data.images[0].url ? <img className='orbit' src={data.images[0].url} alt='profile'/> 
            :
            <div className='orbit circle'></div>
            }
          </div> 
        }
      </>
    )
}

export default User;