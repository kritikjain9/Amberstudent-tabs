import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TabDetails = () => {

    const [loading, setIsLoading] = useState(true);
    const [countryData, setCountryData] = useState([]);

    const params = useParams()
    const { id } = params;
    console.log("params are", params);

    useEffect(() => {

        async function fetchDetails() {
            try {
                setIsLoading(true)
                const res = await axios.get(`https://base.amberstudent.com/api/v0/inventories?limit=10&sort_key=available&sort_order=desc&only=name&location_name=${id}`)
                const response = await res.data;
                setCountryData(response.data.result);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.log(err);
            }
        }

        fetchDetails();
    }, [id])

    const elements = countryData.map(place => {
        return <ul key={place.name}>
            {place.name}
        </ul>
    })


    return (
        <div>
            {loading ? (
                <div className="loading">Loading....</div>
            ) : (
                <>
                    {elements}
                </>
            )}
        </div>
    )
}

export default TabDetails