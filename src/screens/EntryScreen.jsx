import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Chip from '../components/Chip.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { duration, easeOut, reducedMotion } from '../motion.js'

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
      labelKey: 'chips.01',
      thumbnailSrc: '/thumbnails/expertise-bypass-thumb.png',
      to: '/scenario/expertise-bypass',
    },
    {
      key: '02',
      labelKey: 'chips.02',
      thumbnailSrc: '/thumbnails/authority-override-thumb.png',
      to: '/scenario/authority-override',
    },
    {
      key: '03',
      labelKey: 'chips.03',
      thumbnailSrc: '/thumbnails/mixedthumbnail.png',
      to: '/followup',
    },
    {
      key: '04',
      labelKey: 'chips.04',
      thumbnailSrc: '/thumbnails/strategic-exclusion-thumb.png',
      to: '/scenario/strategic-exclusion',
    },
    {
      key: '05',
      labelKey: 'chips.05',
      thumbnailSrc: '/thumbnails/authority-override-thumb.png',
      to: '/scenario/authority-override',
    },
    {
      key: '06',
      labelKey: 'chips.06',
      thumbnailSrc: '/thumbnails/opaque-evaluation-thumb.png',
      to: '/scenario/opaque-evaluation',
    },
  ]

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: duration(50),
        delayChildren: 0,
      },
    },
  }

  const chipVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration(260),
        ease: easeOut,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <header
        style={{ background: 'linear-gradient(to right, #2E2724 0%, #7B4B29 100%)', width: '100%', overflow: 'hidden' }}
      >
        <div className="mx-auto w-full max-w-md">
          <div style={{ padding: '16px 8px 8px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
              <LanguageToggle variant="dark" />
            </div>
            <h1
              className="text-left"
              style={{
                fontFamily: 'Lora',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '40px',
                letterSpacing: '-0.5px',
                color: 'var(--text-light)',
                margin: 0,
              }}
            >
              {t('entry.title')}
            </h1>
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

      <motion.div
        className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 py-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {chips.map((chip) => (
          <motion.div key={chip.key} variants={chipVariants}>
            <Chip
              thumbnailSrc={chip.thumbnailSrc}
              label={t(chip.labelKey)}
              onClick={() => {
                const isScenario = typeof chip.to === 'string' && chip.to.startsWith('/scenario/')
                navigate(withLang(chip.to), isScenario ? { state: { from: 'entry' } } : undefined)
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
