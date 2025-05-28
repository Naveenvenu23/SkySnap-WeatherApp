import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const Hero = () => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState("")
  const [Temperature, setTemperature] = useState("")
  const [Discription, setDiscription] = useState("")
  const [Wind, setWind] = useState("")

  function handel(evt) {
    setCity(evt.target.value)
  }

  function getWeather() {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b6322c5b0fa75b31110926c61a0e16d0`)
      .then(function (success) {
        console.log(success.data.weather[0].main)

        setWeather(success.data.weather[0].main)
        setDiscription(success.data.weather[0].description)
        setTemperature((success.data.main.temp - 273.15).toFixed(1)) 
       setWind(success.data.wind.speed )

      })
     
  }

  return (
    <>
      <video width="100%" controls={false} loop muted autoPlay>
        <source src="/images/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <input
          type="search"
          placeholder="Enter your location"
          value={city}
          onChange={handel}
          className="w-[500px] h-10 px-4 rounded-3xl bg-transparent border-2 border-white text-white placeholder-white"
        />
        <button
          onClick={getWeather}
          style={{ backgroundColor: 'oklch(76.5% 0.177 163.223)' }}
          className="h-10 w-14 rounded-3xl flex items-center justify-center text-white cursor-pointer"
          aria-label="Search button"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 h-[500px] w-[800px] border-2 bg-transparent rounded-xl p-6"
      style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 1)" }}

      >
        <div className='w-full border-b-2'>
          <h1 className="text-2xl font-semibold text-center mb-6 text-white">Weather Report</h1>
        </div>

        <div className="flex justify-around mb-8 mt-10">
          <h1 className="font-semibold text-xl text-white">Location: {city}</h1>
          
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-10 place-items-center mt-12">
          <div className="flex flex-col items-center">
            <img src="./images/weather-icon.png" className="w-16 h-16" alt="Weather Icon" />
            <span className="mt-1 text-xl font-bold text-white">Weather :{weather}</span>
          </div>

          <div className="flex flex-col items-center">
            <img src="./images/1 (3).png" className="w-16 h-16" alt="Temperature Icon" />
            <span className="mt-1 text-xl font-bold text-white">Temperature :{Temperature}°C</span>
          </div>

          <div className="flex flex-col items-center">
            <img src="./images/1 (1).png" className="w-16 h-16" alt="Description Icon" />
            <span className="mt-1 text-xl font-bold text-white"> Discription :{Discription}</span>
          </div>

          <div className="flex flex-col items-center">
            <img src="./images/1 (2).png" className="w-16 h-16" alt="Wind Icon" />
            <span className="mt-1 text-xl font-bold text-white">Wind :{Wind} km/h</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
