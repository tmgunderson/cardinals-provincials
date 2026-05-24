import Link from 'next/link';
import { TOURNAMENT, GAMES, TEAMS } from '../lib/data';
import Countdown from '../components/Countdown';
import WeatherWidget from '../components/WeatherWidget';

export default function HomePage() {
  const liveGames = GAMES.filter(g => g.status === 'live');
  const getTeam = (id) => TEAMS.find(t => t.id === id);

  // Countdown to July 17, 2026
  const tournamentStart = new Date('2026-07-17T09:00:00');

  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,160,0,0.09) 0%, transparent 70%)',
      }}>
        {/* Background grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(232,160,0,0.015) 40px, rgba(232,160,0,0.015) 41px)', pointerEvents: 'none' }} />

        <div className="badge" style={{ background: 'rgba(232,160,0,0.1)', border: '1px solid #E8A000', color: '#E8A000', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', padding: '0.5rem 1.5rem', marginBottom: '1.5rem' }}>
          RMLL · Alberta Major Female · 2026
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(5rem,14vw,11rem)', lineHeight: 0.9, letterSpacing: '-2px' }}>
          Calgary<br /><span style={{ color: '#E8A000' }}>Cardinals</span>
        </h1>

        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1rem,3vw,1.6rem)', letterSpacing: '6px', textTransform: 'uppercase', color: '#666', marginTop: '0.8rem' }}>
          Provincial Championships
        </p>

        <p style={{ marginTop: '1.5rem', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', letterSpacing: '3px', color: '#FFB800', fontWeight: 600 }}>
          📍 Brentwood Arena, Calgary &nbsp;·&nbsp; July 17–19, 2026
        </p>

        {/* Countdown */}
        <div style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}>
          <Countdown targetDate="2026-07-17T09:00:00" />
        </div>

        {/* Weather */}
        <div style={{ marginBottom: '1rem' }}>
          <WeatherWidget />
        </div>

        {/* Live game banner */}
        {liveGames.length > 0 && (
          <Link href="/scores" style={{ marginTop: '2rem', background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.3)', padding: '1rem 2rem', display: 'inline-block' }}>
            <div style={{ color: '#ff6b6b', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', marginBottom: '0.4rem' }}>● GAME IN PROGRESS</div>
            {liveGames.map(g => {
              const home = getTeam(g.homeTeamId);
              const away = getTeam(g.awayTeamId);
              return (
                <div key={g.id} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem' }}>
                  {home?.abbr || 'HOME'} {g.homeScore} – {g.awayScore} {away?.abbr || 'AWAY'}
                  {g.period && <span style={{ fontSize: '1rem', color: '#888', marginLeft: '0.5rem' }}>({g.period})</span>}
                </div>
              );
            })}
          </Link>
        )}

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/scores" className="btn btn-primary">Live Scores</Link>
          <Link href="/schedule" className="btn btn-outline">View Schedule</Link>
          <Link href="/fundraising" className="btn btn-outline">Support the Team</Link>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.3, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Scroll ↓
        </div>
      </section>

      {/* QUICK STATS STRIP */}
      <div style={{ background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1px', background: '#1a1a1a' }}>
          {[
            { label: 'Host City', value: 'Calgary, AB' },
            { label: 'Venue', value: 'Brentwood Arena' },
            { label: 'Tournament Dates', value: 'Jul 17–19, 2026' },
            { label: 'Teams', value: '4 (TBC)' },
            { label: 'Live Stream', value: 'YouTube 📺' },
          ].map(s => (
            <div key={s.label} style={{ background: '#0a0a0a', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.3rem', color: '#E8A000' }}>{s.value}</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.65rem', letterSpacing: '2px', color: '#444', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TOURNAMENT INFO TEASER */}
      <section className="section">
        <div className="section-label">July 17–19, 2026</div>
        <h2 className="section-title">Alberta's Best <span className="gold">Junior Ladies Lacrosse</span></h2>
        <div className="divider" />
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {[
            { icon: '🏟️', title: 'Brentwood Arena', body: 'All games hosted at Brentwood Arena, Calgary. Free parking. C-Train accessible. Food & concession on-site.' },
            { icon: '📺', title: 'Live Streamed', body: 'Every game streamed live on the Cardinals YouTube channel. Share the link with family who can\'t make it to the arena.' },
            { icon: '🥍', title: 'Round Robin + Finals', body: 'Pool play Friday & Saturday. Semi-finals Saturday evening. Bronze and Gold medal games Sunday afternoon.' },
          ].map(c => (
            <div key={c.title} className="card-gold-top">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{c.icon}</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.4rem', letterSpacing: '1px', marginBottom: '0.6rem' }}>{c.title}</div>
              <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7 }}>{c.body}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/teams" className="btn btn-primary">Meet the Teams</Link>
          <Link href="/fundraising" className="btn btn-ghost">Support the Cardinals</Link>
        </div>
      </section>
    </>
  );
}
