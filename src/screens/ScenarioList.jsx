import { MdArrowBack, MdMenuBook } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { scenarios } from '../data/scenarios.js'

export default function ScenarioList() {
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
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <header
        style={{
          backgroundColor: 'var(--background)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          width: '100%',
        }}
      >
        <div className="mx-auto w-full max-w-md" style={{ padding: '16px 16px 12px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <button
              type="button"
              onClick={() => navigate(typeof backTo === 'string' ? withLang(backTo) : backTo)}
              aria-label={t('nav.back', { defaultValue: 'Back' })}
              style={{
                width: '44px',
                height: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
              }}
            >
              <MdArrowBack size={22} />
            </button>

            <LanguageToggle variant="light" />
          </div>

          <div style={{ marginTop: '8px' }}>
            <h1
              style={{
                fontFamily: 'Lora',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '-0.3px',
                color: 'var(--text-primary)',
                textAlign: 'left',
                margin: 0,
              }}
            >
              {t('scenarios.title')}
            </h1>
            <p
              style={{
                fontFamily: 'Source Sans 3',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: 'var(--text-primary)',
                textAlign: 'left',
                margin: '6px 0 0 0',
              }}
            >
              {t('scenarios.subtitle')}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-md" style={{ padding: '16px 16px 24px 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() =>
                navigate(withLang(`/scenario/${s.slug}`), { state: { from: 'scenarios' } })
              }
              style={{
                width: '100%',
                textAlign: 'left',
                backgroundColor: 'var(--surface-light)',
                borderBottom: '1px solid #E4AD86',
                borderRadius: '8px',
                padding: '16px',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  fontFamily: 'Lora',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  margin: 0,
                }}
              >
                {s.scenarioTitle}
              </div>

              <div
                style={{
                  fontFamily: 'Source Sans 3',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: 'var(--text-secondary)',
                  textAlign: 'left',
                  margin: '6px 0 0 0',
                }}
              >
                {s.trigger}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
                <MdMenuBook size={14} color={'#4F433E'} />
                <div
                  style={{
                    fontFamily: 'Source Sans 3',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: 'var(--text-secondary)',
                    textAlign: 'left',
                    margin: 0,
                  }}
                >
                  {t('scenarios.sections_count')}
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
