export function mockNavLink() {
  return vi.mock('@remix-run/react', () => ({
    NavLink: ({ to, children, ...props }: { to: string; children: React.ReactNode }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  }))
}
