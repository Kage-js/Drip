import React from 'react'
         
const WeatherBar = (props) => {
        let icon
        console.log(props.icon)
        console.log(props.temp)
        console.log(props.text)

        switch(props.icon) {
                case 1:
                case 2:
                case 3:
                        icon= <img src={require('../../assets/sunny.png')} alt="text" />
                        break; 
                case 4:
                case 5:
                        icon= <img src={require('../../assets/intermittent-cloud.png')} alt="text" />   
                        break;
               
                case 6: 
                case 7:
                case 8:
                        icon= <img src={require('../../assets/cloudy.png')} alt="text" />
                        break;
                case 11: 
                        icon= <img src={require('../../assets/fog.png')} alt="text" />
                        break;
                case 12:
                case 13:
                        icon= <img src={require('../../assets/rainy.png')} alt="text" />
                        break;
                case 14:
                case 18: 
                case 39:
                case 40:
                        icon = <img src={require('../../assets/rain.png')} alt="text" />
                        break;
                case 15:
                case 16:
                case 17:
                case 41: 
                case 42: 
                        icon= <img src={require('../../assets/storm.png')} alt="text"/>
                        break;
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 43: 
                case 44:
                        icon = <img src={require('../../assets/snow.png')} alt="text"/>
                        break;
                case 24:
                case 25:
                case 26:
                case 31: 
                        icon = <img src={require('../../assets/thermometer-ice.png')} alt="text" />
                        break;
                case 29:
                        icon = <img src={require('../../assets/rainy-snow.png')} alt="text" />
                        break;
                case 30:
                        icon = <img src={require('../../assets/thermometer-hot.png')}alt="text" />
                        break;
                case 32:
                        icon=<img src={require('../../assets/wind.png')} alt="text"/> 
                        break;
                case 33:
                case 34:
                        icon = <img src={require('../../assets/new-moon.png')} alt="text"/>
                        break;
                case 35:
                case 36:
                case 37: 
                case 38:
                        icon = <img src={require('../../assets/night-fog.png')} alt="text" />
                        break;
                default:

        }
       
        return (
                <div className='weather-snippit'>
                        <div className='weather-icon'>
                                {icon}
                        </div>
                        <div className='weather-temp'>
                                {props.temp}
                        </div>
                </div> 
                
    )
  }
  export default WeatherBar;
