'use client';
import { useState, useEffect } from 'react';

const ICON = {
  0:'☀️', 1:'🌤️', 2:'⛅', 3:'☁️',
  45:'🌫️', 48:'🌫️',
  51:'🌦️', 53:'🌦️', 55:'🌧️',
  61:'🌧️', 63:'🌧️', 65:'🌧️',
  71:'❄️',  73:'❄️',  75:'❄️',
  80:'🌦️', 81:'🌧️', 82:'⛈️',
  95:'⛈️', 96:'⛈️', 99:'⛈️',
};
const LABEL = {
  0:'Clear', 1:'Mainly Clear', 2:'Partly Cloudy', 3:'Overcast',
  45:'Foggy', 48:'Foggy',
  51:'Light Drizzle', 53:'Drizzle', 55:'Heavy Drizzle',
  61:'Light Rain', 63:'Rain', 65:'Heavy Rain',
  71:'Light Snow', 73:'Snow', 75:'Heavy Snow',
  80:'Showers', 81:'Rain Showers', 82:'Heavy Showers',
  95:'Thunderstorm', 96:'Thunderstorm', 99:'Thunderstorm',
};

// Calgary open-meteo coords
const URL = 'https://api.open-meteo.com/v1/forecast?latitude=51.045&longitude=-114.072' +
  '&current=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode' +
  '&timezone=America%2FDenver&forecast_days=16';

export default function WeatherWidget() {
  const [wx, setWx] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(d => {
        const dates = d.daily?.time || [];
        const idx17 = dates.indexOf('2026-07-17');
        setWx({
          temp:  Math.round(d.current.temperature_2m),
          code:  d.current.weathercode,
          forecast: idx17 >= 0 ? {
            high: Math.round(d.daily.temperature_2m_max[idx17]),
            low:  Math.round(d.daily.temperature_2m_min[idx17]),
            code: d.daily.weathercode[idx17],
          } : null,
        });
      })
      .catch(() => {});
  }, []);

  const base = { fontFamily: 'var(--font-ui)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' };

  if (!wx) return (
    <div style={{ ...base, fontSize: '0.7rem', color: '#333', letterSpacing: '1px' }}>
      📍 Calgary, AB · July avg 23°C · Pack sunscreen
    </div>
  );

  return (
    <div style={{ ...base, gap: '1.2rem' }}>
      <span style={{ fontSize: '0.7rem', color: '#444', letterSpacing: '1px' }}>
        {ICON[wx.code] || '🌡️'} Calgary now · <strong style={{ color: 'var(--gold)' }}>{wx.temp}°C</strong> · {LABEL[wx.code] || ''}
      </span>
      {wx.forecast ? (
        <span style={{ fontSize: '0.7rem', color: '#444', letterSpacing: '1px' }}>
          · July 17 forecast: {ICON[wx.forecast.code]} <strong style={{ color: 'var(--gold)' }}>{wx.forecast.high}°C</strong> / {wx.forecast.low}°C
        </span>
      ) : (
        <span style={{ fontSize: '0.7rem', color: '#333', letterSpacing: '1px' }}>
          · July avg high 23°C · Pack sunscreen
        </span>
      )}
    </div>
  );
}
