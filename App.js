import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import './App.css';

const App = () => {
    const apiKey = "f56f24967aaf51182d1d4df628297c6d";
    const [inputCity, setInputCity] = useState("");
    const [data, setData] = useState({});

    const getWeatherDetails=(cityName)=>{
        if (!cityName) return
        const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid="+apiKey;
        axios.get(apiURL).then((res)=>{
            console.log("response",res.data)
            setData(res.data)
        }).catch((err)=>{
            console.log("err",err)
        })
    }
     const handleChangeInput=(e)=>{
        console.log("value", e.target.value);
         setInputCity(e.target.value); 
     }      

     const handleSearch=()=>{
        getWeatherDetails(inputCity);
     }
    useEffect(()=>{
        getWeatherDetails(" ")
    })
  return (
    <div className='col-md-12'>
        <div className='weatherBG'>
            <h1 className='heading'>Weather App</h1>

            <div className='d-grid col-4 mt-4 gap-3'>
            <input type='text' className='form-control' onChange={handleChangeInput} value={inputCity}/>
            <button className='btn btn-primary' type='button' onClick={handleSearch}>Search</button>
            </div>
            <div className='col-md-12 text-center mt-5 '>
            <div className='shadow rounded  weatherResultBox'>
            <img src="https://www.freeiconspng.com/uploads/weather-icon-13.png" width="350" alt="Png Weather Icon Download" className='weatherIcon'/>
            <h5 className='weatherCity'>{data?.name}</h5>
            <h6 className='weatherTemprature'>{((data?.main?.temp)-273.5).toFixed(1)}°C</h6>
            </div>
        </div>
        </div>
        {/* <div className='col-md-12 text-center mt-5 '>
            <div className='shadow rounded  weatherResultBox'>
            <img src="https://www.freeiconspng.com/uploads/weather-icon-13.png" width="350" alt="Png Weather Icon Download" className='weatherIcon'/>
            <h5 className='weatherCity'>{data?.name}</h5>
            <h6 className='weatherTemprature'>{((data?.main?.temp)-273.5).toFixed(1)}°C</h6>
            </div>
        </div> */}
    </div>
  );
}

export default App