import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import GlobalNavBar from '../components/GlobalNavBar.jsx'
import MotionLink from '../components/MotionLink.jsx'

const INVESTIGATE_URL = 'https://medium.com/@radhikabeaume'

export default function ExitFlow() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  const backTo = location.state?.fromScenarioPath || -1

  return (
    <div className="flex min-h-screen flex-col" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <img
        src="/illustrations/exit-flow.png"
        alt=""
        aria-hidden="true"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />

      <header style={{ position: 'relative', zIndex: 2, width: '100%', height: '44px' }}>
        <GlobalNavBar backTo={backTo} />
      </header>

      <main
        className="mx-auto w-full max-w-md"
        style={{ position: 'relative', zIndex: 1, flex: 1, padding: '54px 16px 96px 16px' }}
      >
        <h1
          style={{
            position: 'absolute',
            top: '17vh',
            left: '16px',
            right: '16px',
            fontFamily: "'Lora', serif",
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '40px',
            letterSpacing: '-0.5px',
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {t('exit.acknowledgment')}
        </h1>
      </main>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          padding: '0 16px 16px 16px',
        }}
      >
        <div className="mx-auto w-full max-w-md">
          <MotionLink style={{ width: '100%' }}>
            <a
              href={INVESTIGATE_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--surface-light)',
                padding: '16px',
                borderRadius: '8px',
                borderBottom: '1px solid var(--border-chips)',
                fontFamily: 'Source Sans 3',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '22px',
                color: 'var(--accent)',
                textDecoration: 'none',
              }}
            >
              {t('exit.investigate')} {'\u2192'}
            </a>
          </MotionLink>
        </div>
      </div>
    </div>
  )
}
