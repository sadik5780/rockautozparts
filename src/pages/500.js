// Pages-Router static 500 — plain, hook-free override of Next's internal error
// page. See src/pages/404.js for the full rationale.
export default function Custom500() {
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
        500 Error
      </p>
      <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', fontWeight: 700, margin: 0 }}>
        Something Went Wrong
      </h1>
      <p style={{ marginTop: '1rem', maxWidth: 460, color: '#B7BDC7', lineHeight: 1.6 }}>
        An unexpected error occurred on our end. Please try again, or call us and a parts
        specialist will help right away.
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
