// Fix for @react-router/dev/routes
import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/admin/admin-layout.tsx", [
    route(
      "dashboard",  // path as first argument
      "routes/admin/dashboard.tsx"  // file as second argument
    ),
    route(
      "all-users",  // path as first argument
      "routes/admin/all-users.tsx"  // file as second argument
    )
  ])

] satisfies RouteConfig;