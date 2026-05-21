import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'The Proposal Concierge. Luxury Proposal Planning in Toronto and the GTA.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF6F1',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '1px solid #C9A961',
            opacity: 0.5,
          }}
        />
        {/* Corner ornaments */}
        <div style={{ position: 'absolute', top: '40px', left: '40px', width: '32px', height: '32px', borderTop: '2px solid #C9A961', borderLeft: '2px solid #C9A961' }} />
        <div style={{ position: 'absolute', top: '40px', right: '40px', width: '32px', height: '32px', borderTop: '2px solid #C9A961', borderRight: '2px solid #C9A961' }} />
        <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '32px', height: '32px', borderBottom: '2px solid #C9A961', borderLeft: '2px solid #C9A961' }} />
        <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '32px', height: '32px', borderBottom: '2px solid #C9A961', borderRight: '2px solid #C9A961' }} />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          style={{ height: '96px', width: 'auto', marginBottom: '24px', objectFit: 'contain' }}
        />

        {/* Gold rule */}
        <div style={{ width: '120px', height: '1px', backgroundColor: '#C9A961', marginBottom: '28px' }} />

        {/* Brand name */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: '700',
            color: '#8B1538',
            letterSpacing: '0.02em',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          The Proposal Concierge
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: '#1A1A1A',
            marginTop: '20px',
            letterSpacing: '0.05em',
            fontStyle: 'italic',
            opacity: 0.75,
          }}
        >
          Luxury Proposal Planning in Toronto and the GTA
        </div>

        {/* Gold bottom rule */}
        <div style={{ width: '120px', height: '1px', backgroundColor: '#C9A961', marginTop: '28px' }} />

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '56px',
            fontSize: '14px',
            color: '#1A1A1A',
            opacity: 0.45,
            letterSpacing: '0.08em',
          }}
        >
          theproposalconcierge.ca
        </div>
      </div>
    ),
    { ...size }
  )
}
