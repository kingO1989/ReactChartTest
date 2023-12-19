import { useEffect, useState } from "react";

export default function TimeSeriesMetaData({ data }) {

    const [metadata, setMetadata] = useState()
    useEffect(() => {

        setMetadata(() => []);
        // console.log(data.data)
        if (data) {

            for (const [key, value] of Object.entries(data)) {
                // console.log(key, value);
                setMetadata((prev) => [...prev, { key: key, value: value }])
            }
        }
    }, [data])
    return (<>
        <h1>Meta Data Information</h1>
        {
            metadata ?
                <>
                    {metadata.map((data, key) => {

                        return <div key={key}>{data.key} {data.value}</div>
                    })}
                </>

                : ""
        }




    </>);
}