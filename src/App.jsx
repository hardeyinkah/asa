import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import AboutPage from "./pages/AboutPage"
import EntryPage from "./pages/EntryPage"
import EventsPage from "./pages/EventsPage"
import ExplorePage from "./pages/ExplorePage"
import HomePage from "./pages/HomePage"
import LearnPage from "./pages/LearnPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProverbsPage from "./pages/ProverbsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="proverbs" element={<ProverbsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="entries/:id" element={<EntryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
