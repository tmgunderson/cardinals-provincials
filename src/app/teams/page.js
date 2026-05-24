import Link from 'next/link';
import { TEAMS } from '../../lib/data';

export default function TeamsPage() {
  return (
    <div className="section">
      <div className="section-label">RMLL Provincials 2026</div>
      <h1 className="section-title">The Teams</h1>
      <div className="divider" />
      <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
        Full team list confirmed by RMLL closer to the tournament. Teams will be added as they register.
      </p>

      <div className="grid-2">
        {TEAMS.map(team => (
          <Link key={team.id} href={`/teams/${team.id}`}
            style={{ textDecoration: 'none', display: 'block', background: '#111', border: `1px solid ${team.id === 'cardinals' ? 'rgba(232,160,0,0.3)' : '#1a1a1a'}`, padding: '2rem', transition: 'border-color 0.2s, transform 0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '56px', height: '56px', background: team.id === 'cardinals' ? 'transparent' : '#1a1a1a', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {team.logo
                  ? <img src={team.logo} alt={team.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  : <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.1rem', color: team.colors.primary }}>{team.abbr}</span>
                }
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem', letterSpacing: '1px', color: team.id === 'cardinals' ? '#E8A000' : '#F5F0E8' }}>
                  {team.name === 'TBD' ? 'Team TBD' : team.name}
                </div>
                {team.coach && <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '1px' }}>Head Coach: {team.coach}</div>}
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{team.bio}</p>
            {team.id === 'cardinals' && (
              <div style={{ marginTop: '1rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', color: '#E8A000', textTransform: 'uppercase' }}>
                🏠 Host Team · View Full Roster →
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
