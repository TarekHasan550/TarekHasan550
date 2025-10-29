import ParticlesBackground from '@/components/animations/BgPartical';
import AboutMe from '@/components/pages/AboutMe';
import Hero from '@/components/pages/Hero';
import MyWorkDimension from '@/components/pages/MyWorkDimension';
import Project from '@/components/pages/Psychology';
import { Contact } from '@/components/pages/Contact';
import { Footer } from '@/components/shared/Footer';
import Glow from '@/components/shared/Glow';
import Navbar from '../components/shared/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ParticlesBackground />
      <div className="mt-35 space-y-80">
        <Glow top={-9} left={90} size={15} opacity={30} />
        <Glow />
        <Glow top={39} left={70} opacity={35} size={10} />
        <Hero />
        <AboutMe />
        <MyWorkDimension />
        <Project />
        {/* <Skill /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
