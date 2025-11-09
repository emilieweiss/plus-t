import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import logo from '../assets/logo.png'

const base = 'inline-block pb-3'
const active = 'text-white border-b-2 border-brand-green' 
const inactive = 'text-gray-300 hover:text-white border-b-2 border-transparent'

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
            <Link to="/past_courses" activeProps={{ className: `${base} ${active}` }} inactiveProps={{ className: `${base} ${inactive}` }}>
              Tidligere kurser
            </Link>
          </li>
          <li>
            <Link to="/sign_up" activeProps={{ className: `${base} ${active}` }} inactiveProps={{ className: `${base} ${inactive}` }}>
              Tilmeld dig
            </Link>
          </li>
          <li>
            <Link to="/about" activeProps={{ className: `${base} ${active}` }} inactiveProps={{ className: `${base} ${inactive}` }}>
              Om
            </Link>
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
