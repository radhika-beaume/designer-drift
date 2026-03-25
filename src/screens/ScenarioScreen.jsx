import { Link, Navigate, useLocation, useParams } from 'react-router-dom'

export default function ScenarioScreen() {
  const { slug } = useParams()
  const location = useLocation()

  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  const allowedSlugs = new Set([
    'expertise-bypass',
    'strategic-exclusion',
    'authority-override',
    'opaque-evaluation',
  ])

  if (!slug || !allowedSlugs.has(slug)) {
    return <Navigate to={withLang('/')} replace />
  }

  const backTo = location.state?.from === 'followup' ? '/followup' : '/'

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col gap-6 px-6 py-8">
      <h1 className="font-['Lora'] text-2xl font-bold text-primary">
        Scenario {slug}
      </h1>
      <p className="text-secondary">Placeholder screen.</p>
      <Link className="text-teal underline underline-offset-4" to={withLang(backTo)}>
        Back
      </Link>
    </div>
  )
}
