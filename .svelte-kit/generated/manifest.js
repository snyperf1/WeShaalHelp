const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/loginform.svelte"),
	() => import("../../src/routes/student/__layout.reset.svelte"),
	() => import("../../src/routes/student/index.svelte"),
	() => import("../../src/routes/student/message.svelte"),
	() => import("../../src/routes/student/report/index.svelte"),
	() => import("../../src/routes/student/report/intro.svelte"),
	() => import("../../src/routes/student/report/outro.svelte"),
	() => import("../../src/routes/student/tips.svelte"),
	() => import("../../src/routes/login.svelte"),
	() => import("../../src/routes/staff/__layout.reset.svelte"),
	() => import("../../src/routes/staff/index.svelte"),
	() => import("../../src/routes/staff/dashboard/index.svelte"),
	() => import("../../src/routes/staff/dashboard/working-appliances.svelte"),
	() => import("../../src/routes/staff/dashboard/broken-appliances.svelte"),
	() => import("../../src/routes/staff/dashboard/appliances.svelte"),
	() => import("../../src/routes/staff/edit-tips.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/loginform.svelte
	[/^\/loginform\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/student/index.svelte
	[/^\/student\/?$/, [c[4], c[5]], []],

	// src/routes/student/message.svelte
	[/^\/student\/message\/?$/, [c[4], c[6]], []],

	// src/routes/student/report/index.svelte
	[/^\/student\/report\/?$/, [c[4], c[7]], []],

	// src/routes/student/report/intro.svelte
	[/^\/student\/report\/intro\/?$/, [c[4], c[8]], []],

	// src/routes/student/report/outro.svelte
	[/^\/student\/report\/outro\/?$/, [c[4], c[9]], []],

	// src/routes/student/tips.svelte
	[/^\/student\/tips\/?$/, [c[4], c[10]], []],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/staff/index.svelte
	[/^\/staff\/?$/, [c[12], c[13]], []],

	// src/routes/staff/dashboard/index.svelte
	[/^\/staff\/dashboard\/?$/, [c[12], c[14]], []],

	// src/routes/staff/dashboard/working-appliances.svelte
	[/^\/staff\/dashboard\/working-appliances\/?$/, [c[12], c[15]], []],

	// src/routes/staff/dashboard/broken-appliances.svelte
	[/^\/staff\/dashboard\/broken-appliances\/?$/, [c[12], c[16]], []],

	// src/routes/staff/dashboard/appliances.svelte
	[/^\/staff\/dashboard\/appliances\/?$/, [c[12], c[17]], []],

	// src/routes/staff/edit-tips.svelte
	[/^\/staff\/edit-tips\/?$/, [c[12], c[18]], []]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];