const RouteModules = [
	{ 
		path: '/login', 
		layout: 'auth', 
		permission: 'guest', 
		moduleHTML: () => import('@/pages/authentication/login/index.html?raw'), 
		moduleJS: () => import('@/pages/authentication/login/index.js'),
	},
	{ 
		path: '/recuperar', 
		layout: 'auth', 
		permission: 'guest', 
		moduleHTML: () => import('@/pages/authentication/recovery/index.html?raw'), 
		moduleJS: () => import('@/pages/authentication/recovery/index.js'),
	},
	{ 
		path: '/', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/home/index.html?raw'), 
		moduleJS: () => import('@/pages/home/index.js'),
	},
	{ 
		path: '/aluno/cadastro', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/cadastro/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/cadastro/index.js'),
	},
	{ 
		path: '/aluno/editar/:id', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/editar/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/editar/index.js'),
	},
	{ 
		path: '/aluno/lista', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/lista/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/lista/index.js'),
	},
	{ 
		path: '/aluno/boletim', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/boletim/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/boletim/index.js'),
	},
	{ 
		path: '/aluno/frequencia', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/frequencia/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/frequencia/index.js'),
	},
	{ 
		path: '/aluno/declaracao_matricula', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/declaracao_matricula/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/declaracao_matricula/index.js'),
	},
	{ 
		path: '/aluno/cancelar-matricula', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/cancelar_matricula/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/cancelar_matricula/index.js'),
	},
	{ 
		path: '/aluno/formandos', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/formandos/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/formandos/index.js'),
	},
	{ 
		path: '/aluno/certificado-conclusao', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/aluno/certificado_conclusao/index.html?raw'), 
		moduleJS: () => import('@/pages/aluno/certificado_conclusao/index.js'),
	},
	{ 
		path: '/turmas/ativar_inativar', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/ativar_inativar/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/ativar_inativar/index.js'),
	},
	{ 
		path: '/turmas/cadastrar', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/cadastrar/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/cadastrar/index.js'),
	},
	{ 
		path: '/turmas/frequencia/lista', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/frequencia_lista/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/frequencia_lista/index.js'),
	},
	{ 
		path: '/turmas/frequencia/:id', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/frequencia_form/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/frequencia_form/index.js'),
	},
	{ 
		path: '/turmas/matricula', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/matricula_lista/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/matricula_lista/index.js'),
	},
	{ 
		path: '/turmas/matricula/:id', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/matricula_form/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/matricula_form/index.js'),
	},
	{ 
		path: '/turmas/visualizar', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/visualizar/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/visualizar/index.js'),
	},
	{ 
		path: '/turmas/notas/lista', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/notas_lista/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/notas_lista/index.js'),
	},
	{ 
		path: '/turmas/notas/form', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/turmas/notas_form/index.html?raw'), 
		moduleJS: () => import('@/pages/turmas/notas_form/index.js'),
	},
	{ 
		path: '/settings', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('@/pages/settings/index.html?raw'), 
		moduleJS: () => import('@/pages/settings/index.js'),
	},
];

export const createModules = async () => {
	const resultArray = await Promise.all(RouteModules.map(async (item) => {
		const htmlContent = await item.moduleHTML();
		const jsContent = await item.moduleJS();
		item.htmlContent = htmlContent.default;
		item.jsContent = jsContent.default;
	  	return item;
	}));
	
	return resultArray;
};

export const createNotFoundModules = async () => {
	const routeModule = { 
		path: '*', 
		moduleHTML: () => import('@/pages/notfound/index.html?raw'), 
		moduleJS: () => import('@/pages/notfound/index.js'),
	};

	const htmlContent = await routeModule.moduleHTML();
	const jsContent = await routeModule.moduleJS();

	routeModule.htmlContent = htmlContent.default;
	routeModule.jsContent = jsContent.default;

	return routeModule;
}