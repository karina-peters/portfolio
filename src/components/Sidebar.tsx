import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <header className="flex flex-col justify-between h-lvh sticky top-0 py-24 pl-16">
      <div className="">
        <div className="mb-4">
            <h1>Karina Peters</h1>
            <p className="font-mono">Software Engineer</p>
        </div>
        <p className="text-neutral-80">Trusted Tester certified software engineer passionate about...blah blah blah whatever.</p>
      </div>
      <nav className="col-start-4 gap-8 flex flex-col font-mono font-medium text-neutral-95">
        <Link to="/#about">About</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#education">Education</Link>
        <Link to="/#projects">Projects</Link>
      </nav>
      <div className="">
        <p className="">GitHub, LinkedIn etc. icon links here</p>
      </div>
    </header>
  );
}