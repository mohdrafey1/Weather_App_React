import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: 'delhi',
        feelsLike: 25.99,
        temp: 25.99,
        tempMax: 27,
        tempMin: 25.99,
        weather: 'haze',
        humidity: 44,
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div className="weatherapp">
            <SearchBox updateinfo={updateInfo} />
            <InfoBox info={WeatherInfo} />
        </div>
    );
}

export default WeatherApp;
