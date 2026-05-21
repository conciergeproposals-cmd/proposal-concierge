import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Packages } from '@/components/Packages'
import { Addons } from '@/components/Addons'
import { CTABanner } from '@/components/CTABanner'
import { About } from '@/components/About'
import { Team } from '@/components/Team'
import { ServiceArea } from '@/components/ServiceArea'
import { FAQ } from '@/components/FAQ'
import { Booking } from '@/components/Booking'
import { Footer } from '@/components/Footer'
import { GoldDivider } from '@/components/GoldDivider'
import { QuickNav } from '@/components/QuickNav'
import { MobileCTA } from '@/components/MobileCTA'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />

        <GoldDivider />
        <Services />

        <GoldDivider />
        <Packages />

        <GoldDivider />
        <Addons />

        <CTABanner
          headline="Ready to plan the perfect proposal?"
          subtext="Book your free 30-minute consultation today."
        />

        <GoldDivider />
        <About />

        <GoldDivider />
        <Team />

        <CTABanner
          headline="Let's create something unforgettable."
          subtext="Book your free consultation and let's start planning."
        />

        <GoldDivider />
        <ServiceArea />

        <GoldDivider />
        <FAQ />

        <CTABanner
          headline="Still have questions? Let's talk."
          subtext="Book your free consultation and we'll answer everything."
        />

        <GoldDivider />
        <Booking />
      </main>

      <GoldDivider />
      <Footer />

      <QuickNav />
      <MobileCTA />
    </>
  )
}
