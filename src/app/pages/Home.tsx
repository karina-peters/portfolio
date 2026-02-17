import { About, Certifications, Experience, Education, Projects } from "@features";
import { Navbar } from "~/components";
import {} from "~/features/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
    </main>
  );
}
