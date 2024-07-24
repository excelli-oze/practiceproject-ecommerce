<script>
  import { onMount } from 'svelte';
  import { getWeatherData } from './server.js';

  let weatherData = null;
  let error = null;
  let loading = true;

  onMount(() => {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
              try {
                  const { latitude, longitude } = position.coords;
                  weatherData = await getWeatherData(latitude, longitude);
                  error = null;
              } catch (e) {
                  error = "Failed to fetch weather data: " + e.message;
              } finally {
                  loading = false;
              }
          }, (err) => {
              error = "Geolocation error: " + err.message;
              loading = false;
          }, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
          });
      } else {
          error = "Geolocation is not supported by your browser";
          loading = false;
      }
  });
</script>

<div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
      <img src="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Weather" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
      {#if loading}
          <p>Getting your location and fetching weather data...</p>
      {:else if error}
          <p class="text-red-500">{error}</p>
      {:else if weatherData}
          <h2 class="card-title text-2xl">Weather in {weatherData.location.city}, {weatherData.location.country}</h2>
          <p class="text-xl">{weatherData.current.temperature}°C, {weatherData.current.weatherText}</p>
          <p class="text-lg">Min: {weatherData.forecast.minTemp}°C, Max: {weatherData.forecast.maxTemp}°C</p>
          <p>Day: {weatherData.forecast.dayForecast}</p>
          <p>Night: {weatherData.forecast.nightForecast}</p>
      {/if}
  </div>
</div>