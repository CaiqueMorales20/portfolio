// Types
type ContainerType = {
  children: React.ReactNode
}

// Functional Component
export default function Container({ children }: ContainerType) {
  // Rendering
  return <main className="container pt-28">{children}</main>
}
