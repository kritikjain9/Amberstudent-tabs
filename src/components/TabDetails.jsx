// Imports:
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';


// Exports:
export const TabDetails = () => {
    const [loading, setIsLoading] = useState(true);
    const [cityData, setCityData] = useState([]);

    const params = useParams()
    const { id } = params;

    useEffect(() => {
        async function fetchDetails() {
            try {
                setIsLoading(true)
                const res = await axios.get(`https://base.amberstudent.com/api/v0/inventories?limit=10&sort_key=available&sort_order=desc&only=name&location_name=${id}`)
                const response = await res.data;

                setCityData(response.data.result);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.log(err);
            }
        }

        fetchDetails();
    }, [id])

    const elements = cityData.map(place => {
        return <ul cursor={"pointer"} key={place.name}>
            {place.name}
        </ul>
    })


    return (
        <div className="util__center">
            {loading ? <>
                <ReactLoading type='balls' color={"#f06673"} />
            </>
                :
                <>
                    {
                        cityData.length === 0 ? (
                            <h3 className='util__font'>No housings available at the moment :)</h3>
                        ) : (
                            <>
                                {elements}
                            </>
                        )
                    }
                </>
            }
        </div>
    )
}
