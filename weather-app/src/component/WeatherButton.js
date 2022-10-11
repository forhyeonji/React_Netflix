import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  console.log("cities? ",cities);
  return (
    <div>
        <Button variant={`${selectedCity == '' ? "outline-warning" : "warning"}`} onClick={()=>setCity('')}>Current Location</Button>
      
      
        {cities.map((city) => (
          <Button 
          variant={`${selectedCity == city ? "outline-warning" : "warning"}`}
          onClick={()=>setCity(city)}
          >{city}</Button>
          ))}
    </div>
  )
}

export default WeatherButton