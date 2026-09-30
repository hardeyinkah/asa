import { Link } from "react-router-dom"

export default function TextLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-terracotta underline decoration-terracotta/30 underline-offset-[3px] hover:decoration-terracotta"
    >
      {children}
    </Link>
  )
}
