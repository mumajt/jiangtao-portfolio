import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Strengths from './components/Strengths.jsx'
import AiWorkflow from './components/AiWorkflow.jsx'
import ContactFooter from './components/ContactFooter.jsx'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Strengths />
        <AiWorkflow />
        <ContactFooter />
      </main>
    </div>
  )
}
