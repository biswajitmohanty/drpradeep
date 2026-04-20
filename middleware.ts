import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match everything except API, Next internals, static files, and images.
  matcher: [
    "/((?!api|_next|_vercel|icon.svg|robots.txt|sitemap.xml|opengraph-image|images|.*\\..*).*)",
  ],
};
