import React from 'react'

const WeatherDay = ({ min, max, weatherType, weatherKey }) => {
    return (
        <div>
            <div>
                <img
                    alt={weatherType}
                    src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} />
            </div>
            <div> Type: {weatherType} </div>
            <div>min:{min}   max: {max}</div>
        </div>
    )
}

export default WeatherDay
