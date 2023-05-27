import React ,{useEffect} from 'react'
const WeatherCard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = React.useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
       }=tempInfo;  //Here also, we are doing object destructuring

       //useEffect will run only when weathermood gets change.
       useEffect(() => {
        if(weathermood){
            switch(weathermood){
                case "Clouds": 
                setWeatherState("wi-day-cloudy");
                break;

                case "Haze": 
                setWeatherState("wi-fog");
                break;

                case "Clear": 
                setWeatherState("wi-day-sunny");
                break;

                case "Mist": 
                setWeatherState("wi-dust");
                break;


                default:
                setWeatherState("wi-day-sunny");
                    break;
            }
        }
       }, [weathermood]) 
       
       //converting the seconds into time
       let sec=sunset;
       let date=new Date(sec*1000); //multiplying by 1000 to get milli seconds;
       let timeStr=`${date.getHours()}:${date.getMinutes()}` //getting sunset time.


  return (
    <>
     <article className='widget' style={{margin:"0px 20px"}}>
                <div className='weatherIcon'>
                    {/* big icon */}
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        {/* temperature in degree */}
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>

                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                {/* our four column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className="wi wi-sunset"></i></p>
                            <p className='extra-info-leftside'>{timeStr}<br/>
                            Sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i></p>
                            <p className='extra-info-leftside'>{humidity}<br/>
                            Humidity</p>
                        </div>
                    </div>
                    
                    <div className="weather-extra-info">
                    <div className="two-sided-section">
                            <p><i className="wi wi-rain"></i></p>
                            <p className='extra-info-leftside'>{pressure}<br/>
                            pressure</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-strong-wind"></i></p>
                            <p className='extra-info-leftside'>{speed}<br/>
                            Speed</p>
                        </div>
                    </div>
                </div>
            </article>
    </>
  )
}

export default WeatherCard