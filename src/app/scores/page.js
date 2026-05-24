'use client';
import { useState, useEffect } from 'react';
import { GAMES, TEAMS } from '../../lib/data';

const DAYS = ['Thursday', 'Friday', 'Saturday'];

function getTeam(id) { return TEAMS.find(t => t.id === id) || { name: id, abbr: '?', colors: { primary: '#888' } }; }

function StatusBadge({ status }) {
  const map = {
    upcoming: { cls: 'badge badge-upcoming', label: 'Upcoming' },
    live:     { cls: 'badge badge-live',     label: '● LIVE' },
    final:    { cls: 'badge badge-final',     label: 'Final' },
  };
  const s = map[status] || map.upcoming;
  return <span className={s.cls}>{s.label}</span>;
}

export default function ScoresPage() {
  const [games, setGames] = useState(GAMES);
  const [activeDay, setActiveDay] = useState('Thursday');

  // Poll every 20 seconds for live updates
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch('/api/games');
        if (res.ok) setGames(await res.json());
      } catch {}
    };
    fetchGames();
    const id = setInterval(fetchGames, 20000);
    return () => clearInterval(id);
  }, []);

  const dayGames = games.filter(g => g.day === activeDay);
  const liveCount = games.filter(g => g.status === 'live').length;

  return (
    <div className="section">
      <div className="section-label">Tournament</div>
      <h1 className="section-title">
        Live Scores {liveCount > 0 && <span style={{ color: '#ff6b6b', fontSize: '0.5em' }}>● {liveCount} live</span>}
      </h1>
      <div className="divider" />

      <p style={{ color: '#C41E3A', fontSize: '0.88rem', marginBottom: '2rem' }}>
        Scores update automatically every 20 seconds. Volunteer admin updates from the arena.
      </p>

      {/* Day tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #1a1a1a', marginBottom: '2rem' }}>
        {DAYS.map(d => (
          <button key={d} onClick={() => setActiveDay(d)}
            style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '0.9rem 1.5rem', background: 'transparent', border: 'none', color: activeDay === d ? '#E8A000' : '#444', borderBottom: activeDay === d ? '2px solid #E8A000' : '2px solid transparent', cursor: 'pointer', marginBottom: '-1px' }}>
            {d} · {d === 'Thursday' ? 'Jul 17' : d === 'Friday' ? 'Jul 18' : 'Jul 19'}
          </button>
        ))}
      </div>

      {/* Games */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
        {dayGames.map(g => {
          const home = getTeam(g.homeTeamId);
          const away = getTeam(g.awayTeamId);
          return (
            <div key={g.id} style={{ background: '#0a0a0a', padding: '1.2rem 1.5rem' }}>
              {g.label && (
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', color: '#E8A000', marginBottom: '0.5rem' }}>
                  {g.label}
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto 1fr 120px', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", color: '#E8A000', fontWeight: 600 }}>{g.time}</div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1rem', color: g.homeTeamId === 'cardinals' ? '#FFB800' : '#F5F0E8' }}>
                    {home.name}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#444' }}>HOME</div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  {g.status !== 'upcoming'
                    ? <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.2rem', letterSpacing: '2px' }}>{g.homeScore} – {g.awayScore}</div>
                    : <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.2rem', color: '#333' }}>VS</div>
                  }
                  {g.period && <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', color: '#C41E3A' }}>{g.period}</div>}
                </div>

                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1rem', color: g.awayTeamId === 'cardinals' ? '#FFB800' : '#F5F0E8' }}>
                    {away.name}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#444' }}>AWAY</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <StatusBadge status={g.status} />
                  <div style={{ fontSize: '0.7rem', color: '#333' }}>{g.venue}</div>
                </div>
              </div>
            </div>
          );
        })}
        {dayGames.length === 0 && (
          <div style={{ padding: '3rem', textAlign: 'center', color: '#333', fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: '2px' }}>
            No games scheduled for this day yet
          </div>
        )}
      </div>
    </div>
  );
}
