 
import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/layouts/Dashboard';

function App() {

  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');

  const getWeather = async () => {
    const API_KEY= 0;  
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/02136?apikey=${API_KEY}`);
    const data = await response.json();
    setWeather(currentList => [...currentList, data]);
    setCity('Boston');
    debugger
    
    weather[0].map((forcast, index) => (    
      console.log(forcast)
    
    ))
  }
  useEffect(() => {
    getWeather()
  },[]);

  return (
    <div className="App">
        {weather[0].map((forcast,index) => (
          <Dashboard 
            key={index}
            temp={forcast.Temperature.Value}
            icon={forcast.WeatherIcon}  
          />
        ))}
       
      {city}
    </div>
  );
}

export default App;
