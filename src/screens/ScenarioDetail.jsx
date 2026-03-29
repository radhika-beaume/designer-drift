import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdArrowForward, MdExpandLess, MdExpandMore } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import GlobalNavBar from '../components/GlobalNavBar.jsx'
import MotionLink from '../components/MotionLink.jsx'
import { scenarios } from '../data/scenarios.js'
import { easeIn, easeOut, reducedMotion, spring, duration } from '../motion.js'

function findScenarioBySlug(slug) {
  return scenarios.find((s) => s.slug === slug) || null
}

function renderBlocks(blocks) {
  const rendered = []

  let pillBuffer = []
  let previousNonPillType = null
  const flushPills = () => {
    if (pillBuffer.length === 0) return
    rendered.push(
      <div
        key={`pill-group-${rendered.length}`}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          alignItems: 'flex-start',
        }}
      >
        {pillBuffer.map((b, idx) => (
          <ContentBlock key={`pill-${rendered.length}-${idx}`} block={b} />
        ))}
      </div>
    )
    pillBuffer = []
    previousNonPillType = 'pill-group'
  }

  blocks.forEach((block, idx) => {
    if (block?.type === 'pill') {
      pillBuffer.push(block)
      return
    }

    flushPills()

    const currentType = block?.type || null

    const isWhySubsectionLabel =
      currentType === 'subsection-label' &&
      typeof block?.text === 'string' &&
      block.text.trim().toLowerCase().startsWith('why ')

    if (isWhySubsectionLabel && previousNonPillType) {
      rendered.push(
        <div
          key={`subsection-divider-${idx}-${rendered.length}`}
          style={{
            width: '50%',
            height: '1px',
            backgroundColor: '#E4AD86',
            margin: '16px auto',
          }}
        />
      )
    }

    const isNeuroPair = previousNonPillType === 'neuroscience-card' && currentType === 'neuroscience-card'
    const isVedantaPair = previousNonPillType === 'vedanta-card' && currentType === 'vedanta-card'
    if (isNeuroPair || isVedantaPair) {
      rendered.push(
        <div
          key={`card-divider-${idx}-${rendered.length}`}
          style={{
            width: '50%',
            height: '1px',
            backgroundColor: '#E4AD86',
            margin: '12px auto',
          }}
        />
      )
    }

    rendered.push(<ContentBlock key={idx} block={block} />)
    previousNonPillType = currentType
  })

  flushPills()
  return rendered
}

