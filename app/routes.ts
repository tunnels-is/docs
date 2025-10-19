import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('docs/*', 'docs/page.tsx'),
  // Search route removed - using client-side search for static deployment
  // route('api/search', 'docs/search.ts'),
] satisfies RouteConfig;
