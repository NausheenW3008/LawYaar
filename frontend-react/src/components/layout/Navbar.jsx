import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Scale } from 'lucide-react'
import logo from '../../assets/logo.png'
import { ROUTES } from '../../constants/routes'
const MotionLink = motion(Link)
const navItems = [
  { label: 'Home', to: ROUTES.home },
  { label: 'How it Works', to: '#how' },
  { label: 'FAQ', to: '#faq' },
  { label: 'Find Lawyer', to: ROUTES.findLawyer },
]

function Navbar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/50 bg-white/75 shadow-sm shadow-slate-950/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to={ROUTES.home} className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-lg shadow-indigo-950/10 ring-1 ring-slate-200 transition group-hover:-translate-y-0.5">
            <img
              src={logo}
              alt="LawYaar Logo"
              className="h-9 w-9 object-contain"
            />
          </span>
          <span className="text-xl font-bold tracking-wide text-slate-950 sm:text-2xl">
            LAWYAAR
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/70 p-1 text-sm font-semibold text-slate-600 shadow-sm shadow-slate-950/5 md:flex">
          {navItems.map((item) =>
            item.to.startsWith('#') ? (
              <a
                key={item.label}
                href={
                  location.pathname === ROUTES.home
                    ? item.to
                    : `${ROUTES.home}${item.to}`
                }
                className="rounded-full px-4 py-2 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-full px-4 py-2 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <MotionLink
  to={ROUTES.login}
  whileHover={{ y: -2, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="hidden rounded-full bg-gradient-to-r from-blue-900 to-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 transition sm:inline-flex"
>
  Login / Signup
</MotionLink>

        <div className="flex items-center gap-3 md:hidden">
          <Scale className="h-6 w-6 text-blue-900" aria-hidden="true" />
          <Menu className="h-6 w-6 text-slate-700" aria-hidden="true" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