function ContentBlock({ block }) {
  if (!block) return null

  if (block.type === 'paragraph') {
    return (
      <p
        style={{
          fontFamily: 'Source Sans 3',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '26px',
          color: 'var(--text-primary)',
          textAlign: 'left',
          margin: 0,
        }}
      >
        {block.text}
      </p>
    )
  }

  if (block.type === 'subsection-label') {
    return (
      <div
        style={{
          fontFamily: 'Source Sans 3',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '26px',
          color: 'var(--text-primary)',
          textAlign: 'left',
          margin: 0,
        }}
      >
        {block.text}
      </div>
    )
  }

  if (block.type === 'quote') {
    const quoteText = typeof block.text === 'string' ? block.text : ''

    const endMatch = quoteText.match(/([\s\S]*?)(\s*)([»”"])\s*$/)
    const baseText = endMatch ? endMatch[1] : quoteText
    const endQuoteChar = endMatch ? endMatch[3] : null

    return (
      <div
        style={{
          borderLeft: '3px solid var(--accent)',
          paddingLeft: '8px',
          width: 'auto',
          maxWidth: 'none',
          minWidth: 0,
        }}
      >
        <p
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '26px',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            textAlign: 'left',
            margin: 0,
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            maxWidth: 'none',
            minWidth: 0,
          }}
        >
          {baseText}
          {endQuoteChar ? (
            <span style={{ whiteSpace: 'nowrap' }}>{`\u2060${endQuoteChar}`}</span>
          ) : (
            <span style={{ whiteSpace: 'nowrap' }}>{'\u2060”'}</span>
          )}
        </p>
      </div>
    )
  }

  if (block.type === 'pill') {
    return (
      <span
        style={{
          display: 'inline-block',
          border: '1px solid var(--border-chips)',
          borderRadius: '16px',
          padding: '8px 4px',
          fontFamily: 'Source Sans 3',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '22px',
          color: 'var(--text-secondary)',
          textAlign: 'left',
        }}
      >
        {block.text}
      </span>
    )
  }

  if (block.type === 'strategy') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div
          style={{
            borderLeft: '3px solid var(--border-chips)',
            paddingLeft: '8px',
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '26px',
            color: 'var(--text-primary)',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {block.action}
        </div>
        <div
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            paddingLeft: '4px',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {block.thought}
        </div>
      </div>
    )
  }

  if (block.type === 'neuroscience-card') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '26px',
            color: 'var(--text-primary)',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {block.title}
        </div>

        <div
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'var(--text-primary)',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {block.introText}
        </div>

        <div
          style={{
            backgroundColor: 'rgba(79,67,62,0.15)',
            borderLeft: '3px solid #077A98',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontFamily: 'Azeret Mono',
              fontWeight: 500,
              fontSize: '10px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#077A98',
              textAlign: 'left',
              margin: 0,
            }}
          >
            {block.highlightLabel}
          </div>
          <div
            style={{
              fontFamily: 'Source Sans 3',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '22px',
              color: 'var(--text-primary)',
              textAlign: 'left',
              margin: 0,
            }}
          >
            {block.highlightBody}
          </div>
        </div>

        <div
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'var(--text-primary)',
            textAlign: 'left',
            margin: '4px 0 0 0',
          }}
        >
          {block.trailingText}
        </div>
      </div>
    )
  }

  if (block.type === 'vedanta-card') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div
          style={{
            fontFamily: 'Azeret Mono',
            fontWeight: 400,
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#077A98',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {block.title}
        </div>

        <div
          style={{
            fontFamily: 'Lora',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '28px',
            fontStyle: 'italic',
            letterSpacing: 0,
            color: '#4F433E',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {block.insightText}
        </div>

        <div
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '26px',
            color: '#2E2724',
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {block.body}
        </div>
      </div>
    )
  }

  return null
}

function AccordionItem({ label, heading, isOpen, onToggle, position, children }) {
  const isFirst = position === 'first'
  const isLast = position === 'last'

  const headerRef = React.useRef(null)
  const [ripples, setRipples] = React.useState([])

  const addRipple = (event) => {
    if (reducedMotion) return
    const el = headerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = (event.clientX ?? rect.left + rect.width / 2) - rect.left
    const y = (event.clientY ?? rect.top + rect.height / 2) - rect.top
    const size = Math.max(rect.width, rect.height) * 2
    const id = `${Date.now()}-${Math.random()}`

    setRipples((prev) => [...prev, { id, x, y, size }])
  }

  const headerRadii = {
    borderTopLeftRadius: isFirst ? '4px' : 0,
    borderTopRightRadius: isFirst ? '4px' : 0,
    borderBottomLeftRadius: isLast && !isOpen ? '4px' : 0,
    borderBottomRightRadius: isLast && !isOpen ? '4px' : 0,
  }

  const bodyRadii = {
    borderBottomLeftRadius: isLast ? '4px' : 0,
    borderBottomRightRadius: isLast ? '4px' : 0,
  }

  return (
    <section>
      <motion.button
        ref={headerRef}
        type="button"
        onClick={onToggle}
        onPointerDown={addRipple}
        style={{
          width: '100%',
          backgroundColor: 'var(--surface-light)',
          border: 'none',
          borderBottom: '1px solid var(--accent)',
          ...headerRadii,
          padding: '8px',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden',
        }}
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
          style={{ position: 'absolute', inset: 0, overflow: 'hidden', ...headerRadii, pointerEvents: 'none' }}
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div
            style={{
              fontFamily: 'Azeret Mono',
              fontWeight: 500,
              fontSize: '10px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: 0,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: 'Lora',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '28px',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            {heading}
          </div>
        </div>

        <motion.span
          style={{ color: 'var(--text-primary)', display: 'inline-flex' }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: duration(280),
                  ease: isOpen ? easeOut : easeIn,
                }
          }
        >
          {isOpen ? <MdExpandLess size={22} /> : <MdExpandMore size={22} />}
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="accordion-body"
            initial={{ height: 0, opacity: 0 }}
            animate={
              reducedMotion
                ? { height: 'auto', opacity: 1 }
                : {
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { ...spring, stiffness: 260, damping: 28, duration: duration(280) },
                      opacity: { duration: duration(280), ease: easeOut },
                    },
                  }
            }
            exit={
              reducedMotion
                ? { height: 0, opacity: 0 }
                : {
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: duration(280), ease: easeIn },
                      opacity: { duration: duration(280), ease: easeIn },
                    },
                  }
            }
            style={{
              backgroundColor: 'var(--background)',
              padding: '16px',
              ...bodyRadii,
              overflow: 'hidden',
            }}
          >
            <div
              className="scenario-detail-accordion-scroll"
              style={{
                padding: '12px',
                textAlign: 'left',
                maxHeight: '40vh',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain',
              }}
            >
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default function ScenarioDetail() {
  const { slug } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const scenario = slug ? findScenarioBySlug(slug) : null

  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  const backTo =
    location.state?.from === 'followup'
      ? '/followup'
      : location.state?.from === 'scenarios'
        ? '/scenarios'
        : '/'

  const [openKey, setOpenKey] = React.useState(null)

  if (!scenario) {
    return <Navigate to={withLang('/')} replace />
  }

  const sectionDefs = Array.isArray(scenario.sections)
    ? scenario.sections.map((s) => {
        return {
          key: s.id,
          label: s.sectionLabel || '',
          heading: s.heading || '',
          blocks: Array.isArray(s.content) ? s.content : [],
        }
      })
    : []

  const accordionContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: duration(30),
      },
    },
  }

  const accordionHeaderVariants = {
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
      <header style={{ width: '100%' }}>
        <div style={{ position: 'relative', width: '100%', height: '563px', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '449px', overflow: 'hidden' }}>
            <img
              src={`/illustrations/${scenario.slug}.png`}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                pointerEvents: 'none',
              }}
            />

            <GlobalNavBar backTo={backTo} style={{ height: '44px' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '449px',
              left: 0,
              right: 0,
              height: '114px',
              background: 'linear-gradient(to right, #2E2724 0%, #7B4B29 100%)',
            }}
          />

          <div className="mx-auto w-full max-w-md" style={{ position: 'absolute', top: '449px', left: 0, right: 0, height: '114px', padding: '12px 16px 0 16px' }}>
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
              {scenario.scenarioTitle || ''}
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
              {scenario.title || ''}
            </p>
          </div>
        </div>
      </header>

      <motion.main
        className="mx-auto w-full max-w-md"
        style={{ padding: '24px 16px 0 16px' }}
        variants={accordionContainerVariants}
        initial="hidden"
        animate="show"
      >
        {sectionDefs.map((s, idx) => (
          <motion.div key={s.key} variants={accordionHeaderVariants}>
            <AccordionItem
              label={s.label}
              heading={s.heading}
              isOpen={openKey === s.key}
              onToggle={() => setOpenKey((prev) => (prev === s.key ? null : s.key))}
              position={
                idx === 0 ? 'first' : idx === sectionDefs.length - 1 ? 'last' : 'middle'
              }
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {renderBlocks(s.blocks)}
              </div>
            </AccordionItem>
          </motion.div>
        ))}
      </motion.main>

      <footer className="mx-auto w-full max-w-md" style={{ padding: '16px 16px 24px 16px' }}>
        <div
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'var(--text-primary)',
            textAlign: 'left',
            marginBottom: '4px',
          }}
        >
          {t('scenario_detail.footer.prompt')}
        </div>
        <MotionLink style={{ display: 'block', width: '100%' }}>
          <button
            type="button"
            onClick={() =>
              navigate(withLang('/scenarios'), { state: { fromScenarioPath: location.pathname } })
            }
            style={{
              border: 'none',
              background: 'transparent',
              padding: 0,
              textAlign: 'left',
              width: '100%',
              fontFamily: 'Source Sans 3',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '22px',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}
          >
            {t('scenario_detail.footer.link')}
          </button>
        </MotionLink>

        <MotionLink style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <button
            type="button"
            onClick={() =>
              navigate(withLang('/exit'), { state: { fromScenarioPath: location.pathname } })
            }
            style={{
              border: 'none',
              background: 'transparent',
              padding: 0,
              textAlign: 'left',
              width: '100%',
              fontFamily: 'Source Sans 3',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '22px',
              color: '#077A98',
              textDecoration: 'underline',
              marginTop: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>{t('nav.investigate')}</span>
            <span style={{ display: 'inline-flex' }}>
              <MdArrowForward size={16} color={'#077A98'} />
            </span>
          </button>
        </MotionLink>
      </footer>
    </div>
  )
}
