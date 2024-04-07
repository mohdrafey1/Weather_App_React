import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Style.css';
import { useState } from 'react';

function SearchBox({ updateinfo }) {
    const apiUrl ='https://api.openweathermap.org/data/2.5/weather';
    const apiKey = process.env.REACT_APP_API_KEY;

    let [city, setcity] = useState('');
    let [error, seterror] = useState(false);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
            );
            let resJson = await response.json();
            let result = {
                city: city,
                temp: resJson.main.temp,
                tempMin: resJson.main.temp_min,
                tempMax: resJson.main.temp_max,
                humidity: resJson.main.humidity,
                feelsLike: resJson.main.feels_like,
                weather: resJson.weather[0].description,
            };

            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setcity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setcity('');
            let newInfo = await getWeatherInfo();
            updateinfo(newInfo);
        } catch (err) {
            seterror(true);
        }
    };

    return (
        <div className="searchbox">
            <h1>Search for the Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />{' '}
                <br /> <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: 'red' }}>No Such place Exist</p>}
            </form>
        </div>
    );
}

export default SearchBox;
