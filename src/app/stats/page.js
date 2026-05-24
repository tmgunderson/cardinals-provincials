'use client';
import { useState, useEffect } from 'react';
import { PLAYERS } from '../../lib/data';

export default function StatsPage() {
  const [players, setPlayers] = useState(PLAYERS);
  const [sortBy, setSortBy] = useState('points');

  useEffect(() => {
    fetch('/api/players').then(r => r.ok ? r.json() : null).then(d => { if (d) setPlayers(d); }).catch(() => {});
  }, []);

  const cardinals = [...players].filter(p => p.teamId === 'cardinals').sort((a, b) => {
    if (sortBy === 'points') return (b.goals + b.assists) - (a.goals + a.assists) || b.goals - a.goals;
    return b[sortBy] - a[sortBy];
  });

  const teamGoals   = cardinals.reduce((s, p) => s + (p.goals || 0), 0);
  const teamAssists = cardinals.reduce((s, p) => s + (p.assists || 0), 0);
  const topScorer   = cardinals[0];

  const COLS = [
    { key: 'goals',   label: 'G',   title: 'Goals' },
    { key: 'assists', label: 'A',   title: 'Assists' },
    { key: 'points',  label: 'PTS', title: 'Points' },
    { key: 'pim',     label: 'PIM', title: 'Penalty Minutes' },
    { key: 'gp',      label: 'GP',  title: 'Games Played' },
  ];

  return (
    <div className="section">
      <div className="section-label">Cardinals</div>
      <h1 className="section-title">Player Stats</h1>
      <div className="divider" />

      {/* Team summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: '1px', background: '#1a1a1a', marginBottom: '2.5rem' }}>
        {[
          { label: 'Team Goals',   value: teamGoals },
          { label: 'Team Assists', value: teamAssists },
          { label: 'Total Points', value: teamGoals + teamAssists },
          { label: 'Top Scorer',   value: topScorer?.name?.split(' ').pop() || '—', sub: `${(topScorer?.goals || 0) + (topScorer?.assists || 0)} pts` },
        ].map(s => (
          <div key={s.label} style={{ background: '#0a0a0a', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.5rem', color: '#E8A000', lineHeight: 1 }}>{s.value}</div>
            {s.sub && <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', color: '#E8A000' }}>{s.sub}</div>}
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.65rem', letterSpacing: '2px', color: '#444', textTransform: 'uppercase', marginTop: '0.3rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Sort controls */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', letterSpacing: '2px', color: '#444', alignSelf: 'center', textTransform: 'uppercase', marginRight: '0.5rem' }}>Sort by:</span>
        {COLS.map(c => (
          <button key={c.key} onClick={() => setSortBy(c.key)}
            style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '0.4rem 1rem', background: sortBy === c.key ? 'rgba(232,160,0,0.15)' : 'transparent', color: sortBy === c.key ? '#E8A000' : '#444', border: sortBy === c.key ? '1px solid rgba(232,160,0,0.3)' : '1px solid #1a1a1a', cursor: 'pointer' }}>
            {c.title}
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Barlow Condensed',sans-serif" }}>
          <thead>
            <tr style={{ background: '#111', borderBottom: '2px solid #E8A000' }}>
              {['#', 'Player', 'Pos', 'GP', 'G', 'A', 'PTS', 'PIM'].map(h => (
                <th key={h} style={{ padding: '0.8rem 1rem', textAlign: h === 'Player' || h === 'Pos' ? 'left' : 'center', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', color: '#E8A000' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cardinals.map((p, i) => (
              <tr key={p.id} style={{ background: i % 2 === 0 ? '#0a0a0a' : '#0d0d0d', borderBottom: '1px solid #111' }}>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#E8A000', fontWeight: 700 }}>{p.number}</td>
                <td style={{ padding: '0.9rem 1rem', fontWeight: 600 }}>{p.name}</td>
                <td style={{ padding: '0.9rem 1rem', color: '#666', fontSize: '0.85rem' }}>{p.position}</td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#666' }}>{p.gp || 0}</td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: 700, color: sortBy === 'goals' ? '#FFB800' : '#F5F0E8' }}>{p.goals || 0}</td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center', color: sortBy === 'assists' ? '#FFB800' : '#888' }}>{p.assists || 0}</td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: 700, fontSize: '1.1rem', color: sortBy === 'points' ? '#E8A000' : '#F5F0E8' }}>{(p.goals || 0) + (p.assists || 0)}</td>
                <td style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#555' }}>{p.pim || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color: '#444', fontSize: '0.8rem', marginTop: '1rem' }}>G = Goals · A = Assists · PTS = Points · PIM = Penalty Minutes · GP = Games Played</p>
    </div>
  );
}
