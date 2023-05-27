//Below is our api key
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=1c3863cbf058aa294bf3de0c3a458ed2

import React, { useState, useEffect } from 'react'
import "./Style.css";
// import WeatherCard from './weatherCard';
import WeatherCard from './WeatherCard';
function Temp() {
    const [searchValue, setSearchValue] = useState("karad");
    const [tempInfo, setTempInfo] = useState({})
    async function getWeatherInfo() {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1c3863cbf058aa294bf3de0c3a458ed2`;

            const res = await fetch(url); //fetching data here
            const data = await res.json(); //gettting data json file format

            //Here we are doing object destructuring
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0]; //we want first object in array.
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            }; //adding all the weather related variables in myNewWeatherInfo object

            setTempInfo(myNewWeatherInfo); //setting weatherInfo into TempInfo.
        }
        catch (error) {
            console.log(error); //If any error occured we are dispaying that error
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []) //we are providing empty array so that this getWeatherInfo function will execute at rendering time.


    return (
        <>
          {/* Alerts */}
            <div id="alert" className="alert alert-info alert-dismissible fade show fixed-top" style={{display: "none", "z-index": 2000}} role="alert">
                <strong>Hey Guys!</strong> You Will Get <b>Better User Experience</b> If You Open This Website In Big Window For eg- Desktop, Laptop etc.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>


            <div style={{ height: "100vh", "margin-top": "50px" }}>
                {/* code for search bar*/}
                <div className="wrap">

                    <div className="search" style={{ padding: "75px 0px 0px 0px" }}>
                        <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." autoFocus id="search" className='searchTerm' />
                        <button className="searchButton" onClick={getWeatherInfo} type='button'>Search</button>
                    </div>

                </div>

                {/* our weather card */}
                <WeatherCard tempInfo={tempInfo} />
            </div>
        </>
    )
}

export default Temp;