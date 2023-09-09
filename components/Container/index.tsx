// Types
type ContainerType = {
  children: React.ReactNode
}

// Functional Component
export default function Container({ children }: ContainerType) {
  // Rendering
  return (
    <main className="w-[90%] max-w-[1600px] m-auto text-red-500 pt-28">
      {children}
    </main>
  )
}
