'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/scores',      label: 'Live Scores' },
  { href: '/schedule',    label: 'Schedule' },
  { href: '/stats',       label: 'Stats' },
  { href: '/teams',       label: 'Teams' },
  { href: '/sponsors',    label: 'Sponsors' },
  { href: '/fundraising', label: 'Fundraising' },
  { href: '/apparel',     label: 'Apparel' },
  { href: '/directions',  label: 'Hotels' },
  { href: '/info',        label: 'Info' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 1.5rem', height: '60px',
    background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.9)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(232,160,0,0.15)',
    transition: 'background 0.3s',
  };

  const linkStyle = (active) => ({
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: active ? '#E8A000' : 'rgba(245,240,232,0.6)',
    padding: '0.4rem 0.7rem',
    borderBottom: active ? '2px solid #E8A000' : '2px solid transparent',
    transition: 'color 0.2s, border-color 0.2s',
    whiteSpace: 'nowrap',
  });

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <Link href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#E8A000', letterSpacing: '1.5px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        🥍 <span style={{ color: '#F5F0E8' }}>Alberta Major Female Lacrosse Provincials</span>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', flexWrap: 'nowrap', overflowX: 'auto' }}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} style={linkStyle(pathname === l.href)}>{l.label}</Link>
        ))}
        <Link href="/admin" style={{ ...linkStyle(pathname === '/admin'), marginLeft: '0.5rem', background: 'rgba(232,160,0,0.08)', borderBottom: 'none', padding: '0.35rem 0.9rem' }}>
          Admin
        </Link>
      </div>
    </nav>
  );
}
