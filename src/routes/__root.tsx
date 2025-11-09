import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { useRef, useState } from 'react' 
import logo from '../assets/logo.png'
import { useMatchRoute } from '@tanstack/react-router'

const base = 'inline-block pb-3'
const active = 'text-white border-b-2 border-[#58a66b]'
const inactive = 'text-gray-300 hover:text-white border-b-2 border-transparent'

function Dropdown({
  label,
  baseTo,
  items,
}: { label: string; baseTo: string; items: { to: string; label: string }[] }) {
  const matchRoute = useMatchRoute()
  const isActive = !!matchRoute({ to: baseTo, fuzzy: true })
  const base = 'inline-block pb-3'
  const active = 'text-white border-b-2 border-brand-green'
  const inactive = 'text-gray-300 hover:text-white border-b-2 border-transparent'

  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 400) 
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className={`${base} ${isActive ? active : inactive}`}>
        {label}
      </button>

      <div
        className={`absolute right-0 mt-2 w-56 rounded-md border border-white/10 bg-brand-black/95 shadow-lg z-50 ${
          open ? 'block' : 'hidden'
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <ul className="py-2">
          {items.map((i) => (
            <li key={i.to}>
              <Link
                to={i.to}
                activeProps={{ className: 'block px-4 py-2 text-white bg-white/5' }}
                inactiveProps={{ className: 'block px-4 py-2 text-gray-300 hover:bg-white/5 hover:text-white' }}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

//Layout for hele app, her kan ligges menu, footer osv.
export const Route = createRootRoute({
component: () => (
    <div className="min-h-screen w-screen bg-brand-black text-white flex flex-col">
      <nav className="h-25 border-white/10 px-10 flex items-center">
        <img src={logo} alt="Plus T logo" className="h-20 w-auto mt-10"/>
        <ul className="ml-auto flex gap-12">
          <li>
            <Link to="/" activeProps={{ className: `${base} ${active}` }} inactiveProps={{ className: `${base} ${inactive}` }}>
              Hjem
            </Link>
          </li>
          <li>
            <Dropdown
              label="Tidligere kurser"
              baseTo="/past_courses"
              items={[
                { to: '/past_courses/past2025', label: '2025' },
                { to: '/past_courses/past2024', label: '2024' },
                { to: '/past_courses/past2023', label: '2023' },
              ]}
            />
          </li>
          <li>
            <Link to="/sign_up" activeProps={{ className: `${base} ${active}` }} inactiveProps={{ className: `${base} ${inactive}` }}>
              Tilmeld dig
            </Link>
          </li>
          <li>
            <Dropdown
              label="Om"
              baseTo="/about"
              items={[
                { to: '/about/about_course', label: 'Om kurset' },
                { to: '/about/about_team', label: 'Om teamet' },
              ]}
            />
          </li>
          <li>
            <Link to="/contact" activeProps={{ className: `${base} ${active}` }} inactiveProps={{ className: `${base} ${inactive}` }}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  ),
})
