import Script from 'next/script'
import Navbar from './components/Navbar'
import WfPageInit from './components/WfPageInit'
import VideoModals from './components/VideoModals'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ValuesSection from './components/sections/ValuesSection'
import CapabilitiesSection from './components/sections/CapabilitiesSection'
import ProcessSection from './components/sections/ProcessSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import PricingSection from './components/sections/PricingSection'
import MomentumSection from './components/sections/MomentumSection'
import CtaFooter from './components/CtaFooter'

export default function Home() {
  return (
    <>
      <WfPageInit pageId="69eb3a8cb30f30e3f2767eca" siteId="69eb3a8ab30f30e3f2767ea3" />
      <VideoModals />
      <div>
        <Navbar currentPage="index" />
        <HeroSection />
        <div className="main-wrapper">
          <AboutSection />
          <ValuesSection />
          <CapabilitiesSection />
          <ProcessSection />
          <TestimonialsSection />
          <section className="uui-section_pricing01">
            <div className="uui-page-padding-2">
              <PricingSection />
              <MomentumSection />
            </div>
          </section>
          <CtaFooter currentPage="index" pageId="69eb3a8cb30f30e3f2767eca" />
        </div>
      </div>
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
    </>
  )
}
