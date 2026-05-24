import Link from 'next/link';
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
        <div style={{ width: '90px', height: '90px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: team.logo ? 'transparent' : '#1a1a1a', border: team.logo ? 'none' : `2px solid ${isCardinals ? '#E8A000' : '#2a2a2a'}` }}>
          {team.logo
            ? <img src={team.logo} alt={team.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            : <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem', color: team.colors.primary }}>{team.abbr}</span>
          }
        </div>
        <div>
          <div className="section-label">{isCardinals ? '🏠 Host Team · RMLL Provincials 2026' : 'RMLL Provincials 2026'}</div>
          <h1 className="section-title" style={{ color: isCardinals ? '#E8A000' : '#F5F0E8' }}>{team.name}</h1>
          {team.coach && <p style={{ color: '#C41E3A', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', letterSpacing: '1px', marginTop: '0.4rem' }}>Head Coach: {team.coach}</p>}
        </div>
      </div>

      <div className="divider" />

      {/* Bio */}
      <p style={{ color: '#C41E3A', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '700px', marginBottom: '3rem' }}>{team.bio}</p>

      {/* Staff */}
      {team.staff?.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Coaching Staff</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1px', background: '#1a1a1a' }}>
            {team.staff.map(s => (
              <div key={s} style={{ background: '#0a0a0a', padding: '1rem 1.2rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', color: '#C41E3A' }}>{s}</div>
            ))}
          </div>
        </div>
      )}

      {/* Roster / Player cards */}
      {players.length > 0 && (
        <>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Roster — {players.length} Players</div>
          <div className="roster-grid">
            {players.map(p => {
              const inner = (
                <div className="roster-card">
                  {/* Photo */}
                  <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: '#111' }}>
                    {p.photo
                      ? <img src={p.photo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: 'transform 0.3s' }} />
                      : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'rgba(232,160,0,0.12)' }}>#{p.number}</div>
                    }
                  </div>
                  <div style={{ padding: '0.75rem 0.8rem 0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.15rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gold)', lineHeight: 1 }}>#{p.number}</span>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.3px' }}>{p.name}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.62rem', color: '#4a4a4a', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {p.position}{p.age ? ` · ${p.age}` : ''}
                    </div>
                  </div>
                </div>
              );

              return p.slug ? (
                <Link key={p.id} href={`/teams/${team.id}/players/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  {inner}
                </Link>
              ) : (
                <div key={p.id}>{inner}</div>
              );
            })}
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
