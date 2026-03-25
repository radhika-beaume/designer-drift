import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import EntryScreen from './screens/EntryScreen.jsx'
import ScenarioList from './screens/ScenarioList.jsx'
import ScenarioDetail from './screens/ScenarioDetail.jsx'
import FollowupScreen from './screens/FollowupScreen.jsx'
import ExitFlow from './screens/ExitFlow.jsx'

function NotFoundRedirect() {
  const location = useLocation()
  return <Navigate to={`/${location.search || ''}`} replace />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryScreen />} />
      <Route path="/scenarios" element={<ScenarioList />} />
      <Route path="/scenario/:slug" element={<ScenarioDetail />} />
      <Route path="/followup" element={<FollowupScreen />} />
      <Route path="/exit" element={<ExitFlow />} />
      <Route path="*" element={<NotFoundRedirect />} />
    </Routes>
  )
}

export default App
