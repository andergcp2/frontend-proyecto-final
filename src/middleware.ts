import { NextRequest, NextResponse } from "next/server";

import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
});

// Leaving this middleware here to be extended later when implementing auth
export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
