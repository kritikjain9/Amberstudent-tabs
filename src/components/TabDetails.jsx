import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const TabDetails = () => {

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
        return <ul key={place.name}>
            {place.name}
        </ul>
    })


    return (
        <div className="util--center">
            {loading ? <>
                <ReactLoading type='balls' color={"#f06673"} />
                {/* <h4>Loading</h4> */}
            </>
                : <>
                    {
                        cityData.length === 0 ? (
                            <h3>No housings available at the moment :)</h3>
                        ) : (
                            <>
                                    <h3>Housings available at {id}</h3>
                                {elements}
                            </>
                        )
                    }
                </>

            }
        </div>
    )
}

export default TabDetails