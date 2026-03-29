import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import GlobalNavBar from '../components/GlobalNavBar.jsx'
import Chip from '../components/Chip.jsx'

export default function FollowupScreen() {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <header
        style={{
          background: 'linear-gradient(to right, #2E2724 0%, #7B4B29 100%)',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <GlobalNavBar backTo={withLang('/')} />

        <div className="mx-auto w-full max-w-md" style={{ padding: '56px 16px 12px 16px' }}>
          <h1
            style={{
              fontFamily: 'Lora',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '32px',
              letterSpacing: '-0.3px',
              color: 'var(--text-light)',
              textAlign: 'left',
              margin: 0,
            }}
          >
            {t('followup.title')}
          </h1>

          <p
            style={{
              fontFamily: 'Source Sans 3',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              color: 'var(--text-light)',
              textAlign: 'left',
              margin: '6px 0 0 0',
            }}
          >
            {t('followup.subtitle')}
          </p>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 py-6">
        <Chip
          thumbnailSrc="/thumbnails/expertise-bypass-thumb.png"
          label={t('followup.option_a')}
          onClick={() =>
            navigate(withLang('/scenario/expertise-bypass'), { state: { from: 'followup' } })
          }
        />
        <Chip
          thumbnailSrc="/thumbnails/strategic-exclusion-thumb.png"
          label={t('followup.option_b')}
          onClick={() =>
            navigate(withLang('/scenario/strategic-exclusion'), { state: { from: 'followup' } })
          }
        />
      </div>
    </div>
  )
}
