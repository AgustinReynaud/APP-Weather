import { React, useEffect, useState } from 'react'
import WeatherDay from '../WeatherDay/WeatherDay';
import { apiKey } from '../../constants';
import LocationSearch from '../LocationSearch/LocationSearch';

const Weather = () => {

    const locationKey = '30301'

    
    const [weatherInfo, setWeatherInfo] = useState();

    const padNum = (num) => {
        const stringNum = num + '';
        const stringLen = stringNum.length;

        if (stringLen === 1) {
            return '0' + stringNum;
        } else {
            return stringNum
        }
    }

    useEffect(() => {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`)
            .then(res => res.json())
            .then(res => setWeatherInfo(res.DailyForecasts.map(df => {
                return {
                    min: df.Temperature.Minimum.Value,
                    max: df.Temperature.Maximum.Value,
                    weatherType: df.Day.IconPhrase,
                    weatherKey: padNum(df.Day.Icon)
                }
            })))
    }, [])



    return (
        <div>
            <LocationSearch
            onCityFound={cityInfo=>{
               
            }}
            />
            <div>

                {!!weatherInfo && weatherInfo?.map((i, index) => (
                    <div key={index}>

                        <WeatherDay
                            min={i.min}
                            max={i.max}
                            weatherType={i.weatherType}
                            weatherKey={i.weatherKey} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Weather
