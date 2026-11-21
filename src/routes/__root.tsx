import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { AvifCache } from "@/components/avif-cache";
import { VendorScripts } from "@/components/vendor-scripts";
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
      { rel: "stylesheet", href: "/fonts/brand-faces.css" },
      { rel: "stylesheet", href: "/vendor/fontawesome/css/icons.css" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/sofia/sofia-400.woff2",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/futura/futura-500.woff2",
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
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/media/hero-pool-800.avif"
          imageSrcSet="/media/hero-pool-480.avif 480w, /media/hero-pool-800.avif 800w, /media/hero-pool-1280.avif 1280w"
          imageSizes="100vw"
          fetchPriority="high"
        />
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
        <VendorScripts />
        <AvifCache />
        <Scripts />
      </body>
    </html>
  );
}
