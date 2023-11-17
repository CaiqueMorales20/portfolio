// Imports
import Image from 'next/image'

// Types
type ProjectType = {
  title: string
  photoPath: string
  description: string
  alt: string
  github: string
  site: string
}

// Functional Component
export default function Project({
  title,
  photoPath,
  alt,
  description,
  github,
  site,
}: ProjectType) {
  // Rendering
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Image
          className="max-w-full object-cover"
          src={photoPath}
          alt={alt}
          width={1000}
          height={1000}
        />
      </div>
      <div className="min-h-[100px]">
        <div>
          <h3 className="text-base font-bold text-neutral">{title}</h3>
          <p className="text-justify text-sm text-text">{description}</p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          {/* Github */}
          <a
            className="w-5 rounded-[10px] bg-primary"
            href={github}
            target="_blank"
          >
            <Image
              className="filter-icon duration-300"
              src="/home/projects/github.svg"
              alt="Abrir no GitHub"
              width={40}
              height={40}
            />
          </a>
          {/* Site */}
          <a
            className="w-5 rounded-[10px] bg-primary"
            href={site}
            target="_blank"
          >
            <Image
              className="filter-icon duration-300"
              src="/home/projects/search.svg"
              alt="Abrir no GitHub"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
