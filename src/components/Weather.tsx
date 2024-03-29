import React, { useState, useEffect } from 'react';
import styles from '../styles/Weather.module.css';

interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: Array<{
        main: string;
    }>;
}

const Weather: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const apiKey = '0139bd3f676e2ab90449be48e5aa00de';
    const location = 'Gdańsk'; 

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            setWeather(data);
        };

        fetchWeather();
    }, [location, apiKey]);

    if (!weather) return <div className={styles.weatherContainer}>Loading...</div>;

    return (
        <div className={styles.weatherContainer}>
            <div className={styles.weatherDetails}>
                <div>{weather.weather[0].main}</div>
                <div>{weather.main.temp}°C</div>
            </div>
        </div>
    );
};

export default Weather;
