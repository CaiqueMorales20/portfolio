// Functional Component
export default function Hero() {
  // Rendering
  return (
    <section className="mb-64 mt-32 flex flex-col gap-16">
      {/* Profession */}
      <div>
        <h1 className="text-xl text-neutral font-bold">
          <span className="text-accent font-bold relative underline-svg">
            Next & Tailwind
          </span>{' '}
          Developer
        </h1>
      </div>
      {/* Text */}
      <div className="max-w-xl  flex flex-col gap-4">
        <p className="text-base text-text">Hi there 👋</p>
        <p className="text-base text-text">
          I&apos;m Caique Morales, specializing in Next.js and Tailwind CSS. I
          emphasize crafting clean code for scalable applications and am
          passionate about responsive design, ensuring seamless experiences
          across devices with a mobile-first approach.
        </p>
      </div>
    </section>
  )
}
