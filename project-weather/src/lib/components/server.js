import { PUBLIC_API_KEY } from '$env/static/public';

const apiKey = PUBLIC_API_KEY;
const geopositionUrl = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';
const currentConditionsUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
const forecastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';



async function getLocationKey(lat, lon) {
    const response = await fetch(`${geopositionUrl}?apikey=${apiKey}&q=${lat},${lon}`);
    if (!response.ok) {
        throw new Error('Failed to fetch location data');
    }
    const data = await response.json();
    return { 
        key: data.Key, 
        name: data.LocalizedName,
        country: data.Country.LocalizedName
    };
}




async function getCurrentConditions(locationKey) {
    const response = await fetch(`${currentConditionsUrl}${locationKey}?apikey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Failed to fetch current conditions');
    }


    const data = await response.json();
    return data[0];
}

async function getForecast(locationKey) {
    const response = await fetch(`${forecastUrl}${locationKey}?apikey=${apiKey}&metric=true`);
    if (!response.ok) {
        throw new Error('Failed to fetch forecast data');
    }

    return await response.json();
}

export async function getWeatherData(lat, lon) {
    try {
        const { key, name, country } = await getLocationKey(lat, lon);
        const [currentConditions, forecast] = await Promise.all([
            getCurrentConditions(key),
            getForecast(key)
        ]);

        return {
            location: {
                city: name,
                country: country
            },
            current: {
                temperature: currentConditions.Temperature.Metric.Value,
                weatherText: currentConditions.WeatherText,
                weatherIcon: currentConditions.WeatherIcon
            },
            forecast: {
                minTemp: forecast.DailyForecasts[0].Temperature.Minimum.Value,
                maxTemp: forecast.DailyForecasts[0].Temperature.Maximum.Value,
                dayForecast: forecast.DailyForecasts[0].Day.IconPhrase,
                nightForecast: forecast.DailyForecasts[0].Night.IconPhrase
            }
        };
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        throw new Error('Failed to fetch weather data');
    }
}