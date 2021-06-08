const getWeather = async (lat, lon) => {
    const req = {
        BASE_URL: `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}`,
    };

    const response = await fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    const weatherData = await response.json();
    return weatherData;
};

export { getWeather };
