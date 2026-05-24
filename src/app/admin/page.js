'use client';
import { useState, useEffect } from 'react';
import { GAMES, PLAYERS, TEAMS } from '../../lib/data';

const ADMIN_PIN = process.env.NEXT_PUBLIC_ADMIN_PIN || '1234';

function getTeamName(id) {
  const t = TEAMS.find(t => t.id === id);
  return t?.name || id;
}

export default function AdminPage() {
  const [pin, setPin] = useState('');
  const [authed, setAuthed] = useState(false);
  const [pinErr, setPinErr] = useState(false);
  const [games, setGames] = useState(GAMES);
  const [players, setPlayers] = useState(PLAYERS.filter(p => p.teamId === 'cardinals'));
  const [tab, setTab] = useState('scores');
  const [editing, setEditing] = useState(null);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [saved, setSaved] = useState('');

  useEffect(() => {
    if (!authed) return;
    fetch('/api/games').then(r => r.json()).then(setGames).catch(() => {});
    fetch('/api/players').then(r => r.json()).then(d => setPlayers(d.filter(p => p.teamId === 'cardinals'))).catch(() => {});
  }, [authed]);

  const login = () => {
    if (pin === ADMIN_PIN) { setAuthed(true); } else { setPinErr(true); setPin(''); }
  };

  const saveGame = async (game) => {
    try {
      const res = await fetch('/api/games', { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'x-admin-pin': ADMIN_PIN }, body: JSON.stringify(game) });
      if (res.ok) {
        const updated = await res.json();
        setGames(prev => prev.map(g => g.id === updated.id ? updated : g));
      } else {
        // Optimistic update for mock (Supabase not yet set up)
        setGames(prev => prev.map(g => g.id === game.id ? game : g));
      }
    } catch {
      setGames(prev => prev.map(g => g.id === game.id ? game : g));
    }
    setEditing(null);
    setSaved('Score updated ✓');
    setTimeout(() => setSaved(''), 3000);
  };

  const savePlayer = async (player) => {
    const withPoints = { ...player, points: (player.goals || 0) + (player.assists || 0) };
    try {
      const res = await fetch('/api/players', { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'x-admin-pin': ADMIN_PIN }, body: JSON.stringify(withPoints) });
      if (res.ok) {
        const updated = await res.json();
        setPlayers(prev => prev.map(p => p.id === updated.id ? updated : p));
      } else {
        setPlayers(prev => prev.map(p => p.id === withPoints.id ? withPoints : p));
      }
    } catch {
      setPlayers(prev => prev.map(p => p.id === withPoints.id ? withPoints : p));
    }
    setEditingPlayer(null);
    setSaved('Stats updated ✓');
    setTimeout(() => setSaved(''), 3000);
  };

  const inp = { width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', color: '#F5F0E8', padding: '0.7rem 1rem', fontFamily: "'Barlow',sans-serif", fontSize: '0.9rem', marginBottom: '0.8rem', boxSizing: 'border-box' };
  const lbl = { fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C41E3A', display: 'block', marginBottom: '0.3rem' };

  // ── Login ──
  if (!authed) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: '#111', border: '1px solid #1a1a1a', padding: '3rem', width: '100%', maxWidth: '360px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#E8A000', marginBottom: '0.3rem' }}>Volunteer Admin</div>
          <p style={{ color: '#444', fontSize: '0.85rem', marginBottom: '2rem' }}>Enter your PIN to update scores and stats</p>
          <input type="password" placeholder="••••" value={pin}
            onChange={e => { setPin(e.target.value); setPinErr(false); }}
            onKeyDown={e => e.key === 'Enter' && login()}
            style={{ ...inp, textAlign: 'center', fontSize: '1.5rem', letterSpacing: '8px', marginBottom: '0.5rem' }} />
          {pinErr && <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginBottom: '0.8rem' }}>Incorrect PIN</div>}
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} onClick={login}>Enter</button>
        </div>
      </div>
    );
  }

  // ── Admin Panel ──
  return (
    <div className="section">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="section-label">Volunteer Access</div>
          <h1 className="section-title">Admin Panel</h1>
        </div>
        {saved && <div style={{ background: 'rgba(125,201,125,0.15)', color: '#7dc97d', padding: '0.5rem 1.5rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px' }}>{saved}</div>}
        <button className="btn btn-ghost btn-sm" onClick={() => setAuthed(false)}>Sign Out</button>
      </div>
      <div className="divider" />

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #1a1a1a', marginBottom: '2rem' }}>
        {['scores', 'stats'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '0.9rem 1.5rem', background: 'transparent', border: 'none', color: tab === t ? '#E8A000' : '#444', borderBottom: tab === t ? '2px solid #E8A000' : '2px solid transparent', cursor: 'pointer', marginBottom: '-1px' }}>
            {t === 'scores' ? 'Update Scores' : 'Update Stats'}
          </button>
        ))}
      </div>

      {/* SCORES TAB */}
      {tab === 'scores' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
          {games.map(g => (
            <div key={g.id} style={{ background: '#0a0a0a', padding: '1rem 1.5rem' }}>
              {editing?.id === g.id ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '1rem' }}>
                  <div>
                    <label style={lbl}>Home Score</label>
                    <input type="number" min={0} style={inp} value={editing.homeScore} onChange={e => setEditing(v => ({ ...v, homeScore: +e.target.value }))} />
                  </div>
                  <div>
                    <label style={lbl}>Away Score</label>
                    <input type="number" min={0} style={inp} value={editing.awayScore} onChange={e => setEditing(v => ({ ...v, awayScore: +e.target.value }))} />
                  </div>
                  <div>
                    <label style={lbl}>Status</label>
                    <select style={inp} value={editing.status} onChange={e => setEditing(v => ({ ...v, status: e.target.value }))}>
                      <option value="upcoming">Upcoming</option>
                      <option value="live">Live</option>
                      <option value="final">Final</option>
                    </select>
                  </div>
                  <div>
                    <label style={lbl}>Period / Time</label>
                    <input style={inp} placeholder="e.g. Q3 · 4:22" value={editing.period} onChange={e => setEditing(v => ({ ...v, period: e.target.value }))} />
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => saveGame(editing)}>Save</button>
                    <button className="btn btn-ghost btn-sm" onClick={() => setEditing(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', color: '#444', letterSpacing: '1px' }}>{g.day} · {g.date} · {g.time}</div>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.3rem', marginTop: '0.2rem' }}>
                      <span style={{ color: g.homeTeamId === 'cardinals' ? '#E8A000' : '#F5F0E8' }}>{getTeamName(g.homeTeamId)}</span>
                      <span style={{ color: '#333', margin: '0 0.5rem' }}>{g.homeScore} – {g.awayScore}</span>
                      <span style={{ color: g.awayTeamId === 'cardinals' ? '#E8A000' : '#F5F0E8' }}>{getTeamName(g.awayTeamId)}</span>
                    </div>
                    <span className={`badge badge-${g.status}`} style={{ marginTop: '0.3rem' }}>{g.status}</span>
                    {g.period && <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', color: 'rgba(196,30,58,0.75)', marginLeft: '0.8rem' }}>{g.period}</span>}
                  </div>
                  <button className="btn btn-ghost btn-sm" onClick={() => setEditing({ ...g })}>Edit Score</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* STATS TAB */}
      {tab === 'stats' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
          {players.map(p => (
            <div key={p.id} style={{ background: '#0a0a0a', padding: '1rem 1.5rem' }}>
              {editingPlayer?.id === p.id ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '1rem' }}>
                  <div>
                    <label style={lbl}>Name</label>
                    <input style={inp} value={editingPlayer.name} onChange={e => setEditingPlayer(v => ({ ...v, name: e.target.value }))} />
                  </div>
                  <div>
                    <label style={lbl}>GP</label>
                    <input type="number" min={0} style={inp} value={editingPlayer.gp || 0} onChange={e => setEditingPlayer(v => ({ ...v, gp: +e.target.value }))} />
                  </div>
                  <div>
                    <label style={lbl}>Goals</label>
                    <input type="number" min={0} style={inp} value={editingPlayer.goals || 0} onChange={e => setEditingPlayer(v => ({ ...v, goals: +e.target.value }))} />
                  </div>
                  <div>
                    <label style={lbl}>Assists</label>
                    <input type="number" min={0} style={inp} value={editingPlayer.assists || 0} onChange={e => setEditingPlayer(v => ({ ...v, assists: +e.target.value }))} />
                  </div>
                  <div>
                    <label style={lbl}>PIM</label>
                    <input type="number" min={0} style={inp} value={editingPlayer.pim || 0} onChange={e => setEditingPlayer(v => ({ ...v, pim: +e.target.value }))} />
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => savePlayer(editingPlayer)}>Save</button>
                    <button className="btn btn-ghost btn-sm" onClick={() => setEditingPlayer(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem', color: '#E8A000', lineHeight: 1 }}>#{p.number}</div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1rem' }}>{p.name}</div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', color: 'rgba(196,30,58,0.75)' }}>{p.position} · GP: {p.gp || 0} · G: {p.goals || 0} · A: {p.assists || 0} · PTS: {(p.goals || 0) + (p.assists || 0)}</div>
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-sm" onClick={() => setEditingPlayer({ ...p })}>Edit Stats</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
