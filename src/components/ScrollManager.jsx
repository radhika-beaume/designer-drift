import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()

  const previousEntryRef = useRef(null)
  const isFirstRenderRef = useRef(true)

  const getStorageKey = (pathname, key) => {
    return `scroll:${pathname}:${key}`
  }

  useLayoutEffect(() => {
    const currentEntry = {
      pathname: location.pathname,
      key: location.key,
    }

    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false
      previousEntryRef.current = currentEntry
      window.scrollTo(0, 0)
      return
    }

    const previousEntry = previousEntryRef.current
    if (previousEntry?.pathname && previousEntry?.key) {
      try {
        const storageKey = getStorageKey(previousEntry.pathname, previousEntry.key)
        sessionStorage.setItem(storageKey, String(window.scrollY))
      } catch {
        // ignore sessionStorage failures
      }
    }

    previousEntryRef.current = currentEntry

    const shouldRestore = navigationType === 'POP' || location.state?.preserveScroll === true

    let y = 0
    if (shouldRestore) {
      try {
        const storageKey = getStorageKey(currentEntry.pathname, currentEntry.key)
        const raw = sessionStorage.getItem(storageKey)
        const parsed = raw == null ? 0 : Number(raw)
        y = Number.isFinite(parsed) ? parsed : 0
      } catch {
        y = 0
      }
    }

    window.scrollTo(0, y)
  }, [location.key, location.pathname, location.search, location.state, navigationType])

  return null
}
