import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Problem } from './components/Problem.jsx'
import { Solution } from './components/Solution.jsx'
import { HowItWorks } from './components/HowItWorks.jsx'
import { Report } from './components/Report.jsx'
import { Demo } from './components/Demo.jsx'
import { Market } from './components/Market.jsx'
import { Pricing } from './components/Pricing.jsx'
import { Vision } from './components/Vision.jsx'
import { Ask } from './components/Ask.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <span id="top" />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Report />
        <Demo />
        <Market />
        <Pricing />
        <Vision />
        <Ask />
      </main>

      <Footer />
    </>
  )
}
