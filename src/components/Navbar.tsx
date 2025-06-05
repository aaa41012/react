import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/ai-tools', label: 'AI Tools' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={clsx(
              'hover:text-blue-400 transition',
              location.pathname === item.to && 'text-blue-400 font-semibold'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
