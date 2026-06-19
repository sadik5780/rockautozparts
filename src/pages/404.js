// Pages-Router static 404. Next always generates a pages-router error page
// internally; its default uses next/document (<Html>), which the deploy
// sandbox's build worker fails to render (duplicate React -> the render throws
// and is reported as "Html should not be imported outside of pages/_document").
// This override is plain, hook-free JSX, so it renders with no React hooks and
// can't hit that path. The App Router 404 (src/app/not-found.js) handles 404s
// at runtime; this only satisfies the build-time static error page.
export default function Custom404() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        background: '#0F1115',
        color: '#FFFFFF',
        fontFamily: 'Inter, Segoe UI, system-ui, -apple-system, sans-serif',
      }}
    >
      <p style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF6A00', fontWeight: 700, marginBottom: '1rem' }}>
        404 Error
      </p>
      <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', fontWeight: 700, margin: 0 }}>
        Page Not Found
      </h1>
      <p style={{ marginTop: '1rem', maxWidth: 460, color: '#B7BDC7', lineHeight: 1.6 }}>
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <a
        href="/"
        style={{ marginTop: '2rem', padding: '0.95rem 1.9rem', background: '#FF6A00', color: '#fff', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 8, textDecoration: 'none' }}
      >
        Back to Home
      </a>
    </div>
  );
}
