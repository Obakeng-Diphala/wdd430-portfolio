import ProjectList from "../components/ProjectList";
import SkillCard from "../components/SkillCard";

const projects = [
  {
    id: 1,
    type: "opensource",
    title: "Calendar Project",
    description:
      "A Java GUI program that is built to demonstrate a calendar that can handle multiple tasks and events.",
    technologies: ["Java", "JavaFX"],
    link: "https://github.com/byui-dev/calendar-project",
  },
  {
    id: 2,
    type: "opensource",
    title: "Note taking app",
    description: "A simple note-taking app built using Kotlin",
    technologies: ["Kotlin"],
    link: "https://github.com/byui-dev/note-taking-app",
  },
];

const skills = [
  {
    title: "Java",
    description: "Proficient in Java programming and object-oriented design.",
    level: "Advanced",
    technologies: ["Java", "Spring", "Hibernate"],
  },
  {
    title: "Kotlin",
    description: "Experienced in Kotlin development for Android and backend applications.",
    level: "Intermediate",
    technologies: ["Kotlin", "Android", "ktor"],
  },
  {
    title: "FrontEnd Development",
    description: "Skilled in building responsive and interactive web applications.",
    level: "Intermediate",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    description: "Familiar with building scalable backend systems and APIs.",
    level: "Beginner",
    technologies: ["Node.js", "Python", "Express"],
  },
  {
    title: "Problem Solving", 
    description: "Able to analyze problems and develop effective solutions.",
    level: "Advanced",
    technologies: ["Critical Thinking", "Logical Reasoning"],
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to my project portfolio.
          </h1>
        </header>

        <section className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          <p>
            I build practical software projects focused on problem solving, user
            experience, and clean design.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.title}
                title={skill.title}
                description={skill.description}
                level={skill.level}
                technologies={skill.technologies}
              />
            ))}
          </div>
        </section>

        <ProjectList projects={projects} />
      </div>
    </main>
  );
}
