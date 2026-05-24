export const metadata = { title: 'Tournament Info · Cardinals Provincials 2026' };

const INFO = [
  { icon: '🎟️', title: 'Gate Admission',    body: 'Adults $8 · Students/Seniors $5 · Under 12 Free\n\nWeekend pass: $20 adult · $12 youth\nCash and card accepted at the gate.' },
  { icon: '📺', title: 'Live Stream',        body: 'All games streamed live on the Cardinals YouTube channel. Link posted here and on @cardinalsjrladieslax when the tournament begins.' },
  { icon: '📋', title: 'Tournament Format',  body: 'Round robin pool play Thursday & Friday. Top teams advance to semi-finals Friday evening. Bronze and Gold medal games Saturday afternoon.' },
  { icon: '🏥', title: 'Medical & Safety',   body: 'First aid attendant on-site for all games. Nearest hospital: Foothills Medical Centre (~10 min). All players must have valid medical forms on file.' },
  { icon: '📱', title: 'Stay Updated',       body: 'Follow @cardinalsjrladieslax on Instagram for live updates, score posts, and tournament highlights.\n\nRMLL: rockymountainlax.com' },
  { icon: '📞', title: 'Contact',            body: 'Tournament Director: [Name TBD]\nEmail: [contact@cardinalslax.ca]\nInstagram: @cardinalsjrladieslax' },
  { icon: '🐾', title: 'Arena Rules',        body: 'No pets in the arena. No outside food/drink in the seating bowl. Keep walkways clear during games. Respectful cheering only.' },
  { icon: '🅿️', title: 'Parking',           body: 'Free parking on-site at Brentwood Arena. Overflow parking available next door. Please do not block emergency lanes.' },
];

export default function InfoPage() {
  return (
    <div className="section">
      <div className="section-label">Know Before You Go</div>
      <h1 className="section-title">Tournament Info</h1>
      <div className="divider" />
      <div className="grid-3">
        {INFO.map(c => (
          <div key={c.title} className="card-gold-top">
            <div style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{c.icon}</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.4rem', letterSpacing: '1px', marginBottom: '0.6rem' }}>{c.title}</div>
            <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
