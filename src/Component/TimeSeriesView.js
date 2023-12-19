import { useEffect, useState } from 'react'
import './TimeSeriesView.css'
import TimeSeriesMetaData from './TimeSeriesMetaData'
import TimeSeriesChart from './TimeSeriesChart'
import TimeSeriesGradientChart from './TimeSeriesGradientChart'

export default function TimeSeriesView({ data, company }) {

    const [metaData, setMetaData] = useState()
    const [TS, setTS] = useState([])
    const [volumeData, setVolumeData] = useState([])

    useEffect(() => {


        if (data) {
            setMetaData(data["Meta Data"]);
            let prem_arr = [];
            let arr = [];
            for (const [key, value] of Object.entries(data)) {
                // console.log(key, value);
                prem_arr.push({ key: key, value: value })
                // setTS((prev) => [...prev, { key: key, value: value }])
            }
            console.log(prem_arr)
            for (const [key, value] of Object.entries(prem_arr[1].value)) {
                // console.log(key, value);
                arr.push({ key: key, value: value })
                // setTS((prev) => [...prev, { key: key, value: value }])
            }
            let labels = [];
            let labelsRelatedData_open = [];
            let labelsRelatedData_high = [];
            let labelsRelatedData_low = [];
            let labelsRelatedData_close = [];
            let labelsRelatedData_volume = [];

            arr.map((data) => {
                labels.push(data.key)
                labelsRelatedData_open.push(Number(data.value["1. open"]))
                labelsRelatedData_high.push(Number(data.value["2. high"]))
                labelsRelatedData_low.push(Number(data.value["3. low"]))
                labelsRelatedData_close.push(Number(data.value["4. close"]))
                labelsRelatedData_volume.push(Number(data.value["5. volume"]))
            });
            let generalData = {
                labeldata: labels,
                open: labelsRelatedData_open,
                high: labelsRelatedData_high,
                low: labelsRelatedData_low,
                close: labelsRelatedData_close,
                volume: labelsRelatedData_volume
            }

            let volumeData = {
                labeldata: labels,
                volume: labelsRelatedData_volume
            }
            setVolumeData(volumeData)
            setTS(generalData);



        }

    }, [data])


    return (<>
        <div className="view_container">
            {metaData ?
                (
                    <>
                        <div className='metadata'>
                            <TimeSeriesMetaData data={metaData} />
                        </div>
                        <div className='viewdata'>

                            <div className='lineplot'>
                                <TimeSeriesGradientChart
                                    volumeData={volumeData}
                                    company={company}

                                />
                            </div>
                            <div className='lineplot'>
                                <TimeSeriesChart
                                    generalData={TS}
                                    company={company} /></div>



                        </div>


                    </>


                )

                : ""}
        </div>
    </>)
}