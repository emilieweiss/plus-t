import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

//Layout for hele app, her kan ligges menu, footer osv.
function RootLayout() {
  return (
    <div className="bg-brand-black flex min-h-screen w-screen flex-col text-white">
      <Navigation />

      <main className="flex-1 py-0 md:py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
