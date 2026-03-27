export const spring = { type: 'spring', stiffness: 260, damping: 28 }
export const easeOut = [0, 0, 0.2, 1]
export const easeIn = [0.4, 0, 1, 1]
export const easeInOut = [0.4, 0, 0.2, 1]

export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const duration = (ms) => reducedMotion ? 0 : ms / 1000
