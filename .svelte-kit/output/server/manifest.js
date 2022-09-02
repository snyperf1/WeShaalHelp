export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-2d39b90f.js","js":["start-2d39b90f.js","chunks/index-c781735b.js","chunks/index-f0190b8c.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/student\/?$/,
				params: null,
				path: "/student",
				shadow: null,
				a: [3,4],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/student\/message\/?$/,
				params: null,
				path: "/student/message",
				shadow: null,
				a: [3,5],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/student\/report\/?$/,
				params: null,
				path: "/student/report",
				shadow: null,
				a: [3,6],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/student\/report\/intro\/?$/,
				params: null,
				path: "/student/report/intro",
				shadow: null,
				a: [3,7],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/student\/report\/outro\/?$/,
				params: null,
				path: "/student/report/outro",
				shadow: null,
				a: [3,8],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/student\/tips\/?$/,
				params: null,
				path: "/student/tips",
				shadow: null,
				a: [3,9],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/staff\/?$/,
				params: null,
				path: "/staff",
				shadow: null,
				a: [11,12],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/staff\/dashboard\/?$/,
				params: null,
				path: "/staff/dashboard",
				shadow: null,
				a: [11,13],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/staff\/dashboard\/working-appliances\/?$/,
				params: null,
				path: "/staff/dashboard/working-appliances",
				shadow: null,
				a: [11,14],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/staff\/dashboard\/broken-appliances\/?$/,
				params: null,
				path: "/staff/dashboard/broken-appliances",
				shadow: null,
				a: [11,15],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/staff\/dashboard\/appliances\/?$/,
				params: null,
				path: "/staff/dashboard/appliances",
				shadow: null,
				a: [11,16],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/staff\/edit-tips\/?$/,
				params: null,
				path: "/staff/edit-tips",
				shadow: null,
				a: [11,17],
				b: []
			}
		]
	}
};
