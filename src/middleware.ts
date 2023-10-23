import { NextRequest, NextResponse } from "next/server";

import createMiddleware from "next-intl/middleware";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { validatePermissions } from "./utilities/permissions";

const locales = ["en", "es"];
const privatePages = ["/dashboard"];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

const authMiddleware = withAuth(
  async (request: NextRequestWithAuth) => {
    // Here we set our custom validations for routes!
    // const pathname = request.nextUrl.pathname;
    // const token = request.nextauth.token?.user.token;

    // const userPermissions =
    //   request.nextauth.token?.user.role?.permissions.map((p) => p.name) || [];

    // const valid = validatePermissions(pathname, userPermissions ?? []);

    // if (!valid) {
    //   return NextResponse.redirect(new URL("/denied", request.url));
    // }

    return intlMiddleware(request);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token != null;
        // return true;
      },
    },
  }
);

// Leaving this middleware here to be extended later when implementing auth
export default function middleware(req: NextRequest) {
  const privatePathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${privatePages.join("|")})/?`, // Quita el '?' después de la última '/'
    "i"
  );
  const isPrivatePage = privatePathnameRegex.test(req.nextUrl.pathname);

  // req.cookies.set("url-path", req.nextUrl.pathname);

  if (!isPrivatePage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
