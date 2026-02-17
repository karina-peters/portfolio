import { type RouteConfig, route } from "@react-router/dev/routes";

export default [route("/", "./pages/Home.tsx"), route("/project/:id", "./pages/Project.tsx")] satisfies RouteConfig;
