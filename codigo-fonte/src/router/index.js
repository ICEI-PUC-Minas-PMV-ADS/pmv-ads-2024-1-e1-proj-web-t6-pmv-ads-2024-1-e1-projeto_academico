import page from 'page';
import { createModules, createNotFoundModules } from './modules/index.js';
import { useRouter } from '/src/hooks/useRouter.js';

const { loadPage, routeMiddleware } = useRouter();

export function navigateToRoute(event, route, options = {}) {
    if (event) {
        event.preventDefault();
    }
    
    page(route, options);
}

window.navigateToRoute = navigateToRoute;

export const router = async () => {
    const RouteModules = await createModules();
    
    RouteModules.forEach(async (route) => {
        page(route.path, routeMiddleware(route.permission), async () => {
            await loadPage(route.htmlContent, route.jsContent, route.layout);
        });
    });

    const notFoundModule = await createNotFoundModules();

    page('*', async () => {
        await loadPage(notFoundModule.htmlContent, notFoundModule.jsContent);
    });

    await page.start();
};