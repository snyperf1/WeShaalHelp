const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/loginform.svelte"),
	() => import("../../src/routes/student/__layout.reset.svelte"),
	() => import("../../src/routes/student/index.svelte"),
	() => import("../../src/routes/student/message.svelte"),
	() => import("../../src/routes/student/report/index.svelte"),
	() => import("../../src/routes/student/report/questions/report-teacher-1.svelte"),
	() => import("../../src/routes/student/report/questions/report-teacher-2.svelte"),
	() => import("../../src/routes/student/report/questions/report-teacher-3.svelte"),
	() => import("../../src/routes/student/report/questions/report-teacher-4.svelte"),
	() => import("../../src/routes/student/report/questions/report-device-1.svelte"),
	() => import("../../src/routes/student/report/questions/report-device-2.svelte"),
	() => import("../../src/routes/student/report/questions/report-device-3.svelte"),
	() => import("../../src/routes/student/report/questions/report-device-4.svelte"),
	() => import("../../src/routes/student/report/questions/report-5.svelte"),
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

	// src/routes/student/report/questions/report-teacher-1.svelte
	[/^\/student\/report\/questions\/report-teacher-1\/?$/, [c[4], c[8]], []],

	// src/routes/student/report/questions/report-teacher-2.svelte
	[/^\/student\/report\/questions\/report-teacher-2\/?$/, [c[4], c[9]], []],

	// src/routes/student/report/questions/report-teacher-3.svelte
	[/^\/student\/report\/questions\/report-teacher-3\/?$/, [c[4], c[10]], []],

	// src/routes/student/report/questions/report-teacher-4.svelte
	[/^\/student\/report\/questions\/report-teacher-4\/?$/, [c[4], c[11]], []],

	// src/routes/student/report/questions/report-device-1.svelte
	[/^\/student\/report\/questions\/report-device-1\/?$/, [c[4], c[12]], []],

	// src/routes/student/report/questions/report-device-2.svelte
	[/^\/student\/report\/questions\/report-device-2\/?$/, [c[4], c[13]], []],

	// src/routes/student/report/questions/report-device-3.svelte
	[/^\/student\/report\/questions\/report-device-3\/?$/, [c[4], c[14]], []],

	// src/routes/student/report/questions/report-device-4.svelte
	[/^\/student\/report\/questions\/report-device-4\/?$/, [c[4], c[15]], []],

	// src/routes/student/report/questions/report-5.svelte
	[/^\/student\/report\/questions\/report-5\/?$/, [c[4], c[16]], []],

	// src/routes/student/report/intro.svelte
	[/^\/student\/report\/intro\/?$/, [c[4], c[17]], []],

	// src/routes/student/report/outro.svelte
	[/^\/student\/report\/outro\/?$/, [c[4], c[18]], []],

	// src/routes/student/tips.svelte
	[/^\/student\/tips\/?$/, [c[4], c[19]], []],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/staff/index.svelte
	[/^\/staff\/?$/, [c[21], c[22]], []],

	// src/routes/staff/dashboard/index.svelte
	[/^\/staff\/dashboard\/?$/, [c[21], c[23]], []],

	// src/routes/staff/dashboard/working-appliances.svelte
	[/^\/staff\/dashboard\/working-appliances\/?$/, [c[21], c[24]], []],

	// src/routes/staff/dashboard/broken-appliances.svelte
	[/^\/staff\/dashboard\/broken-appliances\/?$/, [c[21], c[25]], []],

	// src/routes/staff/dashboard/appliances.svelte
	[/^\/staff\/dashboard\/appliances\/?$/, [c[21], c[26]], []],

	// src/routes/staff/edit-tips.svelte
	[/^\/staff\/edit-tips\/?$/, [c[21], c[27]], []]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];