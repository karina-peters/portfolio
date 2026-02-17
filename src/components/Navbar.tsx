import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav>
          <Link to="/#about">About</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#education">Education</Link>
          <Link to="/#certifications">Certifications</Link>
          <Link to="/#projects">Projects</Link>
        </nav>
      </div>
    </aside>
  );
}
