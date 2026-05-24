'use client';
import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [left, setLeft] = useState(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    function calc() {
      const diff = new Date(targetDate) - Date.now();
      if (diff <= 0) { setStarted(true); setLeft(null); return; }
      setLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (started) return (
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,3vw,1.8rem)', color: 'var(--gold)', letterSpacing: '4px' }}>
      🥍 Tournament is live — Go Cardinals!
    </div>
  );

  if (!left) return null;

  const units = [
    ['Days',    left.days],
    ['Hours',   left.hours],
    ['Min',     left.minutes],
    ['Sec',     left.seconds],
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--muted)' }}>
        Faceoff in
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(0.8rem,3vw,2.5rem)' }}>
        {units.map(([label, val], i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(0.8rem,3vw,2.5rem)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,10vw,6rem)', color: 'var(--gold)', lineHeight: 1, minWidth: '2ch', tabularNums: true }}>
                {String(val).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', letterSpacing: '3px', color: '#C41E3A', textTransform: 'uppercase', marginTop: '0.3rem' }}>
                {label}
              </div>
            </div>
            {i < units.length - 1 && (
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,7vw,4.5rem)', color: '#3a3a3a', lineHeight: 1, marginTop: '0.1em', userSelect: 'none' }}>:</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
