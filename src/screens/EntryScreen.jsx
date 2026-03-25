import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Chip from '../components/Chip.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'

export default function EntryScreen() {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  const chips = [
    {
      key: '01',
      number: '01',
      labelKey: 'chips.01',
      to: '/scenario/expertise-bypass',
    },
    {
      key: '02',
      number: '02',
      labelKey: 'chips.02',
      to: '/scenario/authority-override',
    },
    { key: '03', number: '03', labelKey: 'chips.03', to: '/followup' },
    {
      key: '04',
      number: '04',
      labelKey: 'chips.04',
      to: '/scenario/strategic-exclusion',
    },
    {
      key: '05',
      number: '05',
      labelKey: 'chips.05',
      to: '/scenario/authority-override',
    },
    {
      key: '06',
      number: '06',
      labelKey: 'chips.06',
      to: '/scenario/opaque-evaluation',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <header
        style={{ backgroundColor: 'var(--text-primary)', width: '100%', overflow: 'hidden' }}
      >
        <div className="mx-auto w-full max-w-md">
          <div
            style={{
              position: 'relative',
              height: '109px',
              padding: '16px 8px 8px 16px',
            }}
          >
            <div style={{ position: 'absolute', top: '16px', right: '8px' }}>
              <LanguageToggle variant="dark" />
            </div>
            <div style={{ position: 'absolute', bottom: '8px', left: '16px' }}>
              <h1
                className="text-left"
                style={{
                  fontFamily: 'Lora',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '40px',
                  letterSpacing: '-0.5px',
                  color: 'var(--text-light)',
                  whiteSpace: 'nowrap',
                  margin: 0,
                }}
              >
                {t('entry.title')}
              </h1>
            </div>
          </div>
          <div style={{ padding: '0 16px 8px 16px' }}>
            <p
              className="text-left"
              style={{
                fontFamily: 'Source Sans 3',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: 'var(--text-light)',
                margin: 0,
              }}
            >
              {t('entry.subtitle')}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 py-6">
        {chips.map((chip) => (
          <Chip
            key={chip.key}
            number={chip.number}
            label={t(chip.labelKey)}
            onClick={() => {
              const isScenario = typeof chip.to === 'string' && chip.to.startsWith('/scenario/')
              navigate(withLang(chip.to), isScenario ? { state: { from: 'entry' } } : undefined)
            }}
          />
        ))}
      </div>
    </div>
  )
}
