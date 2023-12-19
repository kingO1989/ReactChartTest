import { useState, useEffect } from "react";
import TimeSeriesView from "./TimeSeriesView";
import { fetchData } from "./utilities";
import TimeSeriesChart from "./TimeSeriesChart";


export default function SelectTimeSeries() {

    const [viewData, setViewData] = useState("");
    const [TS, setTS] = useState("TIME_SERIES_INTRADAY");
    const [company, setCompany] = useState("IBM");


    async function onChangeHandlerTS(target) {


        let timeseries
        if (target.value === undefined)
            timeseries = "TIME_SERIES_INTRADAY"
        else
            timeseries = target.value;

        setTS(timeseries);

        /*  let results = await fetchData(timeseries)
         console.log(results)
         setViewData(results) */
    }

    async function onChangeHandlerCN(target) {


        let cm
        if (target.value === undefined)
            cm = "IBM"
        else
            cm = target.value;
        setCompany(cm)



    }

    async function clickHandler() {
        let results = await fetchData(TS, company)
        console.log(results)
        setViewData(results)


    }


    useEffect(() => {

        //fetchData();

    }, [])
    return (
        <>
            <select onChange={(e) => onChangeHandlerTS(e.target)} data_test="time_series">
                <option  >Select Time series </option>
                <option value="TIME_SERIES_INTRADAY" >Intra-day</option>
                <option value="TIME_SERIES_DAILY">Daily</option>
                <option value="TIME_SERIES_DAILY_ADJUSTED">Daily adjusted</option>
            </select>
            <select onChange={(e) => onChangeHandlerCN(e.target)} data_test="company">
                <option  >Select Company </option>
                <option value="AAPL"  >AAPL	Apple Inc</option>
                <option value="MSFT"  >Microsoft Corporation</option>
                <option value="AMZN"  >Amazon.com, Inc.</option>
                <option value="NVDA"  >NVIDIA Corporation</option>
                <option value="BRK.B"  >Berkshire Hathaway Inc.</option>
                <option value="GOOGL"  >Alphabet Inc.</option>
                <option value="TSLA"  >Tesla, Inc.</option>
                <option value="META"  >Meta Platforms, Inc.</option>
                <option value="LLY"  >Eli Lilly and Company</option>
                <option value="UNH"  >UnitedHealth Group Incorporated</option>
                <option value="TSM"  >Taiwan Semiconductor Manufacturing Company Limited</option>
                <option value="JPM"  >JPMorgan Chase & Co.</option>
                <option value="AVGO"  >Broadcom Inc.</option>
                <option value="WMT"  >Walmart Inc.</option>
                <option value="XOM"  >Exxon Mobil Corporation</option>
                <option value="V"  >Visa</option>
                <option value="IBM"  >International Business Machine</option>


            </select>

            <button onClick={clickHandler} data_test="btn"> Fetch</button>

            <div data-testid={"mockview"} className="selected_view">

                <TimeSeriesView data={viewData} company={company} />

            </div>
        </>
    );
} 