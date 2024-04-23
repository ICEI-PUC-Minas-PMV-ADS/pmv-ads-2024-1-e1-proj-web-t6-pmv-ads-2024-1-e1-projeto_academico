export const RouteModules = [
	{ 
		path: '/login', 
		layout: 'auth', 
		permission: 'guest', 
		moduleHTML: '/src/pages/authentication/login/index.html', 
		moduleJS: '/src/pages/authentication/login/index.js'
	},
	{ 
		path: '/', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/home/index.html', 
		moduleJS: '/src/pages/home/index.js'
	},
	{ 
		path: '/aluno/cadastro', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/aluno/cadastro/index.html', 
		moduleJS: '/src/pages/aluno/cadastro/index.js'
	},
	{ 
		path: '/aluno/matricula', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/aluno/matricula/index.html', 
		moduleJS: '/src/pages/aluno/matricula/index.js'
	},
	{ 
		path: '/aluno/boletim', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/aluno/boletim/index.html', 
		moduleJS: '/src/pages/aluno/boletim/index.js'
	},
	{ 
		path: '/aluno/frequencia', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/aluno/frequencia/index.html', 
		moduleJS: '/src/pages/aluno/frequencia/index.js'
	},
	{ 
		path: '/aluno/cancelar-matricula', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/aluno/cancelar_matricula/index.html', 
		moduleJS: '/src/pages/aluno/cancelar_matricula/index.js'
	},
	{ 
		path: '/aluno/formandos', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/aluno/formandos/index.html', 
		moduleJS: '/src/pages/aluno/formandos/index.js'
	},
	{ 
		path: '/aluno/certificado-conclusao', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/aluno/certificado_conclusao/index.html', 
		moduleJS: '/src/pages/aluno/certificado_conclusao/index.js'
	},
	{ 
		path: '/turmas/ativar_inativar', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/turmas/ativar_inativar/index.html', 
		moduleJS: '/src/pages/turmas/ativar_inativar/index.js'
	},
	{ 
		path: '/turmas/cadastrar', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/turmas/cadastrar/index.html', 
		moduleJS: '/src/pages/turmas/cadastrar/index.js'
	},
	{ 
		path: '/turmas/lancar_frequencia', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/turmas/lancar_frequencia/index.html', 
		moduleJS: '/src/pages/turmas/lancar_frequencia/index.js'
	},
	{ 
		path: '/turmas/matricula', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/turmas/matricula/index.html', 
		moduleJS: '/src/pages/turmas/matricula/index.js'
	},
	{ 
		path: '/turmas/visualizar', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/turmas/visualizar/index.html', 
		moduleJS: '/src/pages/turmas/visualizar/index.js'
	},
	{ 
		path: '/settings', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: '/src/pages/settings/index.html', 
		moduleJS: '/src/pages/settings/index.js'
	},
];
