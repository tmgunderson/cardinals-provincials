import { TEAMS, PLAYERS } from '../../../lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return TEAMS.map(t => ({ teamId: t.id }));
}

export function generateMetadata({ params }) {
  const team = TEAMS.find(t => t.id === params.teamId);
  if (!team) return {};
  return { title: `${team.name} · RMLL Provincials 2026` };
}

export default function TeamPage({ params }) {
  const team = TEAMS.find(t => t.id === params.teamId);
  if (!team) notFound();

  const players = PLAYERS.filter(p => p.teamId === team.id);
  const isCardinals = team.id === 'cardinals';

  return (
    <div className="section">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div style={{ width: '80px', height: '80px', background: isCardinals ? 'rgba(232,160,0,0.12)' : '#1a1a1a', border: `2px solid ${isCardinals ? '#E8A000' : '#2a2a2a'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem', color: team.colors.primary, flexShrink: 0 }}>
          {team.abbr}
        </div>
        <div>
          <div className="section-label">{isCardinals ? '🏠 Host Team · RMLL Provincials 2026' : 'RMLL Provincials 2026'}</div>
          <h1 className="section-title" style={{ color: isCardinals ? '#E8A000' : '#F5F0E8' }}>{team.name}</h1>
          {team.coach && <p style={{ color: '#666', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', letterSpacing: '1px', marginTop: '0.4rem' }}>Head Coach: {team.coach}</p>}
        </div>
      </div>

      <div className="divider" />

      {/* Bio */}
      <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '700px', marginBottom: '3rem' }}>{team.bio}</p>

      {/* Staff */}
      {team.staff?.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Coaching Staff</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1px', background: '#1a1a1a' }}>
            {team.staff.map(s => (
              <div key={s} style={{ background: '#0a0a0a', padding: '1rem 1.2rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', color: '#888' }}>{s}</div>
            ))}
          </div>
        </div>
      )}

      {/* Roster / Player cards */}
      {players.length > 0 && (
        <>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Roster</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1px', background: '#1a1a1a' }}>
            {players.map(p => (
              <div key={p.id} style={{ background: '#0a0a0a', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                {/* Jersey number watermark */}
                <div style={{ position: 'absolute', top: '-10px', right: '10px', fontFamily: "'Bebas Neue',sans-serif", fontSize: '5rem', color: 'rgba(232,160,0,0.05)', lineHeight: 1, pointerEvents: 'none' }}>{p.number}</div>

                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#E8A000', lineHeight: 1, marginBottom: '0.3rem' }}>#{p.number}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', color: '#F5F0E8', marginBottom: '0.2rem' }}>{p.name}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', color: '#555', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>{p.position} · {p.hometown}</div>

                {/* Mini stat strip */}
                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #1a1a1a', paddingTop: '0.8rem' }}>
                  {[['G', p.goals || 0], ['A', p.assists || 0], ['PTS', (p.goals || 0) + (p.assists || 0)]].map(([label, val]) => (
                    <div key={label} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.2rem', color: '#E8A000', lineHeight: 1 }}>{val}</div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.6rem', color: '#444', letterSpacing: '1px' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* External links */}
      <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {team.sportzsoft && <a href={team.sportzsoft} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">Team Site →</a>}
        {team.instagram && <a href={`https://instagram.com/${team.instagram}`} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">Instagram →</a>}
      </div>
    </div>
  );
}
