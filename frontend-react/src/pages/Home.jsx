import FAQSection from '../components/home/FAQSection'
import FeaturesSection from '../components/home/FeaturesSection'
import HeroSection from '../components/home/HeroSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import FloatingChatButton from '../components/layout/FloatingChatButton'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f9ff] text-slate-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_20%_10%,rgba(79,70,229,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  )
}

export default Home
