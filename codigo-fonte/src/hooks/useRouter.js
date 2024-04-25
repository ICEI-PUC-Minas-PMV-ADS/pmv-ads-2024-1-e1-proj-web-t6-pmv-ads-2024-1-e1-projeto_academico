import page from 'page';
import { useAuthentication } from '/src/hooks/useAuthentication.js';
import { useDashboardUtils } from '/src/hooks/useDashboardUtils.js';

export const useRouter = () => {
	const { isAuthenticated } = useAuthentication();
	const { starstartDashboardModule } = useDashboardUtils();

	async function loadPage(htmlContent, jsContent, layoutName = null) {
		const authenticationLayout = (await import('@/layouts/authentication.html?raw')).default;
		const dashboardLayout = (await import('@/layouts/dashboard.html?raw')).default;
		const layouts = {
			'auth': authenticationLayout,
			'dashboard': dashboardLayout,
		};
		const layout = layouts[layoutName];
		
		if (layout) {
			const fullHtml = layout.replace('{{{body}}}', htmlContent);
			document.getElementById('app').innerHTML = fullHtml;

			if (layoutName === 'dashboard') {
				starstartDashboardModule();
			}
		} else {
			document.getElementById('app').innerHTML = htmlContent;
		}

		jsContent.init();

		
	}

	function routeMiddleware(name = 'guest') {
		function lauchEvent() {
			setTimeout(() => {
				var mudancaPaginaEvent = new Event('changepage');
				window.dispatchEvent(mudancaPaginaEvent);
			}, 100);
		}

		function requireAuth(ctx, next) {
			lauchEvent();

			if (!isAuthenticated()) {
				page.redirect('/login');
			} else {
				next();
			}
		}
		function requireGuest(ctx, next) {
			lauchEvent();

			if (isAuthenticated()) {
				page.redirect('/');
			} else {
				next();
			}
		}

		if (name === 'auth') {
			return requireAuth;
		}

		if (name === 'guest') {
			return requireGuest;
		}

		return undefined;
	}

	return {
		loadPage,
		routeMiddleware,
	};
};
