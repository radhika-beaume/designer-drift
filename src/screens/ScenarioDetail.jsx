import React from 'react'
import { MdArrowBack, MdArrowForward, MdExpandLess, MdExpandMore, MdModeOfTravel } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { scenarios } from '../data/scenarios.js'

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
    const isNeuroPair = previousNonPillType === 'neuroscience-card' && currentType === 'neuroscience-card'
    const isVedantaPair = previousNonPillType === 'vedanta-card' && currentType === 'vedanta-card'
    if (isNeuroPair || isVedantaPair) {
      rendered.push(
        <div
          key={`card-divider-${idx}-${rendered.length}`}
          style={{
            width: '40%',
            height: '1px',
            backgroundColor: '#E4AD86',
            margin: '16px auto',
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

  if (block.type === 'divider') {
    return (
      <div
        style={{
          width: '40%',
          height: '1px',
          backgroundColor: 'var(--border-chips)',
          margin: '12px auto',
        }}
      />
    )
  }

  if (block.type === 'card-header') {
    return (
      <div
        style={{
          fontFamily: 'Source Sans 3',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '24px',
          color: 'var(--text-primary)',
          textAlign: 'left',
          margin: 0,
        }}
      >
        {block.text}
      </div>
    )
  }

  if (block.type === 'subsection-label') {
    return (
      <div>
        <div
          style={{
            width: '40%',
            height: '1px',
            backgroundColor: '#E4AD86',
            margin: '16px auto',
          }}
        />
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
          paddingLeft: '12px',
          width: 'auto',
          maxWidth: 'none',
          minWidth: 0,
        }}
      >
        <p
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            fontStyle: 'italic',
            color: 'var(--text-primary)',
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
          padding: '6px 12px',
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', flexWrap: 'nowrap' }}>
          <span style={{ width: '16px', height: '16px', flexShrink: 0, display: 'inline-flex' }}>
            <MdModeOfTravel size={16} color={'#2E2724'} />
          </span>
          <div
            style={{
              fontFamily: 'Source Sans 3',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              color: '#2E2724',
              textAlign: 'left',
              margin: 0,
            }}
          >
            {block.action}
          </div>
        </div>
        <div
          style={{
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            fontStyle: 'italic',
            color: '#2E2724',
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
            color: '#2E2724',
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
            fontSize: '16px',
            lineHeight: '26px',
            color: '#2E2724',
            textAlign: 'left',
            margin: 0,
          }}
        >
          {block.introText}
        </div>

        <div
          style={{
            backgroundColor: 'rgba(79, 67, 62, 0.1)',
            borderLeft: '3px solid #077A98',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '9px',
          }}
        >
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
            {block.highlightLabel}
          </div>
          <div
            style={{
              fontFamily: 'Source Sans 3',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '26px',
              color: '#2E2724',
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
            fontSize: '16px',
            lineHeight: '26px',
            color: '#2E2724',
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
            fontFamily: 'Source Sans 3',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            fontStyle: 'italic',
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

  const headerRadii = {
    borderTopLeftRadius: isFirst ? '8px' : 0,
    borderTopRightRadius: isFirst ? '8px' : 0,
    borderBottomLeftRadius: isLast && !isOpen ? '8px' : 0,
    borderBottomRightRadius: isLast && !isOpen ? '8px' : 0,
  }

  const bodyRadii = {
    borderBottomLeftRadius: isLast ? '8px' : 0,
    borderBottomRightRadius: isLast ? '8px' : 0,
  }

  return (
    <section>
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: '100%',
          backgroundColor: 'var(--surface-light)',
          border: 'none',
          borderBottom: '1px solid var(--accent)',
          ...headerRadii,
          padding: '12px 16px',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
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

        <span style={{ color: 'var(--text-primary)', display: 'inline-flex' }}>
          {isOpen ? <MdExpandLess size={22} /> : <MdExpandMore size={22} />}
        </span>
      </button>

      {isOpen ? (
        <div
          style={{
            backgroundColor: 'var(--background)',
            padding: '16px',
            ...bodyRadii,
          }}
        >
          <div style={{ padding: '12px', textAlign: 'left' }}>{children}</div>
        </div>
      ) : null}
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

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <header style={{ backgroundColor: 'var(--text-primary)', width: '100%', overflow: 'hidden' }}>
        <div className="mx-auto w-full max-w-md" style={{ padding: '16px 16px 12px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <button
              type="button"
              onClick={() => navigate(withLang(backTo))}
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
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '-0.3px',
                color: 'var(--text-light)',
                textAlign: 'left',
                margin: '6px 0 0 0',
              }}
            >
              {scenario.scenarioTitle || ''}
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
              {scenario.title || ''}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-md" style={{ padding: '0 16px', marginTop: '36px' }}>
        {sectionDefs.map((s, idx) => (
          <AccordionItem
            key={s.key}
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
        ))}
      </main>

      <footer className="mx-auto w-full max-w-md" style={{ padding: '16px 16px 24px 16px' }}>
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
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'var(--text-primary)',
            marginBottom: '4px',
          }}
        >
          {t('scenario_detail.footer.prompt')}
        </button>
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
          <MdArrowForward size={16} color={'#077A98'} />
        </button>
      </footer>
    </div>
  )
}
