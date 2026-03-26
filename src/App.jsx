import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const [page, setPage] = useState('Home')

  const pages = {
    Home: HomePage,
    About: AboutPage,
    Projects: ProjectsPage,
    Resume: ResumePage,
    Blog: BlogPage,
    Contact: ContactPage,
  }

  const PageComponent = pages[page]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} setPage={setPage} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <PageComponent setPage={setPage} />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}