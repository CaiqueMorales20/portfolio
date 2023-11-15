import { projects } from '@/src/data/projects'
import Project from './Project'

// Functional Component
export default function Projects() {
  // Rendering
  return (
    <section>
      <h2 className="text-neutral text-[24px] font-semibold mb-6">Projects</h2>
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
