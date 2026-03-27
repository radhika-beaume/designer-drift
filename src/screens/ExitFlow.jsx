import { MdArrowBack, MdMenuBook } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle.jsx'
import MotionLink from '../components/MotionLink.jsx'
import { duration } from '../motion.js'

const INVESTIGATE_URL = 'https://acharyaprashant.org'

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
        <div className="mx-auto w-full max-w-md" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <motion.div whileTap={{ scale: 0.97 }} transition={{ duration: duration(100) }}>
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
            </motion.div>

            <LanguageToggle variant="light" />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-md" style={{ padding: '0 16px 24px 16px' }}>
        <h1
          style={{
            fontFamily: 'Lora',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '36px',
            letterSpacing: '-0.3px',
            color: 'var(--text-primary)',
            textAlign: 'left',
            margin: '12px 0 0 0',
          }}
        >
          {t('exit.acknowledgment')}
        </h1>

        <div
          style={{
            width: '40%',
            height: '1px',
            backgroundColor: '#E4AD86',
            margin: '16px 0',
          }}
        />

        <MotionLink>
          <a
            href={INVESTIGATE_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Source Sans 3',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '22px',
              color: 'var(--accent)',
              textAlign: 'left',
              textDecoration: 'underline',
            }}
          >
            <MdMenuBook size={16} color={'#077A98'} />
            <span>
              {t('exit.investigate')} {'\u2192'}
            </span>
          </a>
        </MotionLink>
      </main>
    </div>
  )
}
