import React from "react";
import axios from "axios";
import 

function App() {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=21d2cad1715d85751c0dddc41d01b75c
	`;

	return (
		<div className="app">
			<div className="container">
				<div className="top">
					<div className="location">
						<p>London</p>
					</div>
					<div className="temp">
						<h1>30ºC</h1>
					</div>
					<div className="description">
						<p>Clouds</p>
					</div>
				</div>
				<div className="bottom">
					<div className="feels">
						<p>40ºC</p>
					</div>
					<div className="humidity">
						<p>20%</p>
					</div>
					<div className="wind">
						<p>12MPH</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
