import { GAMES, TEAMS } from '../../lib/data';

export const metadata = { title: 'Schedule · Cardinals Provincials 2026' };

function getTeam(id) { return TEAMS.find(t => t.id === id) || { name: id, abbr: '?' }; }

const DAYS = [
  { key: 'Thursday', label: 'Thursday · July 17', sub: 'Round Robin' },
  { key: 'Friday',   label: 'Friday · July 18',   sub: 'Round Robin + Semi-Finals' },
  { key: 'Saturday', label: 'Saturday · July 19',  sub: 'Medal Games' },
];

export default function SchedulePage() {
  return (
    <div className="section">
      <div className="section-label">July 17–19, 2026 · Brentwood Arena</div>
      <h1 className="section-title">Schedule</h1>
      <div className="divider" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {DAYS.map(({ key, label, sub }) => {
          const dayGames = GAMES.filter(g => g.day === key);
          return (
            <div key={key}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem', paddingBottom: '0.8rem', borderBottom: '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#E8A000', letterSpacing: '2px' }}>{label}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', letterSpacing: '2px', color: '#444', textTransform: 'uppercase' }}>{sub}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
                {dayGames.map(g => {
                  const home = getTeam(g.homeTeamId);
                  const away = getTeam(g.awayTeamId);
                  return (
                    <div key={g.id} style={{ background: '#0a0a0a', padding: '1rem 1.5rem', display: 'grid', gridTemplateColumns: '80px 1fr auto 1fr auto', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", color: '#E8A000', fontWeight: 600, fontSize: '0.95rem' }}>{g.time}</div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textAlign: 'right', color: g.homeTeamId === 'cardinals' ? '#FFB800' : '#F5F0E8' }}>{home.name}</div>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.1rem', color: '#333', textAlign: 'center' }}>VS</div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: g.awayTeamId === 'cardinals' ? '#FFB800' : '#F5F0E8' }}>{away.name}</div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', color: '#333', textAlign: 'right' }}>
                        {g.label || g.gameType}
                      </div>
                    </div>
                  );
                })}
                {dayGames.length === 0 && (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#2a2a2a', fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: '2px' }}>Schedule TBD</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p style={{ color: '#333', fontSize: '0.8rem', marginTop: '2rem' }}>
        Schedule subject to change. All games at Brentwood Arena, Calgary. Follow @cardinalsjrladieslax for real-time updates.
      </p>
    </div>
  );
}
