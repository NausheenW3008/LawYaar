import { Link } from 'react-router-dom'
import { Scale } from 'lucide-react'
import { ROUTES } from '../../constants/routes'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 px-6 py-10 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
      <div className="premium-grid absolute inset-0 opacity-10" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <Link to={ROUTES.home} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <Scale size={23} aria-hidden="true" />
          </span>
          <div>
            <p className="text-lg font-bold tracking-wide">LAWYAAR</p>
            <p className="text-sm text-slate-400">
              Empowering You Through Legal Knowledge
            </p>
          </div>
        </Link>

        <p className="text-sm font-medium text-slate-300 sm:text-base">
          © 2026 LawYaar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
