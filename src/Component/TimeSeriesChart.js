import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);







//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export default function TimeSeriesChart({ generalData, company }) {

    //select first 5 as labels
    //
    const [TS, setTS] = useState();


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: company,
            },
        },
    };
    /*   labeldata:labels,
      open:labelsRelatedData_open,
      high:labelsRelatedData_high,
      low:labelsRelatedData_low,
      close:labelsRelatedData_close,
      volume:labelsRelatedData_volume ; */


    const data = {
        labels: generalData.labeldata,
        datasets: [
            {
                label: 'Open',
                data: generalData.open,//labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'High',
                data: generalData.high,//labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(99, 255, 132)',
                backgroundColor: 'rgba(99, 255, 132, 0.5)',
            },
            {
                label: 'Low',
                data: generalData.low,//labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(0, 199, 132)',
                backgroundColor: 'rgba(0, 199, 132, 0.5)',
            },
            {
                label: 'Close',
                data: generalData.close,//labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(132, 99, 255)',
                backgroundColor: 'rgba(132, 99, 255), 0.5)',
            },
            /*   {
                  label: 'Dataset 2',
                  data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
              }, */
        ],
    };
    // console.log(labelsRelatedData)

    return <Line options={options} data={data} />;
}
