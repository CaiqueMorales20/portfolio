import { projects } from '@/src/data/projects'
import Project from './Project'

// Functional Component
export default function Projects() {
  // Rendering
  return (
    <section className="pt-60">
      <h2 className="mb-6 text-[24px] font-semibold text-neutral">Projects</h2>
      <div className="grid grid-cols-3 gap-6 gap-y-10">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            photoPath={project.photoPath}
            alt={project.alt}
            description={project.description}
            github={project.github}
            site={project.site}
          />
        ))}
      </div>
    </section>
  )
}
