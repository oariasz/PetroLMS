import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
// This is was is unsupported using clerkMiddleware instead of authMiddleware
/*
export default clerkMiddleware ({
  publicRoutes: ["/test"]
})
*/

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};