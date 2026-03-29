import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { reducedMotion, spring, duration } from '../motion.js'

export default function Chip({ number, thumbnailSrc, label, onClick }) {
  const showNumber = number !== undefined && number !== null && number !== ''
  const showThumbnail = typeof thumbnailSrc === 'string' && thumbnailSrc.length > 0
  const containerRef = useRef(null)
  const [ripples, setRipples] = useState([])

  const addRipple = (event) => {
    if (reducedMotion) return
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = (event.clientX ?? rect.left + rect.width / 2) - rect.left
    const y = (event.clientY ?? rect.top + rect.height / 2) - rect.top
    const size = Math.max(rect.width, rect.height) * 2
    const id = `${Date.now()}-${Math.random()}`

    setRipples((prev) => [...prev, { id, x, y, size }])
  }

  return (
    <motion.button
      ref={containerRef}
      type="button"
      onClick={onClick}
      onPointerDown={addRipple}
      style={{ border: 'none', borderBottom: '1px solid var(--border-chips)' }}
      className="relative w-full min-h-[44px] rounded-lg bg-surface px-4 py-3 text-left transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
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
    >
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '8px', pointerEvents: 'none' }}
      >
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: duration(400), ease: 'easeOut' }}
              onAnimationComplete={() => setRipples((prev) => prev.filter((p) => p.id !== r.id))}
              style={{
                position: 'absolute',
                width: `${r.size}px`,
                height: `${r.size}px`,
                left: `${r.x - r.size / 2}px`,
                top: `${r.y - r.size / 2}px`,
                borderRadius: '9999px',
                backgroundColor: 'rgba(46,39,36,0.12)',
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className={`flex items-center ${(showThumbnail || showNumber) ? 'gap-3' : 'gap-0'}`}>
        {showThumbnail ? (
          <img
            src={thumbnailSrc}
            alt=""
            width={54}
            height={54}
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              objectFit: 'cover',
              flexShrink: 0,
              display: 'block',
            }}
          />
        ) : showNumber ? (
          <div className="font-['Lora'] text-[32px] font-bold leading-none text-secondary opacity-30">
            {number}
          </div>
        ) : null}
        <div className="text-base font-normal text-primary">{label}</div>
      </div>
    </motion.button>
  )
}
