// Fix for @react-router/dev/routes
import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route(
    "dashboard",  // path as first argument
    "routes/admin/dashboard.tsx"  // file as second argument
  ),
] satisfies RouteConfig;