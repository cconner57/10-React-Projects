import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import apikey from './api.env'
import './App.css';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [weather, setWeather] = useState([]);
	const [date, setDate] = useState('');
	const [location, setLocation] = useState();
	// const [picture, setPicture] = useState('');

	// const weatherPic = (type) => {
	// 	console.log(type);
	//   console.log(picture)
	//   switch (type) {
	//     case 'clear sky':
	//       setPicture('sunny');
	//       console.log(picture)
	//       return;
	//     case 'few clouds' || 'scattered clouds' || 'broken clouds':
	//       setPicture('cloudy');
	//       console.log(picture)
	//       return
	//     case 'shower rain' || 'rain':
	//     setPicture('raining');
	//     console.log(picture)
	//     return;
	//     case 'thunderstorm':
	//       setPicture('lightning');
	//       console.log(picture)
	//       return;
	//     case 'snow':
	//       setPicture('snowy');
	//       console.log(picture)
	//       return;
	//     default:
	//       setPicture('foggy');
	//       console.log(picture)
	// 		return;
	//   }
	// }

	useEffect(() => {
		setDate(format(new Date(), 'EEEE hh : mm aaa'));
		const interval = setInterval(() => {
			setDate(format(new Date(), 'EEEE hh : mm aaa'));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const url = (city) =>
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

	async function getWeatherByLocation(city) {
		const resp = await fetch(url(city), { origin: 'cors' });
		const respData = await resp.json();
		setWeather(respData);
		console.log(respData);
		// weatherPic(respData.weather[0].description);
		setLoading(false);
	}

	const KtoF = (temperature) =>
		Math.round(((temperature - 273.15) * 9) / 5 + 32);

	const MtoF = (distance) => Math.round(distance * 0.00062137);

	const handleForm = (e) => {
		e.preventDefault();
		if (location) {
			getWeatherByLocation(location);
		}
	};

	if (loading) {
		return (
			<div className='Weather'>
				<div className='Weather__InputForm'>
					<form onSubmit={handleForm}>
						<input
							type='text'
							placeholder='Enter City or Zipcode'
							autoComplete='off'
							onChange={(e) => {
								setLocation(e.target.value);
							}}
						/>
					</form>
				</div>
			</div>
		);
	}

	if (loading === false) {
		return (
			<div className='Weather'>
				<div className='Weather__Container'>
					<div className='Weather__Banner'>
						<p className='Weather__Date'>{date}</p>
						<p className='Weather__City'>{weather.name}</p>
					</div>
					<div className='Weather__Content'>
						<img
							className='Weather__Image'
							src={process.env.PUBLIC_URL + `/icons/sunny.png`}
							alt='Weather'
						/>
						<div className='Weather__Temperature'>
							<p className='Weather__Units'>{KtoF(weather.main.temp)}° F</p>
							<div className='Weather__Subtemp'>
								<p className='Weather__Min'>
									Low {KtoF(weather.main.temp_min)}° | High{' '}
									{KtoF(weather.main.temp_max)}°
								</p>
							</div>
						</div>
					</div>
					<div className='Weather__Subunits'>
						<div className='Weather__Rain'>
							<p>
								<span role='img' aria-label='img'>
									👁
								</span>
							</p>
							<p>~{MtoF(weather.visibility)} mi</p>
							<p className='Weather__Subtext'>Visibility</p>
						</div>
						<div className='Weather__Wind'>
							<p>
								<span role='img' aria-label='img'>
									💨
								</span>
							</p>
							<p>{weather.wind.speed} mph</p>
							<p className='Weather__Subtext'>Wind Speed</p>
						</div>
						<div className='Weather__Persipitation'>
							<p>
								<span role='img' aria-label='img'>
									💧
								</span>
							</p>
							<p>{weather.main.humidity}%</p>
							<p className='Weather__Subtext'>Humidity</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default App;
