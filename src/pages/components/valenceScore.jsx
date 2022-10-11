import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import queryValence from '../../api/queryValence';
import { Doughnut } from 'react-chartjs-2';
import { Chart , ArcElement } from 'chart.js';

Chart.register(ArcElement);

const ValenceScore = () => {

    // const [ myDifference, setMyDifference ] = useState(46);
    // const [ myDonutData, setMyDonutData ] = useState();
    const natAvg = 46;

    const { data, isLoading } = useQuery('valence', async () => await queryValence());
    
    // useEffect(() => {
        // CALCULATE MY AVG VALENCE VALUE
        // var sum = 0;
        // for (let i=0; i<data?.length; i++) {
        //     sum += data[i];
        // }
        // var avg = sum/data?.length;
        // var percent = Math.trunc(avg*100);
        // setMyPercent(percent);

        // COMPARE WITH STATIC NATIONAL AVG VALUE
        var difference = Math.abs(natAvg - data);
        // setMyDifference(difference);


    //     // POPULATE CHART WITH DATA
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
    // }, []);
    
      return (
          <> { isLoading ? <><h1>loading...</h1></> : <>
          <div className='shrink floating2'>
            {data < natAvg ?
            <h3>your valence level is {difference}% lower than the national average</h3>
            : <h3> </h3> }
            {data === natAvg ?
            <h3>your valence level is equal to the national average</h3>
            : <h3> </h3> }
            {data > natAvg ?
            <h3>your valence level is {difference}% higher than the national average</h3>
            : <h3> </h3> }
          </div>
          <div className='padding-large floating'> 
            <Doughnut data={valenceData} ></Doughnut>
            <div className='center'>{data}%</div>
          </div> 
          </>
          }
          </>
      )
  }
  
  export default ValenceScore;