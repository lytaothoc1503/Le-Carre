import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { langFromPath } from "@/lib/site";
import { t } from "@/lib/copy";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Le Carré Huế" },
      { name: "description", content: "Le Carré Huế — a modern address for Hue’s heritage. 50 boutique rooms on Lê Lợi." },
      { name: "theme-color", content: "#f3eee6" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        as: "image",
        href: "/media/hero-800.avif",
        type: "image/avif",
        fetchPriority: "high",
        media: "(max-width: 767px)",
      },
      {
        rel: "preload",
        as: "image",
        href: "/media/hero-1280.avif",
        type: "image/avif",
        fetchPriority: "high",
        media: "(min-width: 768px)",
      },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/serif-500-lat.woff2",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/serif-500-vi.woff2",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootShell,
});

function RootShell() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const lang = langFromPath(pathname);
  const c = t(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <a className="skip-link" href="#content">
          {c.skip}
        </a>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
