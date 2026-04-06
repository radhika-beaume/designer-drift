import { useTranslation } from 'react-i18next'

export default function LanguageToggle({ variant = 'dark' }) {
  const { i18n } = useTranslation()

  const current = i18n.resolvedLanguage || i18n.language
  const textColor = variant === 'light' ? 'text-[#2E2724]' : 'text-[#F5EDE6]'
  const dotColor = variant === 'light' ? '#2E2724' : '#F5EDE6'
  const base = `text-[10px] uppercase tracking-[1.5px] ${textColor} focus-visible:outline-none`
  const active = 'opacity-100'
  const inactive = 'opacity-40'

  const switchLang = (newLang) => {
    const params = new URLSearchParams(window.location.search)
    params.set('lang', newLang)
    window.history.replaceState({}, '', '?' + params.toString())
    i18n.changeLanguage(newLang)
  }

  return (
    <div
      className="inline-flex items-center gap-0"
      style={{ fontFamily: "'Azeret Mono', ui-monospace, monospace" }}
    >
      <button
        type="button"
        onClick={() => switchLang('en')}
        className={`${base} flex min-h-[44px] min-w-[44px] items-center justify-end pr-1 ${
          current === 'en' ? active : inactive
        }`}
      >
        <span className="flex flex-col items-center justify-center">
          <span>EN</span>
          <span
            style={{
              width: '2px',
              height: '2px',
              borderRadius: '1px',
              backgroundColor: dotColor,
              visibility: current === 'en' ? 'visible' : 'hidden',
              marginTop: '2px',
            }}
          />
        </span>
      </button>
      <span className={`${base} opacity-40`} style={{ margin: '0 4px' }}>
        |
      </span>
      <button
        type="button"
        onClick={() => switchLang('fr')}
        className={`${base} flex min-h-[44px] min-w-[44px] items-center justify-start pl-1 ${
          current === 'fr' ? active : inactive
        }`}
      >
        <span className="flex flex-col items-center justify-center">
          <span>FR</span>
          <span
            style={{
              width: '2px',
              height: '2px',
              borderRadius: '1px',
              backgroundColor: dotColor,
              visibility: current === 'fr' ? 'visible' : 'hidden',
              marginTop: '2px',
            }}
          />
        </span>
      </button>
    </div>
  )
}
