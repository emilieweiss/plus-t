import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { useMatchRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const base = "inline-block pb-3";
const active = "text-white border-b-2 border-brand-green";
const inactive = "text-gray-300 hover:text-white border-b-2 border-transparent";

function Dropdown({
  label,
  baseTo,
  items,
}: {
  label: string;
  baseTo: string;
  items: { to: string; label: string }[];
}) {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to: baseTo, fuzzy: true });
  const base = "inline-block pb-3";
  const active = "text-white border-b-2 border-brand-green";
  const inactive =
    "text-gray-300 hover:text-white border-b-2 border-transparent";

  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link to={baseTo} className={`${base} ${isActive ? active : inactive}`}>
        {label}
      </Link>

      <div
        className={`bg-brand-black absolute left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-md border border-white/10 ${
          open ? "block" : "hidden"
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <ul className="py-2">
          {items.map((i) => (
            <li key={i.to}>
              <Link
                to={i.to}
                activeProps={{
                  className: "block px-4 py-2 text-white bg-white/5",
                }}
                inactiveProps={{
                  className:
                    "block px-4 py-2 text-gray-300 hover:bg-white/5 hover:text-white",
                }}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//Layout for hele app, her kan ligges menu, footer osv.
function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="bg-brand-black flex min-h-screen w-full flex-col text-white">
      <nav className="flex h-25 items-center px-6 lg:px-10">
        <Link to="/">
          <img
            src={logo}
            alt="Plus T logo"
            className="mt-0 h-10 w-auto cursor-pointer lg:mt-10 lg:h-20"
          />
        </Link>
        <ul className="ml-auto hidden gap-12 lg:flex">
          <li>
            <Link
              to="/"
              activeProps={{ className: `${base} ${active}` }}
              inactiveProps={{ className: `${base} ${inactive}` }}
            >
              Hjem
            </Link>
          </li>
          <li>
            <Dropdown
              label="Tidligere kurser"
              baseTo="/past_courses/past_courses"
              items={[
                { to: "/past_courses/past2025", label: "2025" },
                { to: "/past_courses/past2024", label: "2024" },
              ]}
            />
          </li>
          <li>
            <Dropdown
              label="Tilmeld dig"
              baseTo="/sign_up/sign_up"
              items={[
                { to: "/sign_up/guide_for_sign_up", label: "How to guide" },
              ]}
            />
          </li>
          <li>
            <Dropdown
              label="Om"
              baseTo="/about/about"
              items={[
                { to: "/about/about_course", label: "Forberedelse til kursus" },
                { to: "/about/about_team", label: "Om teamet" },
              ]}
            />
          </li>
          <li>
            <Link
              to="/contact"
              activeProps={{ className: `${base} ${active}` }}
              inactiveProps={{ className: `${base} ${inactive}` }}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      {/* Flydende menu-knap i nederste højre hjørne på mobil */}
      <button
        className="bg-brand-black/80 fixed right-6 bottom-6 z-40 rounded-full p-4 text-white shadow-lg lg:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Åben menu"
        type="button"
      >
        <Menu className="h-6 w-6" />
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="bg-brand-black fixed inset-0 z-50 flex flex-col items-center justify-center lg:hidden"
        >
          {/* Luk-knap i øverste højre hjørne */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            aria-label="Luk menu"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Menu links - centreret */}
          <div className="flex flex-col items-center space-y-6">
            <Link
              to="/"
              className="hover:text-brand-green text-xl text-white"
              onClick={() => setMenuOpen(false)}
            >
              Hjem
            </Link>

            {/* Tidligere kurser med sub-links */}
            <div className="flex flex-col items-center space-y-3">
              <Link
                to="/past_courses/past_courses"
                className="hover:text-brand-green text-xl text-white"
                onClick={() => setMenuOpen(false)}
              >
                Tidligere kurser
              </Link>
              <div className="flex flex-col items-center space-y-2">
                <Link
                  to="/past_courses/past2025"
                  className="hover:text-brand-green text-base text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  2025
                </Link>
                <Link
                  to="/past_courses/past2024"
                  className="hover:text-brand-green text-base text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  2024
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <Link
                to="/sign_up/sign_up"
                className="hover:text-brand-green text-xl text-white"
                onClick={() => setMenuOpen(false)}
              >
                Tilmeld dig
              </Link>
              <div className="flex flex-col items-center space-y-2">
                <Link
                  to="/sign_up/guide_for_sign_up"
                  className="hover:text-brand-green text-base text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  How to guide
                </Link>
              </div>
            </div>

            {/* Om med sub-links */}
            <div className="flex flex-col items-center space-y-3">
              <Link
                to="/about/about"
                className="hover:text-brand-green text-xl text-white"
                onClick={() => setMenuOpen(false)}
              >
                Om
              </Link>
              <div className="flex flex-col items-center space-y-2">
                <Link
                  to="/about/about_course"
                  className="hover:text-brand-green text-base text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Forberedelse til kursus
                </Link>
                <Link
                  to="/about/about_team"
                  className="hover:text-brand-green text-base text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Om teamet
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="hover:text-brand-green text-xl text-white"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}

      <main className="flex w-full flex-1 flex-col py-0 md:py-8">
        <Outlet />
      </main>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
