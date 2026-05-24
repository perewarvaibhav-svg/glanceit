import { Hono } from 'hono';
import type { Handler } from 'hono/types';
import updatedFetch from '../src/__create/fetch';

const API_BASENAME = '/api';
const api = new Hono();

if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Helper function to transform file path to Hono route path
function getHonoPath(routeFile: string): { name: string; pattern: string }[] {
  const relativePath = routeFile.replace('../src/app/api', '');
  const parts = relativePath.split('/').filter(Boolean);
  const routeParts = parts.slice(0, -1); // Remove 'route.js'
  if (routeParts.length === 0) {
    return [{ name: 'root', pattern: '' }];
  }
  const transformedParts = routeParts.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === '...'
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  return transformedParts;
}

// Import and register all routes
async function registerRoutes() {
  api.routes = [];

  // Use Vite's import.meta.glob instead of fs.readdir so it works in production
  const routeModules = import.meta.glob('../src/app/api/**/route.{js,ts,jsx,tsx}', { eager: true });
  
  const routeFiles = Object.keys(routeModules).sort((a, b) => b.length - a.length);

  for (const routeFile of routeFiles) {
    try {
      const route = routeModules[routeFile] as any;
      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
      
      for (const method of methods) {
        if (route[method]) {
          const parts = getHonoPath(routeFile);
          const honoPath = `/${parts.map(({ pattern }) => pattern).join('/')}`;
          
          const handler: Handler = async (c) => {
            const params = c.req.param();
            if (import.meta.env.DEV) {
              // In dev, we can dynamically import to get the latest version
              const dynamicModules = import.meta.glob('../src/app/api/**/route.{js,ts,jsx,tsx}');
              if (dynamicModules[routeFile]) {
                const updatedRoute = await dynamicModules[routeFile]() as any;
                if (updatedRoute[method]) {
                  return await updatedRoute[method](c.req.raw, { params });
                }
              }
            }
            return await route[method](c.req.raw, { params });
          };
          
          const methodLowercase = method.toLowerCase();
          switch (methodLowercase) {
            case 'get':
              api.get(honoPath, handler);
              break;
            case 'post':
              api.post(honoPath, handler);
              break;
            case 'put':
              api.put(honoPath, handler);
              break;
            case 'delete':
              api.delete(honoPath, handler);
              break;
            case 'patch':
              api.patch(honoPath, handler);
              break;
            default:
              console.warn(`Unsupported method: ${method}`);
              break;
          }
        }
      }
    } catch (error) {
      console.error(`Error registering route ${routeFile}:`, error);
    }
  }
}

// Initial route registration
await registerRoutes();

// Hot reload routes in development
if (import.meta.env.DEV) {
  if (import.meta.hot) {
    import.meta.hot.accept((newSelf) => {
      registerRoutes().catch((err) => {
        console.error('Error reloading routes:', err);
      });
    });
  }
}

export { api, API_BASENAME };
