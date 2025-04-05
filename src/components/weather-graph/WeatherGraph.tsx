import axios from 'axios';
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { IWeather } from '../../Data/Models/IWeather';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const WeatherGraph: React.FC = () => {
    const [weatherData, setWeatherData] = useState<IWeather[]>([]);

    //should be otimized a bit
    //added services for be communication but skipped now
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/Weather');
            setWeatherData(response.data);
        };

        fetchData();
        const intervalId = setInterval(fetchData, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const chartData = {
        labels: weatherData.map((data) => `${data.city} - ${data.country} - ${data.modified}`),
        datasets: [
            {
                label: 'Min Temperature',
                data: weatherData.map((data) => data.minTemperature),
                fill: false,
                borderColor: 'rgba(0,128,0,1)',
                tension: 0.1,
            },
            {
                label: 'Max Temperature',
                data: weatherData.map((data) => data.maxTemperature),
                fill: false,
                borderColor: 'rgba(255,0,0,1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h2>Weather Data Graph</h2>
            <Line data={chartData} />
        </div>
    );
};

export default WeatherGraph;
