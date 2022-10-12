import React from 'react';
import { useQuery } from 'react-query';
import queryValence from '../../api/queryValence';
import { Doughnut } from 'react-chartjs-2';
import { Chart , ArcElement } from 'chart.js';

Chart.register(ArcElement);

const ValenceScore = () => {

    const natAvg = 46;
    const { data, isLoading } = useQuery('valence', async () => await queryValence());
    var difference = Math.abs(natAvg - data);
    
   
    const valenceData = {
        labels: [
            'score',
            'transparent'
        ],
        datasets: [{
            label: 'valence',
            data: [data, 100 - data],
            backgroundColor: [
              '#dd2302',
              'rgb(255, 255, 255, 0)',
            ],
            hoverOffset: 3,
        }]
    };

    
      return (
        <> { isLoading ? <><h1>loading...</h1></> : 
        <div className='container'>
          <div className='third-width floating'> 
            <Doughnut data={valenceData} ></Doughnut>
          </div> 
          <div className='center floating2'>
          <div className='center percentage'>{data}%</div>
            {data < natAvg ?
            <h3>your valence level is {difference}% lower than the national average :(</h3>
            : <h3> </h3> }
            {data === natAvg ?
            <h3>your valence level is equal to the national average :0</h3>
            : <h3> </h3> }
            {data > natAvg ?
            <h3>your valence level is {difference}% higher than the national average :)</h3>
            : <h3> </h3> }
          </div>
          </div>
          }
          </>
      )
  }
  
  export default ValenceScore;