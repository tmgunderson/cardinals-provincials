import Link from 'next/link';
import { TEAMS, PLAYERS } from '../../../../../lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return PLAYERS.filter(p => p.slug).map(p => ({
    teamId: p.teamId,
    playerId: p.slug,
  }));
}

export function generateMetadata({ params }) {
  const player = PLAYERS.find(p => p.slug === params.playerId && p.teamId === params.teamId);
  if (!player) return {};
  return { title: `${player.name} · RMLL Provincials 2026` };
}

export default function PlayerPage({ params }) {
  const team   = TEAMS.find(t => t.id === params.teamId);
  const player = PLAYERS.find(p => p.slug === params.playerId && p.teamId === params.teamId);
  if (!team || !player) notFound();

  const pts = (player.goals || 0) + (player.assists || 0);
  const isGoalie = player.position === 'Goalie';

  return (
    <div className="section">
      {/* Back link */}
      <Link href={`/teams/${team.id}`} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', letterSpacing: '2px', color: '#555', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block', marginBottom: '2rem' }}>
        ← {team.name}
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,340px) 1fr', gap: '3rem', alignItems: 'start', flexWrap: 'wrap' }}>

        {/* Left — Photo */}
        <div>
          {player.photo ? (
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: '#111', border: '1px solid #1a1a1a' }}>
              <img
                src={player.photo}
                alt={player.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </div>
          ) : (
            <div style={{ width: '100%', aspectRatio: '1/1', background: '#111', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue',sans-serif", fontSize: '6rem', color: 'rgba(232,160,0,0.15)' }}>
              #{player.number}
            </div>
          )}
        </div>

        {/* Right — Info */}
        <div>
          <div className="section-label" style={{ marginBottom: '0.5rem' }}>
            {team.name} · {player.position}
          </div>

          {/* Name + number */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <h1 className="section-title" style={{ color: '#F5F0E8', margin: 0 }}>{player.name}</h1>
            <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '3rem', color: '#E8A000', lineHeight: 1, marginBottom: '4px' }}>#{player.number}</span>
          </div>

          {/* Age */}
          {player.age && (
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.85rem', color: '#555', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Age {player.age}
            </div>
          )}

          <div className="divider" />

          {/* Stats */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Tournament Stats</div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {isGoalie ? (
                [['GP', player.gp || 0], ['PIM', player.pim || 0]].map(([label, val]) => (
                  <div key={label} style={{ textAlign: 'center', minWidth: '48px' }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.5rem', color: '#E8A000', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', color: '#555', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{label}</div>
                  </div>
                ))
              ) : (
                [['G', player.goals || 0], ['A', player.assists || 0], ['PTS', pts], ['PIM', player.pim || 0], ['GP', player.gp || 0]].map(([label, val]) => (
                  <div key={label} style={{ textAlign: 'center', minWidth: '48px' }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.5rem', color: '#E8A000', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', color: '#555', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{label}</div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* NCAA / portal link */}
          {player.ncaaLink && (
            <a
              href={player.ncaaLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm"
              style={{ display: 'inline-block' }}
            >
              NCAA / Portal Profile →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
