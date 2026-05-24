import { SPONSORS } from '../../lib/data';

export const metadata = { title: 'Sponsors · Cardinals Provincials 2026' };

const TIERS = [
  { key: 'platinum', label: 'Platinum',  color: '#E8E8E8', size: '200px', cols: 'repeat(auto-fill,minmax(240px,1fr))' },
  { key: 'gold',     label: 'Gold',      color: '#E8A000', size: '140px', cols: 'repeat(auto-fill,minmax(180px,1fr))' },
  { key: 'silver',   label: 'Silver',    color: '#A0A8B0', size: '100px', cols: 'repeat(auto-fill,minmax(150px,1fr))' },
  { key: 'community',label: 'Community', color: '#555',    size: '80px',  cols: 'repeat(auto-fill,minmax(130px,1fr))' },
];

function SponsorCard({ sponsor, size }) {
  const inner = (
    <div style={{ background: '#111', border: '1px solid #1a1a1a', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', minHeight: size, transition: 'border-color 0.2s' }}>
      {sponsor.logo ? (
        <img src={sponsor.logo} alt={sponsor.name} style={{ maxHeight: '60px', maxWidth: '160px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
      ) : (
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--white)', letterSpacing: '1px', textAlign: 'center' }}>
          {sponsor.name}
        </div>
      )}
      {sponsor.tagline && (
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '1px', textAlign: 'center' }}>
          {sponsor.tagline}
        </div>
      )}
    </div>
  );

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

function PlaceholderCard({ tier }) {
  return (
    <div style={{ background: '#0a0a0a', border: '1px dashed #222', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', minHeight: tier.size, opacity: 0.4 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: tier.color, letterSpacing: '2px' }}>
        {tier.label} Sponsor
      </div>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: '#333', letterSpacing: '1px', textAlign: 'center' }}>
        Your name here
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  const hasSponsor = SPONSORS.length > 0;

  return (
    <div className="section">
      <div className="section-label">RMLL Provincials 2026</div>
      <h1 className="section-title">Our <span className="gold">Sponsors</span></h1>
      <div className="divider" />

      <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '620px', marginBottom: '3rem' }}>
        This tournament is made possible by the generous support of our sponsors. If your business would like to be featured here and in the tournament program, please reach out to us on Instagram.
      </p>

      {!hasSponsor && (
        <div style={{ background: 'rgba(232,160,0,0.05)', border: '1px solid rgba(232,160,0,0.15)', padding: '3rem', textAlign: 'center', marginBottom: '4rem', maxWidth: '560px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold)', letterSpacing: '2px', marginBottom: '0.75rem' }}>
            Become a Sponsor
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Three sponsorship tiers available — $100, $250, and $500. Your logo in the tournament program, on this site, and on arena signage all weekend.
          </p>
          <a href="https://instagram.com/cardinalsjrladieslax" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            Message us on Instagram →
          </a>
        </div>
      )}

      {TIERS.map(tier => {
        const tierSponsors = SPONSORS.filter(s => s.tier === tier.key);
        if (tierSponsors.length === 0 && hasSponsor) return null;
        return (
          <div key={tier.key} style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="section-label" style={{ color: tier.color, marginBottom: 0 }}>{tier.label}</div>
              <div style={{ flex: 1, height: '1px', background: '#1a1a1a' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: tier.cols, gap: '1px', background: '#1a1a1a' }}>
              {tierSponsors.length > 0
                ? tierSponsors.map(s => <SponsorCard key={s.id} sponsor={s} size={tier.size} />)
                : [0, 1, 2].map(i => <PlaceholderCard key={i} tier={tier} />)
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}
