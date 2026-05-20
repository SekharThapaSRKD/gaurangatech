import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Clients from '@/components/clients'
import Testimonials from '@/components/testimonials'
import Trainings from '@/components/trainings-home'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Trainings />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
