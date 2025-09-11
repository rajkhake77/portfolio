import Grid from "@/componenets/Grid";
import Hero from "@/componenets/Hero";
import { FloatingNav } from "@/componenets/ui/FloatingNav";
import RecentProjects from "@/componenets/RecentProjects";
import { navItems } from "@/data";
import Client from "@/componenets/Client";
import Experience from "@/componenets/Experience";
import Approach from "@/componenets/Approach";
import Footer from "@/componenets/Footer";

export default function Home() {
  return (
    <main className="bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden w-full">
      <div className="max-w-7xl w-full overflow-x-hidden">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
