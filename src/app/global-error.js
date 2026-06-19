'use client';

// App Router global error boundary. Defining this (and not-found.js) gives Next
// proper app-router error pages, so the build never falls back to the legacy
// pages-router `_error`/`_document` path that imports <Html> and fails static
// generation with "Html should not be imported outside of pages/_document".
export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem',
          margin: 0,
          background: '#0F1115',
          color: '#FFFFFF',
          fontFamily: 'Inter, Segoe UI, system-ui, -apple-system, sans-serif',
        }}
      >
        <p
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FF6A00',
            fontWeight: 700,
            marginBottom: '1rem',
          }}
        >
          Something went wrong
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', fontWeight: 700, margin: 0 }}>
          Unexpected Error
        </h1>
        <p style={{ marginTop: '1rem', maxWidth: 460, color: '#B7BDC7', lineHeight: 1.6 }}>
          An unexpected error occurred. Please try again, or call us and a parts specialist
          will help you right away.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: '0.95rem 1.9rem',
              background: '#FF6A00',
              color: '#fff',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: 0,
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
          <a
            href="/"
            style={{
              padding: '0.95rem 1.9rem',
              background: 'transparent',
              color: '#fff',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: '1px solid #2A313B',
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            Back to Home
          </a>
        </div>
      </body>
    </html>
  );
}
