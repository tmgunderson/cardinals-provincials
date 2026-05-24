// src/app/apparel/page.js
import { APPAREL } from '../../lib/data';

export const metadata = { title: 'Apparel · Cardinals Provincials 2026' };

export default function ApparelPage() {
  return (
    <div className="section">
      <div className="section-label">Gear Up</div>
      <h1 className="section-title">Cardinals Apparel</h1>
      <div className="divider" />
      <p style={{ color: '#C41E3A', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '3rem' }}>
        Show your Cardinals pride at provincials. Pre-order closes one week before the tournament. Pick-up at the arena registration table.
      </p>

      <div className="grid-4">
        {APPAREL.map(a => (
          <div key={a.id} style={{ background: '#0a0a0a', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{a.icon}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{a.name}</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.5rem', color: '#E8A000', marginBottom: '0.4rem' }}>${a.price}</div>
            <div style={{ fontSize: '0.75rem', color: '#444', lineHeight: 1.5 }}>{a.description}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', background: 'rgba(232,160,0,0.06)', borderLeft: '3px solid #E8A000', color: '#C41E3A', fontSize: '0.88rem', lineHeight: 1.7 }}>
        📦 <strong style={{ color: '#F5F0E8' }}>Pre-order closes one week before tournament.</strong> Email orders to <span style={{ color: '#E8A000' }}>[contact@cardinalslax.ca]</span> or order at the registration table. All sizes XS–3XL. Custom name/number on jerseys +$10.
      </div>
    </div>
  );
}
