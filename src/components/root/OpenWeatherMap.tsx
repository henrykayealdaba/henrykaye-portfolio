'use client';

import { useEffect } from 'react';

export default function Weather({
  onWeatherReady,
}: {
  onWeatherReady: (data: Record<string, unknown>) => void;
}) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      console.log('API Key:', apiKey);
      if (!apiKey) {
        console.error('Weather API key is not set');
        return;
      }
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      const data = await res.json();

      onWeatherReady(data);
    });
  }, []);

  return null;
}
