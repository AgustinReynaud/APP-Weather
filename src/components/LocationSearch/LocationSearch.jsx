import React, { useState } from 'react'
import { apiKey } from '../../constants';

const LocationSearch = ({onCityFound}) => {

    const [zipCode, setZipCode] = useState('')
    const getLocation = (zip) => {
        console.log(zip)
        const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${zip}`;
        fetch(url)
            .then(res => res.json())
            .then(res => res.find(l => l.Country.ID  === 'US'))
            .then(res => onCityFound({
                name: res.LocalizedName,
                key: res.Key,
                state: res.AdministrativeArea.ID
            }));
    }

    return (
        <div>
            <input
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}

            />
            <button onClick={() => getLocation(zipCode)}> Search</button>
        </div>
    )
}

export default LocationSearch
