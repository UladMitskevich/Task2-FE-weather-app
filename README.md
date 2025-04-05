## Overview

:warning: This project were implemented with a STRAIGHTFORWARD approach.

The task description is quite vague and lacks sufficient detail, leaving a lot open to interpretation. The code itself has scattered comments that only address a few aspects. I'd be happy to dive deeper, clarify these uncertainties, and explore all potential implementation options together.

## Goal

This project is designed to display weather data in graph, showing the minimum and maximum temperatures for various cities and countries, along with the last update time.

## Features

- Display Min and Max temperature in graphs
- Show Country, City, Temperature, and Last update time
- Auto-update data every minute

## Running the Project
1. First, ensure you have the backend server running from repository [Task2-BE-WEATHER](https://github.com/UladMitskevich/Task2-BE-WEATHER).
2. Install dependencies
```
npm i
```
3. Start the development server:
```
npm run dev
```
4. Open your browser and navigate to `http://localhost:{yourDevPort}` to see the application in action.

## Project Structure

- `src/components/weather-graph/WeatherGraph.tsx`: Component responsible for fetching weather data and displaying it in a graph.
- `src/App.tsx`: Main application component that includes the `WeatherGraph` component.

## UI
![image](https://github.com/user-attachments/assets/ec43ad5a-2211-4902-8f67-624c079b57d1)
