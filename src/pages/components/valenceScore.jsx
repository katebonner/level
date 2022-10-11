import React from 'react';
import { useQuery } from 'react-query';
import queryValence from '../../api/queryValence';
import { Doughnut } from 'react-chartjs-2';
import { Chart , ArcElement } from 'chart.js';

Chart.register(ArcElement);

const ValenceScore = () => {

    const { data, isLoading } = useQuery('valence', async () => await queryValence());

    let valenceValues = data?.audio_features.map((track) => {
        return track.valence
    })


    // CALCULATE MY AVG VALENCE VALUE
    var sum = 0;
    for (let i=0; i<valenceValues; i++) {
        console.log("valence: "+valenceValues[i]);
        sum += valenceValues[i];
    }
    var avg = sum/valenceValues.length;
    var percent = Math.trunc(avg*100);

 
    // COMPARE WITH NATIONAL AVG
    const natAvg = 46;
    var difference = Math.abs(natAvg - percent);

    
    const valenceData = {
        labels: [
            'score',
            'transparent'
          ],
        datasets: [{
            label: 'valence',
            data: [percent, 100 - percent],
            backgroundColor: [
              '#dd2302',
              'rgb(255, 255, 255, 0)',
            ],
            hoverOffset: 3,
        }]
    };
    
    
      return (
          <>
          <div className='shrink floating2'>
            {percent < natAvg ?
            <h3>your valence level is {difference}% lower than the national average</h3>
            : <h3> </h3> }
            {percent === natAvg ?
            <h3>your valence level is equal to the national average</h3>
            : <h3> </h3> }
            {percent > natAvg ?
            <h3>your valence level is {difference}% higher than the national average</h3>
            : <h3> </h3> }
          </div>
          <div className='padding-large floating'> 
            <Doughnut data={valenceData} ></Doughnut>
            <div className='center'>{percent}%</div>
          </div>
          </>
      )
  }
  
  export default ValenceScore;