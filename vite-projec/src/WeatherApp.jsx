import SearchBox from './SearchBox'
import Info from './Info'
import { useState } from 'react'


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "KOLKATA",
       feelslike: 24.84,
       temp: 25.05,
       tempMin: 25.05,
       tempMax: 25.05,
       humidity: 47,
       weather:"haze",
        
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"} }>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <Info Infor={weatherInfo}/>
        </div>
    )
}