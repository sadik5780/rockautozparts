import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        background: '#0F1115',
        color: '#FFFFFF',
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
        404 Error
      </p>
      <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', fontWeight: 700, margin: 0 }}>
        Page Not Found
      </h1>
      <p style={{ marginTop: '1rem', maxWidth: 460, color: '#B7BDC7', lineHeight: 1.6 }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
        back to finding the right part.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '2rem',
          display: 'inline-block',
          padding: '0.95rem 1.9rem',
          background: '#FF6A00',
          color: '#fff',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          borderRadius: 8,
          textDecoration: 'none',
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
