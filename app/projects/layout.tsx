import Link from "next/link";
import type { ReactNode } from "react";

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section>
      <nav>
        <Link href="/projects">Projects</Link> | {' '}
        <Link href="/projects/opensource">Open Source</Link> | {' '}
        <Link href="/projects/school">School</Link> | {' '}
        <Link href="/projects/settings">Settings</Link>
      </nav>
      {children}
    </section>
  );     
}      
      