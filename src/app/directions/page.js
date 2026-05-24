import { HOTELS } from '../../lib/data';

export const metadata = { title: 'Hotels & Directions · Cardinals Provincials 2026' };

export default function DirectionsPage() {
  return (
    <div className="section">
      <div className="section-label">Getting Here</div>
      <h1 className="section-title">Venues & Hotels</h1>
      <div className="divider" />

      {/* Venue highlight */}
      <div style={{ background: '#111', border: '1px solid rgba(232,160,0,0.2)', padding: '2.5rem', marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#E8A000', marginBottom: '0.5rem' }}>Tournament Venue</div>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.5rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>Brentwood Arena</div>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          3030 Brentwood Rd NW, Calgary, AB T2L 1K8<br />
          Free parking on-site · Accessible entrance north side · C-Train: Brentwood Station (Red Line) ~5 min walk
        </p>
        <a href="https://maps.google.com/?q=Brentwood+Sportsplex+Calgary" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Open in Google Maps →</a>
      </div>

      {/* Hotels */}
      <div className="section-label" style={{ marginBottom: '1.5rem' }}>Recommended Hotels</div>
      <div className="grid-3" style={{ marginBottom: '3rem' }}>
        {HOTELS.map(h => (
          <div key={h.name} className="card">
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#E8A000', marginBottom: '0.5rem' }}>{h.tag}</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.5rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>{h.name}</div>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>{h.addr}</p>
            <p style={{ color: '#E8A000', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.5rem' }}>{h.dist}</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '1.2rem', opacity: 0.7 }}>{h.notes}</p>
            <a href={h.map} target="_blank" rel="noreferrer" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E8A000', borderBottom: '1px solid rgba(232,160,0,0.3)', paddingBottom: '2px' }}>Directions →</a>
          </div>
        ))}
      </div>

      {/* Transit info */}
      <div style={{ background: '#111', borderTop: '3px solid #E8A000', padding: '2rem' }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.4rem', marginBottom: '0.8rem' }}>🚇 Getting Around Calgary</div>
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8 }}>
          Brentwood C-Train Station (Red Line) is a 5-minute walk from the arena — ideal if you're staying downtown.
          Rideshare drop-off at the main entrance. Free parking at both the arena and overflow lot next door.
          No RV parking on-site.
        </p>
        <a href="https://www.calgarytransit.com" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E8A000' }}>Calgary Transit →</a>
      </div>
    </div>
  );
}
