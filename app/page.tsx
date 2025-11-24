import ParticlesBackground from '@/components/animations/BgPartical';
import AboutMe from '@/components/pages/AboutMe';
import Hero from '@/components/pages/Hero';
import MyWorkDimension from '@/components/pages/MyWorkDimension';
import Psychology from '@/components/pages/Psychology';
import { Contact } from '@/components/pages/Contact';
import { Footer } from '@/components/shared/Footer';
import Glow from '@/components/shared/Glow';
import Navbar from '../components/shared/navbar/Navbar';
import {ReactLenis} from 'lenis/react'

export default function Home() {
  return (
    <div>
      <ReactLenis root options={{lerp: 0.03, wheelMultiplier: 1.4}}/>
      <Navbar />
      <ParticlesBackground />
      <div className="mt-20 space-y-40 md:space-y-80">
        <Glow top={-9} left={90} size={15} opacity={30} />
        <Glow />
        <Glow top={39} left={70} opacity={35} size={10} />
        <Hero />
        <MyWorkDimension />
        <AboutMe />
        <Psychology />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
