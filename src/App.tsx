import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DataStateProvider } from './hooks/dataState'
import { DashboardPage } from './pages/DashboardPage'
import { SubjectsPage } from './pages/SubjectsPage'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { GuidePage } from './pages/GuidePage'
import { AssistantPage } from './pages/AssistantPage'
import { ActivityPage } from './pages/ActivityPage'
import { BadgesPage } from './pages/BadgesPage'
import { ProfilePage } from './pages/ProfilePage'

export default function App() {
  return (
    <DataStateProvider>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<DashboardPage />} />
          <Route path="subjects" element={<SubjectsPage />} />
          <Route path="subjects/:courseId" element={<CourseDetailPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="assistant" element={<AssistantPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="badges" element={<BadgesPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </DataStateProvider>
  )
}
