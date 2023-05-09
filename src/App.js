import { useEffect, useState } from 'react';
import './App.css';
import WeatherBar from './components/layouts/WeatherBar';

function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [zipCodeInput, setZipCodeInput] = useState("");

  const getWeather = async () => {
    const API_KEY= '6V80mUGZNrisddOGLp3dofx2UvWaUffR';  
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${zipCodeInput}?apikey=${API_KEY}&metric=true`)
    .then(response => response.json())
    .then(data => setWeather(data))
    .catch(error => console.log(error));
    setCity('Boston');
    console.log("this is the get weather function")
    return
  }

  useEffect(() => { 
      if(zipCodeInput.length===5){
        getWeather();
      }  
  },[zipCodeInput]);
  
  return (
    <div className="App">
      <div className='search-bar' >
        <div className="zipCodebar">
            <form class="form">
                <label>Enter zipcode</label>
                <textarea
                    value={zipCodeInput}
                    onChange={(e)=>setZipCodeInput(e.target.value)}
                    />
            </form>
        </div>
      </div>
      <div className='city'>
        <p>{city}</p>
      </div>
      <div className='weather-bar'>
        {weather?.map((forcast,index) => (          
          <WeatherBar 
            key={index}
            temp={forcast.Temperature.Value}
            icon={forcast.WeatherIcon}  
            text={forcast.IconPhrase}
            city={city}
          />
        ))} 
      </div>
    </div>
  );
}

export default App;