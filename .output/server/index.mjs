globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1ecd9-jZPCY0lmqiK6aEuPmRK2bN2MlPw\"",
		"mtime": "2026-08-12T06:25:06.994Z",
		"size": 126169,
		"path": "../public/favicon.ico"
	},
	"/_redirects": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-XhAJEZACACf1E4TpyZvGieSw1AY\"",
		"mtime": "2026-08-12T06:25:06.988Z",
		"size": 23,
		"path": "../public/_redirects"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-08-12T06:25:06.994Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/app-Cxnfez0a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2-camqQJQKVfvOni3qMr0yI8wd//c\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 242,
		"path": "../public/assets/app-Cxnfez0a.js"
	},
	"/assets/add-material-dialog-BBL9qVuu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c0d-wckFvYMefBDgMWBI5/qwDsHrtC8\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 15373,
		"path": "../public/assets/add-material-dialog-BBL9qVuu.js"
	},
	"/assets/activity-DRoCPmr-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-tOlrXMWmxKNZFBc0x37VFUGb5cU\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 234,
		"path": "../public/assets/activity-DRoCPmr-.js"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"43361-Q3eyLhLAi4CCP7TDpy5EgPoiPCQ\"",
		"mtime": "2026-08-12T06:25:06.994Z",
		"size": 275297,
		"path": "../public/logo.png"
	},
	"/assets/app-shell-D0NNpHsj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6897-z7O968jYYoXKyQnpeI0Y8/cpBEE\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 26775,
		"path": "../public/assets/app-shell-D0NNpHsj.js"
	},
	"/assets/archive-C2Z-YPkJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd-Ss31TyjL9LYUoHyogIhPm/0z7NY\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 253,
		"path": "../public/assets/archive-C2Z-YPkJ.js"
	},
	"/assets/arrow-down-right-CXGpLU9G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-QeOKNeJUXXrlHyO4JO+3imd0h8Q\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 169,
		"path": "../public/assets/arrow-down-right-CXGpLU9G.js"
	},
	"/assets/AreaChart-D9TJKF9I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ac0-kBNeuKGnGutVPOlefQNLkul9Xcs\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 10944,
		"path": "../public/assets/AreaChart-D9TJKF9I.js"
	},
	"/assets/arrow-down-to-line-DgfDNXOE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-espaKVOtwtWTLsXOtYJ2Sp2H2Oc\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 209,
		"path": "../public/assets/arrow-down-to-line-DgfDNXOE.js"
	},
	"/assets/arrow-up-right-ZJfs-Ruj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-1VPDpDVvV1XHfDJkhBmAWdK82rc\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-ZJfs-Ruj.js"
	},
	"/assets/arrow-right-t3Cv_00c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-DeP8yYJlW8CSNYCFp8zzX7DxTsI\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 165,
		"path": "../public/assets/arrow-right-t3Cv_00c.js"
	},
	"/assets/arrow-left-bpaZ5r8I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-wsAQ8mmnnrX2pXNTuZZLGJJC/SI\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 165,
		"path": "../public/assets/arrow-left-bpaZ5r8I.js"
	},
	"/assets/auth-BU645ts5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"678-ULtIMUJHrYFTt5Mw35LAKHiGu0Y\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 1656,
		"path": "../public/assets/auth-BU645ts5.js"
	},
	"/assets/assessment-table-BKQGeTsO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dcd-MKn6QYFlfTKh5D1YQdhBfIaOtu0\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 7629,
		"path": "../public/assets/assessment-table-BKQGeTsO.js"
	},
	"/assets/auth.forgot-password-DYHWm9Gx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40c-Qw+7LaHx3ZvuA3iKAzoWJU6paoU\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 1036,
		"path": "../public/assets/auth.forgot-password-DYHWm9Gx.js"
	},
	"/assets/auth.index-9X1W1Bj1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-CErVB22bpb0NmqED4lSk4aGZZjA\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 167,
		"path": "../public/assets/auth.index-9X1W1Bj1.js"
	},
	"/assets/auth.register-C_4i95Ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79d-QgoI8hKPdL3pGkQidmEU4NNGN+Y\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 1949,
		"path": "../public/assets/auth.register-C_4i95Ra.js"
	},
	"/assets/auth.login-CfXEN75X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c9-7y7wk/Q1oqDR1PFuJW4O4ulOuFw\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 5065,
		"path": "../public/assets/auth.login-CfXEN75X.js"
	},
	"/assets/badge-DAvd23Ut.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bd-5UcERcrvEiiJJzU/FP244794cEk\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 1213,
		"path": "../public/assets/badge-DAvd23Ut.js"
	},
	"/assets/bell-0_U3l_0A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-IFd29VeBrvZfYiAjpzTgWqBKTzo\"",
		"mtime": "2026-08-13T19:22:06.608Z",
		"size": 290,
		"path": "../public/assets/bell-0_U3l_0A.js"
	},
	"/assets/bell-ring-hw7FKdbV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-jxkWZc5P5heYuafC+84hzpOoltY\"",
		"mtime": "2026-08-13T19:22:06.608Z",
		"size": 397,
		"path": "../public/assets/bell-ring-hw7FKdbV.js"
	},
	"/assets/boxes-DVk0Cb1v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"353-sT358FfHCB4C5X1FPU8+nd5cnDo\"",
		"mtime": "2026-08-13T19:22:06.610Z",
		"size": 851,
		"path": "../public/assets/boxes-DVk0Cb1v.js"
	},
	"/assets/breadcrumbs-CsU2yssi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a9-o+BXXr8XwYIfTzOgQPC3bFrYBN4\"",
		"mtime": "2026-08-13T19:22:06.611Z",
		"size": 2217,
		"path": "../public/assets/breadcrumbs-CsU2yssi.js"
	},
	"/assets/building-2-Dt1TTlFw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-PlUOWgBbsoO5HIyu5rtnV+on+AE\"",
		"mtime": "2026-08-13T19:22:06.611Z",
		"size": 383,
		"path": "../public/assets/building-2-Dt1TTlFw.js"
	},
	"/assets/button-XkAE08KZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"152c-eKW8FqM1V1Ty15MNLmS2Xz0U3Yo\"",
		"mtime": "2026-08-13T19:22:06.612Z",
		"size": 5420,
		"path": "../public/assets/button-XkAE08KZ.js"
	},
	"/assets/calendar-clock-D7uaEmS0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a-5Xc3ErFxbRfCvHxFfthh22OoU10\"",
		"mtime": "2026-08-13T19:22:06.613Z",
		"size": 378,
		"path": "../public/assets/calendar-clock-D7uaEmS0.js"
	},
	"/assets/calendar-days-BwFsR1VK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-EYQX5fbEQsOZ2UAuIzS4qgduG74\"",
		"mtime": "2026-08-13T19:22:06.614Z",
		"size": 494,
		"path": "../public/assets/calendar-days-BwFsR1VK.js"
	},
	"/assets/calendar-plus-oQXtkjUO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a-yQaDH8ykDXq5ofQvzJbjKa3qjaM\"",
		"mtime": "2026-08-13T19:22:06.614Z",
		"size": 362,
		"path": "../public/assets/calendar-plus-oQXtkjUO.js"
	},
	"/assets/calendar-range-CcZz1vwJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-l/bQBbaSNlkm23YW5DbBQAJEiJ0\"",
		"mtime": "2026-08-13T19:22:06.616Z",
		"size": 415,
		"path": "../public/assets/calendar-range-CcZz1vwJ.js"
	},
	"/assets/chart-column-CdgHfi8T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-2RlRrrxWrIqXZY77Xx8pNLATpXU\"",
		"mtime": "2026-08-13T19:22:06.618Z",
		"size": 251,
		"path": "../public/assets/chart-column-CdgHfi8T.js"
	},
	"/assets/card-DK-pFxMz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"503-gjlemsyyX5qkDiR0JdlBwvYFWo0\"",
		"mtime": "2026-08-13T19:22:06.616Z",
		"size": 1283,
		"path": "../public/assets/card-DK-pFxMz.js"
	},
	"/assets/chart-kB5D3o0e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b2e-6ZL+B6Xu4Z0BE0g/NBVkzaFjPI4\"",
		"mtime": "2026-08-13T19:22:06.618Z",
		"size": 11054,
		"path": "../public/assets/chart-kB5D3o0e.js"
	},
	"/assets/chart-pie-aZht8PLG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"111-ii+CxkUlCRfIYtcZfA2S+XLezSQ\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 273,
		"path": "../public/assets/chart-pie-aZht8PLG.js"
	},
	"/assets/checkbox-5scLGas_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b3-K/a01V3avHgdIi1K3gNc7+rgajg\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 4531,
		"path": "../public/assets/checkbox-5scLGas_.js"
	},
	"/assets/circle-check-CLSWWMuA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ae-MCP5FcpP6qvrm7Tp8MmfXHSEBCc\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 430,
		"path": "../public/assets/circle-check-CLSWWMuA.js"
	},
	"/assets/circle-x-uyrFHN2H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-5VHNRE43rDPcVa5TOUnS51fY0Uc\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 207,
		"path": "../public/assets/circle-x-uyrFHN2H.js"
	},
	"/assets/clipboard-check-C7m6sHal.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130-xHvCyKUC6er7cM87Bkh14N6+lfA\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 304,
		"path": "../public/assets/clipboard-check-C7m6sHal.js"
	},
	"/assets/clipboard-list-BAAXJ6RH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19b-XqBmd5zxBZhuljLBxL9AN5anlcU\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 411,
		"path": "../public/assets/clipboard-list-BAAXJ6RH.js"
	},
	"/assets/collect-payment-dialog-CLBIxYbx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c03-8MnpF+a1xAqvjbO9DxU4wCcjHfM\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 7171,
		"path": "../public/assets/collect-payment-dialog-CLBIxYbx.js"
	},
	"/assets/columns-3-Cc-3Yp45.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-pZUnNtp5D4NAC6ZzpuXR8Q5CPao\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 223,
		"path": "../public/assets/columns-3-Cc-3Yp45.js"
	},
	"/assets/clock-C7YeUK6q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-tzkiaguWZE5MuVM0DQSWwRLEPJw\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 169,
		"path": "../public/assets/clock-C7YeUK6q.js"
	},
	"/assets/Combination-CNXYXnC6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59e6-YOntNTE4eLtHLY+ulbnW1mJ9KWw\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 23014,
		"path": "../public/assets/Combination-CNXYXnC6.js"
	},
	"/assets/create-package-dialog-BoTLCIr5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b2f-FvQJhhZyxba2EEbpKEeguj7w+ic\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 15151,
		"path": "../public/assets/create-package-dialog-BoTLCIr5.js"
	},
	"/assets/daily-session-store-hz54HviZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"790-T1XPFGteJx2/6k8WqJekshg6f+A\"",
		"mtime": "2026-08-13T19:22:06.625Z",
		"size": 1936,
		"path": "../public/assets/daily-session-store-hz54HviZ.js"
	},
	"/assets/dashboard-data-BQ0X3i3n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"258c-o47Qk/1B7+7+AJx3tkN8+8CBtAM\"",
		"mtime": "2026-08-13T19:22:06.625Z",
		"size": 9612,
		"path": "../public/assets/dashboard-data-BQ0X3i3n.js"
	},
	"/assets/createLucideIcon-BIjdMynN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6560-CwJlFT19wkwx73jIR8+Nif0j6SU\"",
		"mtime": "2026-08-13T19:22:06.619Z",
		"size": 25952,
		"path": "../public/assets/createLucideIcon-BIjdMynN.js"
	},
	"/assets/dialog-sb24EZ1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"838-XitV35LeebXt36teUmQIG3eUDRk\"",
		"mtime": "2026-08-13T19:22:06.626Z",
		"size": 2104,
		"path": "../public/assets/dialog-sb24EZ1Z.js"
	},
	"/assets/dist-BwuEULV9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6df-nuzSaZ2NVkf+Pb38tHlUKcAUjTI\"",
		"mtime": "2026-08-13T19:22:06.627Z",
		"size": 1759,
		"path": "../public/assets/dist-BwuEULV9.js"
	},
	"/assets/dist-CZDsQCiS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"261-6pCKcL4+1zheIAT5B6zSuMukF1o\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 609,
		"path": "../public/assets/dist-CZDsQCiS.js"
	},
	"/assets/dist-BXH4r74X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ca-3GoQ74XM84SYTp8Jc8HfjDueBNM\"",
		"mtime": "2026-08-13T19:22:06.626Z",
		"size": 714,
		"path": "../public/assets/dist-BXH4r74X.js"
	},
	"/assets/dist-DJIuNbSr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a8-38Car2zGxH4wprkwClF4bOf2gio\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 5288,
		"path": "../public/assets/dist-DJIuNbSr.js"
	},
	"/assets/dist-DOafrZyu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8091-GM0NKySdf569Ogzs5/kxUyn9FK0\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 32913,
		"path": "../public/assets/dist-DOafrZyu.js"
	},
	"/assets/dist-DHl06Nyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1398-HAW+bt77RCuMwmt4nowoTvj9h7w\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 5016,
		"path": "../public/assets/dist-DHl06Nyg.js"
	},
	"/assets/dist-tYXtL0xU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ed-Lym9tjoxIOfDNW+45LsgkMQc90A\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 749,
		"path": "../public/assets/dist-tYXtL0xU.js"
	},
	"/assets/download-Dy0IN9b8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-LPgkK1T03QGocfKoVcNobpSnLsE\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 232,
		"path": "../public/assets/download-Dy0IN9b8.js"
	},
	"/assets/ellipsis-DY5_rsLr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-HVoyQbxWri5irFD+Qn/w5enLD9Q\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 226,
		"path": "../public/assets/ellipsis-DY5_rsLr.js"
	},
	"/assets/dropdown-menu-B83UEkXY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6032-TiGXK3Hj2YfJEJZ4WGL8x+RMsUs\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 24626,
		"path": "../public/assets/dropdown-menu-B83UEkXY.js"
	},
	"/assets/empty-state-6RHMS8je.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"696-enCsPqzFHuUuiMJCvl8RN/DVBaE\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 1686,
		"path": "../public/assets/empty-state-6RHMS8je.js"
	},
	"/assets/expense-store-BttdHa2v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6de-+dIVEaAx0T0rLMiBYTH/2xfBe9U\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 1758,
		"path": "../public/assets/expense-store-BttdHa2v.js"
	},
	"/assets/eye-DNvSYfmR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-jp5jOKYcE7aIniG4rsEHWAuUbFE\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 256,
		"path": "../public/assets/eye-DNvSYfmR.js"
	},
	"/assets/form-field-d410cGQB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"441-HAZDfTEoBHc/g8XpoSYOeOtFh5c\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 1089,
		"path": "../public/assets/form-field-d410cGQB.js"
	},
	"/assets/gauge-DlkEHsN9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0-WodrYATjuPa7dxjhIjJclXy3TbI\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 176,
		"path": "../public/assets/gauge-DlkEHsN9.js"
	},
	"/assets/heart-pulse-Bv8zpbes.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d-h8G6ckDLPVTIlBiUgfTSQ0d1klg\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 333,
		"path": "../public/assets/heart-pulse-Bv8zpbes.js"
	},
	"/assets/file-text-BnrHo7s7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-lTafdlDssXdvn3GXICWqFCI/nSc\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 385,
		"path": "../public/assets/file-text-BnrHo7s7.js"
	},
	"/assets/history-DBBGAcMU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-yNVoxEpgV+31moLj5KhEokhculI\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 237,
		"path": "../public/assets/history-DBBGAcMU.js"
	},
	"/assets/image-plus-DouB3hyH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16b-WMHv9+H+bOeGzTGgRfWUvTrfMs4\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 363,
		"path": "../public/assets/image-plus-DouB3hyH.js"
	},
	"/assets/house-DjfZ_cWK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"119-xl3AnpZkCJLB0jpLrqyNB5LVJcc\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 281,
		"path": "../public/assets/house-DjfZ_cWK.js"
	},
	"/assets/generateCategoricalChart-DfFCSloD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58bb9-G3/mty3QcPsfYRPYMrFMubUkIyA\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 363449,
		"path": "../public/assets/generateCategoricalChart-DfFCSloD.js"
	},
	"/assets/input-BFZ8uEeF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"384-DCz+CdBnMgVO0Peqf7d9HyfjI8I\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 900,
		"path": "../public/assets/input-BFZ8uEeF.js"
	},
	"/assets/invoice-card-DSQqfgMk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c1d-b467azus2jz2Iuu0TmkOCp3pdK4\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 3101,
		"path": "../public/assets/invoice-card-DSQqfgMk.js"
	},
	"/assets/key-round-DXev0fNU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163-UTQXqpoE1KdDlmacQM/ffuesBr4\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 355,
		"path": "../public/assets/key-round-DXev0fNU.js"
	},
	"/assets/index-198QZgCc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"921f6-iZegxY6X8D3/WlZPtgsZEnnUlsE\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 598518,
		"path": "../public/assets/index-198QZgCc.js"
	},
	"/assets/kpi-card-DAExE6Ul.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"705-9agVSgG4ouBXfKyG1QB97wfez0w\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 1797,
		"path": "../public/assets/kpi-card-DAExE6Ul.js"
	},
	"/assets/label-afc68JcO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cd-bx4z8iWV4fjAdMMGvWut5kr/rXE\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 717,
		"path": "../public/assets/label-afc68JcO.js"
	},
	"/assets/layers-DhYExjom.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5-jvcq0HXKOi+ECxcQsRBFwXlPZu4\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 421,
		"path": "../public/assets/layers-DhYExjom.js"
	},
	"/assets/manager-session-CVJoDNlG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c-XgjZC8Sy/VyRt1Mg1hKO+vLy2Eo\"",
		"mtime": "2026-08-13T19:22:06.642Z",
		"size": 620,
		"path": "../public/assets/manager-session-CVJoDNlG.js"
	},
	"/assets/manager.assessments.index-Ccymf6qx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aef-2ZMdwfAs4qvSC4LhmY2/SPHe0I0\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 6895,
		"path": "../public/assets/manager.assessments.index-Ccymf6qx.js"
	},
	"/assets/mail-B17kjxoT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-a65mKGHmFDIim1Fr5KlY4sI0/d0\"",
		"mtime": "2026-08-13T19:22:06.628Z",
		"size": 213,
		"path": "../public/assets/mail-B17kjxoT.js"
	},
	"/assets/manager.assessments.new-Dlz7f9c-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51aa-QhECY6dBSbKZeFTc3Ns1mz81ZMI\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 20906,
		"path": "../public/assets/manager.assessments.new-Dlz7f9c-.js"
	},
	"/assets/manager-Bzd7aWe_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-xkNqsO13EBskckj7UwzxcUD7MMs\"",
		"mtime": "2026-08-13T19:22:06.642Z",
		"size": 236,
		"path": "../public/assets/manager-Bzd7aWe_.js"
	},
	"/assets/manager.assessments._assessmentId-BY8R04PJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d91-YXoCWFO200y2NCAR64yMUInQ6VU\"",
		"mtime": "2026-08-13T19:22:06.643Z",
		"size": 11665,
		"path": "../public/assets/manager.assessments._assessmentId-BY8R04PJ.js"
	},
	"/assets/manager.assessments._assessmentId-Cm7O9WJC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-u/cCi9QhXNEI31EUOjdssLfmkho\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 644,
		"path": "../public/assets/manager.assessments._assessmentId-Cm7O9WJC.js"
	},
	"/assets/manager.dashboard-DD209IEY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6439-GJoEpQlfj+owpnCpT6TjCpTKGpY\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 25657,
		"path": "../public/assets/manager.dashboard-DD209IEY.js"
	},
	"/assets/manager.daily-session.index-CGXbx7kJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21cd-MC0NFUP1tBpGudWtNnl08beJ9JY\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 8653,
		"path": "../public/assets/manager.daily-session.index-CGXbx7kJ.js"
	},
	"/assets/manager.expense.index-CyrbqUlF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57f3-5cQ4KUPCAa9XvS5vVj1FPNPiy0s\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 22515,
		"path": "../public/assets/manager.expense.index-CyrbqUlF.js"
	},
	"/assets/manager.follow-up.index-Blw9dPco.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4898-kzSPbiuhw1YPXNE4Gn+vPAOY/pQ\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 18584,
		"path": "../public/assets/manager.follow-up.index-Blw9dPco.js"
	},
	"/assets/manager.follow-up._followUpId-CVz_81yY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"301-4IvaU/TcekERmWNU6Gf45LHQLMU\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 769,
		"path": "../public/assets/manager.follow-up._followUpId-CVz_81yY.js"
	},
	"/assets/manager.follow-up._followUpId-Bs0wS8d1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ed5-X/S7ujH9BHQdA7ErFhXIqrA+lAA\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 11989,
		"path": "../public/assets/manager.follow-up._followUpId-Bs0wS8d1.js"
	},
	"/assets/manager.index-DJ7LAi8J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26-SoFMfAHVJ5oqB5t+mpFRoQvFIoc\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 38,
		"path": "../public/assets/manager.index-DJ7LAi8J.js"
	},
	"/assets/manager.materials.index-Dnj9vEUG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2879-ixnkpUvDe1m72mJovP2a9xaWnCA\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 10361,
		"path": "../public/assets/manager.materials.index-Dnj9vEUG.js"
	},
	"/assets/manager.materials.new-jvPb40Rc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6a-3r4GbYVN0mWSmyxPrDHu87yfRuY\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 3178,
		"path": "../public/assets/manager.materials.new-jvPb40Rc.js"
	},
	"/assets/manager.materials._materialId-0hThbqVR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18bf-H1/Vv/UPC9V+sfU6L6YPhRfnfQE\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 6335,
		"path": "../public/assets/manager.materials._materialId-0hThbqVR.js"
	},
	"/assets/manager.online-session-BLXCwcJl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4282-c65EoAIYZ4GF04CW188KXnc7waQ\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 17026,
		"path": "../public/assets/manager.online-session-BLXCwcJl.js"
	},
	"/assets/manager.outdoor.index-C3oAf-Oq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e8-wWmCwo9q8F4zF7fAv77YIuJxJzo\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 6376,
		"path": "../public/assets/manager.outdoor.index-C3oAf-Oq.js"
	},
	"/assets/manager.outdoor.new-BpEAEjCa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc4-x2h4aFS74V8+UcKGiI3TbsLUgWo\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 3268,
		"path": "../public/assets/manager.outdoor.new-BpEAEjCa.js"
	},
	"/assets/manager.outdoor._visitId-DLTXMg8a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1369-CUV85gpJqvaBDm7UZ5a9Nfjon0Q\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 4969,
		"path": "../public/assets/manager.outdoor._visitId-DLTXMg8a.js"
	},
	"/assets/manager.packages.index-Bit8TZPZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1de3-SFbck2algau+qm6W27wWh998NEw\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 7651,
		"path": "../public/assets/manager.packages.index-Bit8TZPZ.js"
	},
	"/assets/manager.patients.index-DkLDvivj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3552-Y8FHMqzhqYZQAqzmuMgCbcGFelw\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 13650,
		"path": "../public/assets/manager.patients.index-DkLDvivj.js"
	},
	"/assets/manager.patients._patientId-B_Wq62Xe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-ei1qH0F8P4C5OhbEuuASn/3s/2U\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 632,
		"path": "../public/assets/manager.patients._patientId-B_Wq62Xe.js"
	},
	"/assets/manager.payments.collect-BIoEIuAA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23e5-Q7wNbbpzj4fTk5Npj4AgdwixnKI\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 9189,
		"path": "../public/assets/manager.payments.collect-BIoEIuAA.js"
	},
	"/assets/manager.payments._paymentId-BBNnAkpM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-ds5l+MQncEWAx5kiR3FCQ85QetM\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 632,
		"path": "../public/assets/manager.payments._paymentId-BBNnAkpM.js"
	},
	"/assets/manager.payments.index-bEmIQ-Gj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3dde-5ou1ymHtyxttEsEhXbLvgRiRs94\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 15838,
		"path": "../public/assets/manager.payments.index-bEmIQ-Gj.js"
	},
	"/assets/manager.revenue-BcHCTmxH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5633-uYWWiCGZzh76WuOM/5c33jNM6hA\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 22067,
		"path": "../public/assets/manager.revenue-BcHCTmxH.js"
	},
	"/assets/manager.sales-MqmF8NjX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bff-L+dtOHOIw7anw5FzY92+ylZ1LH8\"",
		"mtime": "2026-08-13T19:22:06.658Z",
		"size": 3071,
		"path": "../public/assets/manager.sales-MqmF8NjX.js"
	},
	"/assets/manager.payments._paymentId-xDjzhSJE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34e1-ku/uFS7sfxlq2RtBJJ7xgRbp3XM\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 13537,
		"path": "../public/assets/manager.payments._paymentId-xDjzhSJE.js"
	},
	"/assets/manager.patients._patientId-uJkyTKFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c73-tUWrMPfAGUqJrKBXL8whd0p/QSo\"",
		"mtime": "2026-08-13T19:22:06.644Z",
		"size": 19571,
		"path": "../public/assets/manager.patients._patientId-uJkyTKFy.js"
	},
	"/assets/manager.therapy.index-BRhBNpTl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36d4-wvW6p/NufPXFCA97foqITcqcr3A\"",
		"mtime": "2026-08-13T19:22:06.659Z",
		"size": 14036,
		"path": "../public/assets/manager.therapy.index-BRhBNpTl.js"
	},
	"/assets/manager.therapy.new-Ci8cPWLC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a3f-pLqPHBX8H52sG/RpLGp9EbbF2IQ\"",
		"mtime": "2026-08-13T19:22:06.660Z",
		"size": 19007,
		"path": "../public/assets/manager.therapy.new-Ci8cPWLC.js"
	},
	"/assets/manager.therapy._sessionId-BbC7Nvlf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"287-cdVz8DDJM7UAgNI579CT2PTAC4I\"",
		"mtime": "2026-08-13T19:22:06.658Z",
		"size": 647,
		"path": "../public/assets/manager.therapy._sessionId-BbC7Nvlf.js"
	},
	"/assets/manager.therapy._sessionId-Dpr31RWN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3659-5NJjwmhcAxfY4q9BgH49iPk9Q8U\"",
		"mtime": "2026-08-13T19:22:06.659Z",
		"size": 13913,
		"path": "../public/assets/manager.therapy._sessionId-Dpr31RWN.js"
	},
	"/assets/map-pin-BO6b7AxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-pag9ENZiU55oi5a3qd72pvb4ddQ\"",
		"mtime": "2026-08-13T19:22:06.660Z",
		"size": 259,
		"path": "../public/assets/map-pin-BO6b7AxN.js"
	},
	"/assets/matchContext-DLaIM3Qs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c-ApxB0vFMIi0NHw7Khr2mnmcBQxQ\"",
		"mtime": "2026-08-13T19:22:06.661Z",
		"size": 140,
		"path": "../public/assets/matchContext-DLaIM3Qs.js"
	},
	"/assets/material-thumbnail-BoTnj-g0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86b-M5hnXcsn5KG7XfmiEl7DsfyJwvc\"",
		"mtime": "2026-08-13T19:22:06.661Z",
		"size": 2155,
		"path": "../public/assets/material-thumbnail-BoTnj-g0.js"
	},
	"/assets/minus-wBUGeEEd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-oJh0tQcKlRwknlDaaL6QLpgHua0\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 117,
		"path": "../public/assets/minus-wBUGeEEd.js"
	},
	"/assets/new-follow-up-dialog-B3ylm8QW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a1d-+Pc7teHZoFm2UWulxOqEyeSZKsA\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 10781,
		"path": "../public/assets/new-follow-up-dialog-B3ylm8QW.js"
	},
	"/assets/new-sale-dialog-DDQnkhWP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1578-p5N7l8Ry1RznoJiaHhle6WiO0CA\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 5496,
		"path": "../public/assets/new-sale-dialog-DDQnkhWP.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/outdoor-widgets-BhGBFssu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bdd-sDsy0zx92jQa+NhJezKEdllNGNo\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 19421,
		"path": "../public/assets/outdoor-widgets-BhGBFssu.js"
	},
	"/assets/package-check-Bbi7dIBp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-WCqrK3Scqig+AFMgSkALeNq7ReY\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 426,
		"path": "../public/assets/package-check-Bbi7dIBp.js"
	},
	"/assets/page-header-B9TffHuR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"363-k1g4yfLGUbJzwb+MJNU5EeLDYwQ\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 867,
		"path": "../public/assets/page-header-B9TffHuR.js"
	},
	"/assets/patient-store-Dhn8eaKg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"595-ejk0zfSUk2jR1GU63JteiFSJoe0\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 1429,
		"path": "../public/assets/patient-store-Dhn8eaKg.js"
	},
	"/assets/patient-table-CFw_NKP0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f14-7UHWHKRmRsts3FOUox1/ek0Zht4\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 7956,
		"path": "../public/assets/patient-table-CFw_NKP0.js"
	},
	"/assets/payment-summary-card-CsmerrlO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2839-aOIa1rRucfTFmr/IYE5CUHenUbM\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 10297,
		"path": "../public/assets/payment-summary-card-CsmerrlO.js"
	},
	"/assets/pencil-line-yz4qKGJC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e-kZ/FoepW1qrhvkrg5N8Ipt5DepI\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 318,
		"path": "../public/assets/pencil-line-yz4qKGJC.js"
	},
	"/assets/pencil-JxKGRVeC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114-JT1wWF/bvohRyGIevtMoMZEkzDg\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 276,
		"path": "../public/assets/pencil-JxKGRVeC.js"
	},
	"/assets/PieChart-5ZCOWO1k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65c7-Qo3jaLxPv0GKEAQz4JJs53ws/UI\"",
		"mtime": "2026-08-13T19:22:06.593Z",
		"size": 26055,
		"path": "../public/assets/PieChart-5ZCOWO1k.js"
	},
	"/assets/phone-Bq_yC29u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-z6MCP930p8/w5IJLXU0oTd6yz5s\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 322,
		"path": "../public/assets/phone-Bq_yC29u.js"
	},
	"/assets/phone-call-BQPKUNzf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-kiUH8SWQK9lYqS0xZkCjreX27pY\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 423,
		"path": "../public/assets/phone-call-BQPKUNzf.js"
	},
	"/assets/plus-D0_vGZV8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-WiYTunbM0RmESY2upNmW4hZ6290\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 153,
		"path": "../public/assets/plus-D0_vGZV8.js"
	},
	"/assets/power-NZaIiFkH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-7xXSlNH2ntiQAJ1/h9zbSNGetiw\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 173,
		"path": "../public/assets/power-NZaIiFkH.js"
	},
	"/assets/progress-BTEhQZPI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ee-EfIrqBTjByTDce/ak2CC5VppirM\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 2286,
		"path": "../public/assets/progress-BTEhQZPI.js"
	},
	"/assets/printer-Co0cgbyc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13f-WLvR5RwLF/lGncvFp24NAjLS+3Q\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 319,
		"path": "../public/assets/printer-Co0cgbyc.js"
	},
	"/assets/receipt-text-BvYDyT2l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"297-PAhOyGgcew+qcG2HyhtI5GNjfU0\"",
		"mtime": "2026-08-13T19:22:06.675Z",
		"size": 663,
		"path": "../public/assets/receipt-text-BvYDyT2l.js"
	},
	"/assets/register-patient-dialog-Vz_Xsohr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7881-/2ghoGLQtHOQtTGvxbahICPPOiY\"",
		"mtime": "2026-08-13T19:22:06.675Z",
		"size": 30849,
		"path": "../public/assets/register-patient-dialog-Vz_Xsohr.js"
	},
	"/assets/revenue-store-CQ8272wq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd6-uHBQ0aSzO3HHJFUE4b1IoRcLJww\"",
		"mtime": "2026-08-13T19:22:06.676Z",
		"size": 3286,
		"path": "../public/assets/revenue-store-CQ8272wq.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-08-13T19:22:06.676Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/rotate-ccw-DYbEb_Ov.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8-gPAOalvyFfplH0OfNzhBoxbBG1w\"",
		"mtime": "2026-08-13T19:22:06.677Z",
		"size": 200,
		"path": "../public/assets/rotate-ccw-DYbEb_Ov.js"
	},
	"/assets/routes-BMHswiD7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94b-EzP4SG2r75vi8aUVE+C0nbYvIqs\"",
		"mtime": "2026-08-13T19:22:06.677Z",
		"size": 2379,
		"path": "../public/assets/routes-BMHswiD7.js"
	},
	"/assets/sales-table-DW3_ZeTv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b80-d7XM08NkK4GlI5gMz3NGv6FJUQw\"",
		"mtime": "2026-08-13T19:22:06.677Z",
		"size": 7040,
		"path": "../public/assets/sales-table-DW3_ZeTv.js"
	},
	"/assets/sales-filters-C0OR-WVu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e27-ueBkD+i8IO+MFQnpZ7qXklZN9h4\"",
		"mtime": "2026-08-13T19:22:06.677Z",
		"size": 3623,
		"path": "../public/assets/sales-filters-C0OR-WVu.js"
	},
	"/assets/receipt-DEpvORzI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-EvTQSEs04ZrrQSVTola2IrTGSMc\"",
		"mtime": "2026-08-13T19:22:06.662Z",
		"size": 292,
		"path": "../public/assets/receipt-DEpvORzI.js"
	},
	"/assets/score-rating-Bhvuv0E0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"899-amCQqRoZboLx4FMoAyVzfekBbaY\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 2201,
		"path": "../public/assets/score-rating-Bhvuv0E0.js"
	},
	"/assets/schedule-visit-dialog-DTCPhla_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e1e-t3/3JKo1P/J8oXcu+DbOaOT6GBM\"",
		"mtime": "2026-08-13T19:22:06.677Z",
		"size": 11806,
		"path": "../public/assets/schedule-visit-dialog-DTCPhla_.js"
	},
	"/assets/search-C2jLBZds.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-eV7MOF4hgcrLJYt2W6eyBru2SM0\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 174,
		"path": "../public/assets/search-C2jLBZds.js"
	},
	"/assets/select-C5jqDo0W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57e0-Wmm9JPoqmkr+/alTVl9NiisX950\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 22496,
		"path": "../public/assets/select-C5jqDo0W.js"
	},
	"/assets/shield-check-gACz1ujM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-5znyWklXMWlbD1j1sYaXBDVT+Io\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 320,
		"path": "../public/assets/shield-check-gACz1ujM.js"
	},
	"/assets/shopping-bag-DYcdPmTw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-HAXZrpZ2IjcPQ9VEcr5eEII3r2U\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-DYcdPmTw.js"
	},
	"/assets/status-badge-dfwKdlJY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139-r/Szp3H+7u8t9t/2zcma+FmfIeQ\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 313,
		"path": "../public/assets/status-badge-dfwKdlJY.js"
	},
	"/assets/sun-GOXg5612.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-xz4qljwXLRs2ca+WB0Hy/7ogDII\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 472,
		"path": "../public/assets/sun-GOXg5612.js"
	},
	"/assets/stock-history-table-DCXSAIek.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30ac-X8JUjgV5XPbWH8i6WUWwmAmljdg\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 12460,
		"path": "../public/assets/stock-history-table-DCXSAIek.js"
	},
	"/assets/sparkles-BhDrdWbR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-OMRJkcgB0//XTYYF0OcbF/cRh54\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 494,
		"path": "../public/assets/sparkles-BhDrdWbR.js"
	},
	"/assets/super-admin-BvoblII8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-shIprLNytbon9O6zFMZXv2fl4Ic\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 240,
		"path": "../public/assets/super-admin-BvoblII8.js"
	},
	"/assets/super-admin.branches.index-CC-rFmWq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"514b-XEK41uUpr4CfJD8UHvcxjxvb1zE\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 20811,
		"path": "../public/assets/super-admin.branches.index-CC-rFmWq.js"
	},
	"/assets/super-admin.branches._branchId-pSkU19oo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2704-NVmcQPm85RPtptn1zNuI38vOdyM\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 9988,
		"path": "../public/assets/super-admin.branches._branchId-pSkU19oo.js"
	},
	"/assets/super-admin.branches._branchId-B8GAl_92.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e-SlM7x/Bbz7ZyMdnbcgKNTqjY/pM\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 606,
		"path": "../public/assets/super-admin.branches._branchId-B8GAl_92.js"
	},
	"/assets/super-admin.dashboard-6bpb6n1b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f5a-huWmtH4nHgB9ITT/jjGWMeNx65c\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 28506,
		"path": "../public/assets/super-admin.dashboard-6bpb6n1b.js"
	},
	"/assets/styles-DwJTgs-r.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"22825-2ACIA0PXLyTbO51X2dfBbMoIMZw\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 141349,
		"path": "../public/assets/styles-DwJTgs-r.css"
	},
	"/assets/super-admin.index-C-p-yQeW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45b-SgM2lak6BOJiRb284kWsgvbkp40\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 1115,
		"path": "../public/assets/super-admin.index-C-p-yQeW.js"
	},
	"/assets/table-C_QRS-bN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-SdZ2td5LJAdN5X03mh9hGGEcFmI\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 1642,
		"path": "../public/assets/table-C_QRS-bN.js"
	},
	"/assets/table-pagination-B_3GanPC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67d-+vG6vmeY8Q8VrEBh46u6OIoz6IE\"",
		"mtime": "2026-08-13T19:22:06.680Z",
		"size": 1661,
		"path": "../public/assets/table-pagination-B_3GanPC.js"
	},
	"/assets/target-CeXUgadI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-Cvc+U+d3fqoQfGudELSPdrOgEsU\"",
		"mtime": "2026-08-13T19:22:06.691Z",
		"size": 226,
		"path": "../public/assets/target-CeXUgadI.js"
	},
	"/assets/textarea-C10bYItF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"153-z1zoCZQbW1HzwO+pkp96YYOQn3A\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 339,
		"path": "../public/assets/textarea-C10bYItF.js"
	},
	"/assets/theme-toggle-Cu7C4UJg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e7-psh6HD6+fYqTCtccwWJEfOt85fc\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 743,
		"path": "../public/assets/theme-toggle-Cu7C4UJg.js"
	},
	"/assets/tabs-BlFkNF0n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4e-hQnuP6FzM56w9N6r0K3oqR1pi6Y\"",
		"mtime": "2026-08-13T19:22:06.691Z",
		"size": 3662,
		"path": "../public/assets/tabs-BlFkNF0n.js"
	},
	"/assets/trending-down-CPU5PtMK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-H112T4K/G0iAuMyu3QqIobUaIRs\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 178,
		"path": "../public/assets/trending-down-CPU5PtMK.js"
	},
	"/assets/therapy-table-B7SsaeA_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191-/IAjMqSbkckdnaRUirFg74lx2h4\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 401,
		"path": "../public/assets/therapy-table-B7SsaeA_.js"
	},
	"/assets/therapy-types-CG2pHpgB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac4-848n/ZJltkA5lVedfvPwaLPsDLw\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 2756,
		"path": "../public/assets/therapy-types-CG2pHpgB.js"
	},
	"/assets/user-CXATpcwQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-uy5NoxbtYunpc0vMKlANljuIWS4\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 196,
		"path": "../public/assets/user-CXATpcwQ.js"
	},
	"/assets/user-plus-CIIoQvuu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-YVzsDKZ/jfXJozMl8oLmU7x3HSk\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 310,
		"path": "../public/assets/user-plus-CIIoQvuu.js"
	},
	"/assets/user-cog-nAiogorp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"345-S+cRTrTJ3HBbox7VM+6afVTvRhw\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 837,
		"path": "../public/assets/user-cog-nAiogorp.js"
	},
	"/assets/useRouter-BfOmrYv_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"232b-kF39byWzG0URZsvBdXdW7oNViNA\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 9003,
		"path": "../public/assets/useRouter-BfOmrYv_.js"
	},
	"/assets/users-DjqrkmJP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-C5WfEcN2KtMA94Nj1SDAS66F7lk\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 306,
		"path": "../public/assets/users-DjqrkmJP.js"
	},
	"/assets/video-BmWtFgaz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-BfttY0qhnRL7Ho+sXn0CpPKPNps\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 248,
		"path": "../public/assets/video-BmWtFgaz.js"
	},
	"/assets/wallet-C2soMKi4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-o56+5DCy+d0Ff2q5VTkQca3cfVA\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 286,
		"path": "../public/assets/wallet-C2soMKi4.js"
	},
	"/assets/utils-DojpP95n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7e-rehYKtt6GcJPoEspFNv2VomMQ30\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 27262,
		"path": "../public/assets/utils-DojpP95n.js"
	},
	"/assets/zap-BrjQXBfZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"106-jxyvu9jgEVLIcOqZRqBUQqj7vmY\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 262,
		"path": "../public/assets/zap-BrjQXBfZ.js"
	},
	"/assets/widget-card-CCV6fwLY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b4-qLv1IloEMci2enewxvp0LAH24iw\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 1716,
		"path": "../public/assets/widget-card-CCV6fwLY.js"
	},
	"/assets/waves-BVHgluH7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ac-eMS8OckPv/BBLrccawefciGg9dQ\"",
		"mtime": "2026-08-13T19:22:06.693Z",
		"size": 428,
		"path": "../public/assets/waves-BVHgluH7.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_QWvhtE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_QWvhtE
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
