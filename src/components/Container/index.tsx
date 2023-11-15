// Types
type ContainerType = {
  children: React.ReactNode
}

// Functional Component
export default function Container({ children }: ContainerType) {
  // Rendering
  return <main className="z-20 relative container pt-28">{children}</main>
}
