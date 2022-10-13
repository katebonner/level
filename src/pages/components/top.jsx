import React from 'react';
import { useQuery } from 'react-query';
import queryTop from '../../api/queryTop';


const Top = () => {
  
  const { data, isLoading } = useQuery('top', async () => await queryTop());


    return ( <></>
      // <> {isLoading ?  <h1>loading...</h1> :
      //     data?.items.map(item => (
      //     <div key={item.id} className='col-5'>
      //       <img src={item.album.images[0].url} height='50px' width='50px' className='border-radius' alt='album'/> 
      //       {/* {item.name} */}
      //     </div>))}
      // </>
    )
}

export default Top;