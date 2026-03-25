import { Link, useLocation } from 'react-router-dom'

export default function ScenarioListScreen() {
  const location = useLocation()
  const withLang = (path) => {
    if (typeof path !== 'string') return path
    if (path.includes('?')) return path
    return `${path}${location.search || ''}`
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col gap-6 px-6 py-8">
      <h1 className="font-['Lora'] text-2xl font-bold text-primary">Scenario List</h1>
      <p className="text-secondary">Placeholder screen.</p>
      <Link className="text-teal underline underline-offset-4" to={withLang('/')}>
        Back
      </Link>
    </div>
  )
}
