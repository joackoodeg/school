import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/*
import { routeAccessMap } from "./lib/settings";

ACTIVAR DSP ESTOY EVITANDO PROTECCION DE RUTAS EN DESARROLLO

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));

console.log(matchers);

export default clerkMiddleware((auth, req) => {
  // if (isProtectedRoute(req)) auth().protect()

  const { sessionClaims } = auth();

  const role = (sessionClaims?.metadata as { role?: string })?.role;

  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && !allowedRoles.includes(role!)) {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

*/


export default clerkMiddleware((auth, req) => {
  const { sessionClaims } = auth();

  console.log("Sesión activa:", sessionClaims);

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|_static|.*\\..*).*)"], // Para que se ejecute en todas las rutas excepto archivos estáticos
};
