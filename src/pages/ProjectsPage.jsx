function ProjectsPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(1rem, 5vw, 3rem)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>Portfolio</span>
              <h1 style={{ fontFamily: 'Syne', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: 12 }}>
                Projects & <span className="grad-text">Case Studies</span>
              </h1>
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={0.1}>
                <div className="glass glass-hover" style={{ borderRadius: 20, overflow: 'hidden' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
                    gap: 0,
                  }}
                    className="project-grid"
                  >
                    {/* Preview — swap order on even */}
                    {i % 2 !== 0 && (
                      <div style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <ProjectContent project={project} />
                      </div>
                    )}
                    <div style={{ minHeight: 260, background: project.gradient, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }} />
                      <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 48, color: 'rgba(255,255,255,0.2)', position: 'relative', letterSpacing: '-0.03em' }}>0{i + 1}</span>
                    </div>
                    {i % 2 === 0 && (
                      <div style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <ProjectContent project={project} />
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}