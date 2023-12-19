export async function fetchData(timeseries, company) {
    let data = await fetch(`https://www.alphavantage.co/query?function=${timeseries}&symbol=${company}&interval=5min&apikey=${process.env.REACT_APP_ALPHA_V_APIKEY}`)
    data = await data.json()

    return data;

}