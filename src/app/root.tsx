import { Meta, Links, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Footer } from "@components";
import "~/styles/global.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children /* App, ErrorBoundary, or HydrateFallback */}
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="app flex flex-col min-h-screen">
      <Outlet />
      <Footer />
    </div>
  );
}

export function ErrorBoundary() {}
