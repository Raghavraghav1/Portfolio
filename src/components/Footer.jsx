function Footer({ setPage }) {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(32px, 4vw, 48px) clamp(1rem, 5vw, 3rem)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <button onClick={() => { setPage("Home"); window.scrollTo(0,0); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 16 }}>
            <span className="grad-text">AR</span>
            <span style={{ color: 'rgba(226,232,240,0.3)', margin: '0 6px' }}>/</span>
            <span style={{ color: 'rgba(226,232,240,0.5)', fontWeight: 500 }}>dev</span>
          </span>
        </button>
        <p style={{ color: 'rgba(226,232,240,0.25)', fontSize: 13 }}>
          © 2024 Mailapuram Raghavendhar · Built with React + Tailwind
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
            <a key={s} href="#" style={{ color: 'rgba(226,232,240,0.3)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#c084fc'}
              onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.3)'}>
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
