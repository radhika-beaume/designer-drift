import { motion } from 'framer-motion'
import { MdMenuBook } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import GlobalNavBar from '../components/GlobalNavBar.jsx'
import scenariosEn from '../data/scenarios.js'
import scenariosFr from '../data/scenarios.fr'
import { reducedMotion, spring, duration } from '../motion.js'

export default function ScenarioList() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const scenarios = i18n.language === 'fr' ? scenariosFr : scenariosEn

  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  const backTo = location.state?.fromScenarioPath || -1

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <header style={{ position: 'relative', width: '100%', height: '44px', zIndex: 10 }}>
        <GlobalNavBar backTo={backTo} />
      </header>

      <main className="mx-auto w-full max-w-md" style={{ padding: '16px 16px 24px 16px' }}>
        <div>
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
              fontSize: '16px',
              lineHeight: '26px',
              color: 'var(--text-secondary)',
              textAlign: 'left',
              margin: '6px 0 0 0',
            }}
          >
            {t('scenarios.subtitle')}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          {scenarios.map((s) => (
            <motion.button
              key={s.id}
              type="button"
              onClick={() =>
                navigate(withLang(`/scenario/${s.slug}`), {
                  state: { from: 'scenarios' },
                })
              }
              className="text-left transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              whileTap={{ scale: 0.97, backgroundColor: '#e8d8ce' }}
              animate={{ scale: 1, backgroundColor: 'var(--surface-light)' }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      scale: { ...spring, duration: duration(100) },
                      backgroundColor: { duration: duration(100), ease: 'easeOut' },
                    }
              }
              style={{
                width: '100%',
                textAlign: 'left',
                border: 'none',
                borderBottom: '1px solid var(--border-chips)',
                borderRadius: '4px',
                padding: 0,
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              <img
                src={`/illustrations/${s.slug}-card.png`}
                alt=""
                style={{
                  width: '100%',
                  height: '100px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '8px 8px 0 0',
                }}
              />

              <div style={{ padding: '16px' }}>
                <div
                  style={{
                    fontFamily: 'Lora',
                    fontWeight: 700,
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
                    fontSize: '16px',
                    lineHeight: '26px',
                    color: 'var(--text-secondary)',
                    textAlign: 'left',
                    margin: '6px 0 0 0',
                  }}
                >
                  {s.trigger}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
                  <MdMenuBook size={16} color={'#4F433E'} />
                  <div
                    style={{
                      fontFamily: 'Source Sans 3',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: 'var(--text-secondary)',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    {t('scenarios.sections_count')}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  )
}
