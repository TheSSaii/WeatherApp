# Weather Intelligence
## Live Demo

[Weather Intelligence](https://weather-intelligence-phi.vercel.app)

Weather Intelligence is a full-stack weather analysis platform built with React, Vite, Node.js and OpenWeather.

Unlike traditional weather applications that focus only on displaying raw meteorological data, this project introduces an operational intelligence layer that transforms weather conditions into actionable environmental assessments.

The long-term vision is to provide decision-support tools for operations in tropical, jungle and remote environments.

---

## Features

### Current Conditions

Display real-time weather information including:

- Temperature
- Feels Like Temperature
- Weather Condition
- Country Code
- City Name

### Operational Metrics

Display key environmental metrics:

- Humidity
- Wind Speed
- Atmospheric Pressure
- Visibility

### Operational Assessment

Provide simplified operational risk indicators:

- Heat Risk
- Visibility Risk
- Mobility Risk

### Global Search

- Search cities worldwide
- Searchable country selector
- ISO country support

### Responsive Design

Tested on:

- Desktop browsers
- iPhone Safari

---

## Screenshots

### Home Screen

![Home Screen](https://raw.githubusercontent.com/TheSSaii/WeatherApp/main/docs/screenshots/home.png)

### Weather Results

![Weather Results](https://raw.githubusercontent.com/TheSSaii/WeatherApp/main/docs/screenshots/weather-results.png)

### Operational Assessment

![Operational Assessment](https://raw.githubusercontent.com/TheSSaii/WeatherApp/main/docs/screenshots/assessment.png)

---

## Technology Stack

### Frontend

- React 19
- Vite 8
- Tailwind CSS 4
- Axios
- React Select
- Country List

### Backend

- Node.js
- Express
- Axios
- Dotenv

### External Services

- OpenWeather API

---

## Project Structure

### Frontend

client/src

- components/
- data/
- hooks/
- pages/
- services/
- styles/

### Backend

server/src

- config/
- controllers/
- middlewares/
- routes/
- services/

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd WeatherApp
```

### Backend

```bash
cd server

npm install

npm run dev
```

### Frontend

```bash
cd client

npm install

npm run dev
```

---

## Environment Variables

### Backend

Create:

```env
server/.env
```

Example:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

### Frontend

Create:

```env
client/.env
```

Example:

```env
VITE_API_URL=http://localhost:3000/api/weather
```

---

## Current Status

### Completed

- Current weather conditions
- Operational metrics
- Operational assessment
- Global country search
- Responsive design
- Mobile validation
- OpenWeather integration

### In Progress

- Documentation
- Production deployment

### Planned

- Advanced operational intelligence
- Drone suitability assessment
- Terrain mobility assessment refinement
- Multi-language support
- Additional environmental risk models

---

## Research

Supporting research documents can be found in:

```text
docs/research/
```

Including:

- Heat Risk
- Visibility Risk
- Mobility Risk
- Drone Risk

---

## License

This project is intended for educational, portfolio and research purposes.
