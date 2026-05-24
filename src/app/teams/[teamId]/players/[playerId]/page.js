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

  const pts      = (player.goals || 0) + (player.assists || 0);
  const isGoalie = player.position === 'Goalie';
  const stats    = isGoalie
    ? [['GP', player.gp || 0], ['PIM', player.pim || 0]]
    : [['G', player.goals || 0], ['A', player.assists || 0], ['PTS', pts], ['PIM', player.pim || 0], ['GP', player.gp || 0]];

  return (
    <div className="section">
      {/* Back link */}
      <Link href={`/teams/${team.id}`} style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', letterSpacing: '3px', color: 'var(--muted)', textTransform: 'uppercase', display: 'inline-block', marginBottom: '3rem' }}>
        ← {team.name}
      </Link>

      <div className="player-profile-grid">

        {/* ── THE CARD ── */}
        <div className="player-card">

          {/* Gold top strip */}
          <div style={{ background: 'var(--gold)', padding: '0.3rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--black)' }}>
              RMLL Provincials 2026
            </span>
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--black)' }}>
              Alberta
            </span>
          </div>

          {/* Photo with diagonal clip + number watermark */}
          <div style={{ position: 'relative' }}>
            <div className="player-card-photo">
              {player.photo
                ? <img src={player.photo} alt={player.name} />
                : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '5rem', color: 'rgba(232,160,0,0.12)' }}>#{player.number}</div>
              }
            </div>
            {/* Number watermark over bottom-right of photo */}
            <div style={{ position: 'absolute', bottom: '8%', right: '0.8rem', fontFamily: 'var(--font-display)', fontSize: '5.5rem', color: 'rgba(232,160,0,0.22)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
              {player.number}
            </div>
          </div>

          {/* Card body — name + position */}
          <div style={{ padding: '1rem 1.2rem 0.6rem', background: '#0d0d0d' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,4vw,1.9rem)', color: 'var(--white)', letterSpacing: '1px', lineHeight: 1 }}>
                {player.name}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--gold)', lineHeight: 1, flexShrink: 0 }}>
                #{player.number}
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(196,30,58,0.75)', marginTop: '0.25rem' }}>
              {player.position}{player.age ? ` · Age ${player.age}` : ''}
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ display: 'flex', borderTop: '1px solid rgba(232,160,0,0.12)', background: '#080808' }}>
            {stats.map(([label, val], i) => (
              <div key={label} style={{ flex: 1, padding: '0.65rem 0', textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(232,160,0,0.08)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gold)', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.55rem', color: '#444', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.15rem' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Bottom team name */}
          <div style={{ background: '#080808', padding: '0.4rem 1.2rem', borderTop: '1px solid rgba(232,160,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '4px', color: 'rgba(232,160,0,0.45)', textTransform: 'uppercase' }}>
              Calgary Cardinals
            </span>
            {isGoalie && (
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.55rem', letterSpacing: '2px', color: 'rgba(232,160,0,0.35)', textTransform: 'uppercase', background: 'rgba(232,160,0,0.06)', padding: '0.15rem 0.4rem', borderRadius: '2px' }}>
                Goalie
              </span>
            )}
          </div>
        </div>

        {/* ── Right side ── */}
        <div>
          <div className="section-label">Calgary Cardinals</div>
          <h1 className="section-title" style={{ color: 'var(--white)' }}>{player.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--gold)', lineHeight: 1 }}>#{player.number}</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {player.position}{player.age ? ` · Age ${player.age}` : ''}
            </span>
          </div>
          <div className="divider" />

          {/* Tournament stats detail */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ marginBottom: '1.2rem' }}>Tournament Stats</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {stats.map(([label, val]) => (
                <div key={label} style={{ background: 'var(--grey)', border: '1px solid var(--grey2)', padding: '1rem 1.5rem', minWidth: '72px', textAlign: 'center', borderRadius: '2px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--gold)', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {player.ncaaLink && (
              <a href={player.ncaaLink} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                NCAA / Portal →
              </a>
            )}
            {player.highlightUrl && (
              <a href={player.highlightUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                Highlight Reel →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
