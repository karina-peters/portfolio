import { About, Experience, Education, Projects } from "@features";
import { Sidebar } from "~/components";
import {} from "~/features/Projects";

export default function Home() {
  return (
    <div className="flex flex-row gap-16 mx-auto min-h-screen max-w-screen-xl">
      <Sidebar />
      <main className="w-(--content-width) col-span-5 flex flex-col gap-16 py-24 pr-16">
        <About />
        <Experience />
        <Education />
        <Projects />
      </main>
    </div>
  );
}
