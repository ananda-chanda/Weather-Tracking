import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9247cf87e8516158fe5e61ed33bc7d05";


    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }
    catch(err){
       throw err;
    }
    };



    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        }
        catch(err){
            setError("No such place in our Api");
        }

    }

    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}