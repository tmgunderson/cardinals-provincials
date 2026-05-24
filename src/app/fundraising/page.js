import { FUNDRAISERS } from '../../lib/data';

export const metadata = { title: 'Fundraising · Cardinals Provincials 2026' };

export default function FundraisingPage() {
  return (
    <div className="section">
      <div className="section-label">Support Canada's Game</div>
      <h1 className="section-title">Fundraising</h1>
      <div className="divider" />

      {/* Host responsibility notice */}
      <div style={{ borderLeft: '3px solid rgba(232,160,0,0.5)', background: 'rgba(232,160,0,0.04)', padding: '1rem 1.5rem', marginBottom: '2.5rem', maxWidth: '680px' }}>
        <p style={{ color: '#C41E3A', fontSize: '0.88rem', lineHeight: 1.8 }}>
          As host, the Cardinals are responsible for covering tournament costs. Every dollar raised here keeps this provincial championship running for all teams and families.
        </p>
      </div>

      <p style={{ color: 'rgba(196,30,58,0.75)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '3rem' }}>
        Choose your way to support the tournament — every contribution goes directly to making this championship weekend possible.
      </p>

      <div className="grid-3">
        {FUNDRAISERS.map(f => (
          <div key={f.id} className="card-gold-left">
            <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{f.icon}</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem', color: '#E8A000', letterSpacing: '1px', marginBottom: '0.5rem' }}>{f.title}</div>
            <p style={{ color: '#C41E3A', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{f.desc}</p>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(245,240,232,0.3)', textTransform: 'uppercase' }}>{f.pricing}</div>
          </div>
        ))}
      </div>

      {/* 50/50 jackpot feature */}
      <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg,rgba(232,160,0,0.08),rgba(232,160,0,0.02))', border: '1px solid rgba(232,160,0,0.2)', padding: '4rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Bebas Neue',sans-serif", fontSize: '18rem', color: 'rgba(232,160,0,0.03)', pointerEvents: 'none', lineHeight: 1 }}>50/50</div>
        <div className="section-label" style={{ marginBottom: '0.5rem' }}>Live Jackpot</div>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(4rem,10vw,7rem)', color: '#FFB800', lineHeight: 1 }}>$TBD</div>
        <p style={{ color: 'rgba(196,30,58,0.75)', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1rem', marginTop: '0.5rem' }}>Updated live at the arena · Winner drawn after Gold Medal Game</p>
        <p style={{ color: '#333', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', marginTop: '1rem' }}>Must be present to win · 50% to winner · 50% to Cardinals program</p>
      </div>
    </div>
  );
}
