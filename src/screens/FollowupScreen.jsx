import { MdArrowBack } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageToggle from '../components/LanguageToggle.jsx'
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
      <header style={{ backgroundColor: 'var(--text-primary)', width: '100%', overflow: 'hidden' }}>
        <div className="mx-auto w-full max-w-md" style={{ padding: '16px 16px 12px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <button
              type="button"
              onClick={() => navigate(withLang('/'))}
              aria-label={t('nav.back', { defaultValue: 'Back' })}
              style={{
                width: '44px',
                height: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-light)',
              }}
            >
              <MdArrowBack size={22} />
            </button>

            <LanguageToggle variant="dark" />
          </div>

          <div style={{ marginTop: '4px' }}>
            <h1
              style={{
                fontFamily: 'Lora',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '-0.3px',
                color: 'var(--text-light)',
                textAlign: 'left',
                margin: '6px 0 0 0',
              }}
            >
              {t('chips.03')}
            </h1>

            <p
              style={{
                fontFamily: 'Source Sans 3',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: 'var(--text-light)',
                textAlign: 'left',
                margin: '6px 0 0 0',
              }}
            >
              {t('followup.subtitle')}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 py-6">
        <Chip
          number="01"
          label={t('followup.option_a')}
          onClick={() =>
            navigate(withLang('/scenario/expertise-bypass'), { state: { from: 'followup' } })
          }
        />
        <Chip
          number="02"
          label={t('followup.option_b')}
          onClick={() =>
            navigate(withLang('/scenario/strategic-exclusion'), { state: { from: 'followup' } })
          }
        />
      </div>
    </div>
  )
}
