import { motion } from 'framer-motion'
import { MdArrowBack, MdHome } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import LanguageToggle from './LanguageToggle.jsx'
import { duration } from '../motion.js'

export default function GlobalNavBar({ backTo = -1, style }) {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  const handleBack = (e) => {
    e?.stopPropagation()
    navigate(typeof backTo === 'string' ? withLang(backTo) : backTo)
  }

  const handleHome = (e) => {
    e?.stopPropagation()
    navigate(`/${location.search || ''}`, { replace: true })
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '44px',
        zIndex: 1000,
        pointerEvents: 'auto',
        touchAction: 'manipulation',
        ...(style || {}),
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '38px',
          background: 'rgba(46,39,36,0.8)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="mx-auto w-full max-w-md"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '44px', padding: '0 16px' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '44px',
            position: 'relative',
          }}
        >
          <motion.button
            type="button"
            onClick={handleBack}
            onPointerDown={(e) => {
              e.stopPropagation()
            }}
            onMouseDown={(e) => {
              e.stopPropagation()
            }}
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
            aria-label={t('nav.back', { defaultValue: 'Back' })}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: duration(100) }}
            style={{
              border: 'none',
              background: 'transparent',
              width: '44px',
              height: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-light)',
              marginLeft: '-6px',
              padding: 0,
            }}
          >
            <MdArrowBack size={16} />
          </motion.button>

          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, height: '44px' }}>
            <motion.button
              type="button"
              onClick={handleHome}
              onPointerDown={(e) => {
                e.stopPropagation()
              }}
              onMouseDown={(e) => {
                e.stopPropagation()
              }}
              onTouchStart={(e) => {
                e.stopPropagation()
              }}
              aria-label={t('nav.home', { defaultValue: 'Home' })}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: duration(100) }}
              style={{
                border: 'none',
                background: 'transparent',
                width: '44px',
                height: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-light)',
                padding: 0,
              }}
            >
              <MdHome size={16} />
            </motion.button>
          </div>

          <div style={{ position: 'relative', top: 0 }}>
            <LanguageToggle variant="dark" />
          </div>
        </div>
      </div>
    </div>
  )
}
