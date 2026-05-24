import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#111', borderTop: '1px solid #1a1a1a', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#E8A000', letterSpacing: '3px' }}>
        🥍 Calgary Cardinals
      </div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', color: '#444', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.3rem' }}>
        RMLL · Alberta Major Female · Provincials 2026 · July 17–19 · Brentwood Arena, Calgary
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        {[
          ['Team Site', 'https://www.sportzsoft.com/team/teamWeb.dll/TeamSite?TeamId=3285FF162BDA26F0FA8A40340AEC52A3'],
          ['RMLL', 'https://rockymountainlax.com/junior-ladies-teams/'],
          ['Instagram', 'https://www.instagram.com/cardinalsjrladieslax'],
        ].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#444' }}>
            {label}
          </a>
        ))}
      </div>
      <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#2a2a2a' }}>Go Cardinals! 🖤💛</p>
    </footer>
  );
}
