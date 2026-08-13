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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-08-12T06:25:06.994Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/_redirects": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-XhAJEZACACf1E4TpyZvGieSw1AY\"",
		"mtime": "2026-08-12T06:25:06.988Z",
		"size": 23,
		"path": "../public/_redirects"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"43361-Q3eyLhLAi4CCP7TDpy5EgPoiPCQ\"",
		"mtime": "2026-08-12T06:25:06.994Z",
		"size": 275297,
		"path": "../public/logo.png"
	},
	"/assets/activity-DRoCPmr-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-tOlrXMWmxKNZFBc0x37VFUGb5cU\"",
		"mtime": "2026-08-13T19:46:31.728Z",
		"size": 234,
		"path": "../public/assets/activity-DRoCPmr-.js"
	},
	"/assets/add-material-dialog-DsGTce1Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c0d-r9Wbipm7HT4ZzkaXkBIbMNnDmJI\"",
		"mtime": "2026-08-13T19:46:31.729Z",
		"size": 15373,
		"path": "../public/assets/add-material-dialog-DsGTce1Q.js"
	},
	"/assets/app-shell-DcC8ZuTi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6897-s7d8ImTJ0ZLHDLu4+DWLSH7c63M\"",
		"mtime": "2026-08-13T19:46:31.731Z",
		"size": 26775,
		"path": "../public/assets/app-shell-DcC8ZuTi.js"
	},
	"/assets/app-Cxnfez0a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2-camqQJQKVfvOni3qMr0yI8wd//c\"",
		"mtime": "2026-08-13T19:46:31.730Z",
		"size": 242,
		"path": "../public/assets/app-Cxnfez0a.js"
	},
	"/assets/archive-C2Z-YPkJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd-Ss31TyjL9LYUoHyogIhPm/0z7NY\"",
		"mtime": "2026-08-13T19:46:31.731Z",
		"size": 253,
		"path": "../public/assets/archive-C2Z-YPkJ.js"
	},
	"/assets/AreaChart-D9TJKF9I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ac0-kBNeuKGnGutVPOlefQNLkul9Xcs\"",
		"mtime": "2026-08-13T19:46:31.727Z",
		"size": 10944,
		"path": "../public/assets/AreaChart-D9TJKF9I.js"
	},
	"/assets/arrow-down-to-line-DgfDNXOE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-espaKVOtwtWTLsXOtYJ2Sp2H2Oc\"",
		"mtime": "2026-08-13T19:46:31.732Z",
		"size": 209,
		"path": "../public/assets/arrow-down-to-line-DgfDNXOE.js"
	},
	"/assets/arrow-down-right-CXGpLU9G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-QeOKNeJUXXrlHyO4JO+3imd0h8Q\"",
		"mtime": "2026-08-13T19:46:31.732Z",
		"size": 169,
		"path": "../public/assets/arrow-down-right-CXGpLU9G.js"
	},
	"/assets/arrow-left-bpaZ5r8I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-wsAQ8mmnnrX2pXNTuZZLGJJC/SI\"",
		"mtime": "2026-08-13T19:46:31.732Z",
		"size": 165,
		"path": "../public/assets/arrow-left-bpaZ5r8I.js"
	},
	"/assets/arrow-right-t3Cv_00c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-DeP8yYJlW8CSNYCFp8zzX7DxTsI\"",
		"mtime": "2026-08-13T19:46:31.733Z",
		"size": 165,
		"path": "../public/assets/arrow-right-t3Cv_00c.js"
	},
	"/assets/arrow-up-right-ZJfs-Ruj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-1VPDpDVvV1XHfDJkhBmAWdK82rc\"",
		"mtime": "2026-08-13T19:46:31.733Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-ZJfs-Ruj.js"
	},
	"/assets/assessment-table-BsxRrjDk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dcd-36nftegfsKzMKZLqU0PyTLoF5s4\"",
		"mtime": "2026-08-13T19:46:31.734Z",
		"size": 7629,
		"path": "../public/assets/assessment-table-BsxRrjDk.js"
	},
	"/assets/auth-CvcHtWyo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"678-rCyELrbzBb8qgTi1BPCvpsuLI4s\"",
		"mtime": "2026-08-13T19:46:31.735Z",
		"size": 1656,
		"path": "../public/assets/auth-CvcHtWyo.js"
	},
	"/assets/auth.forgot-password-DYHWm9Gx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40c-Qw+7LaHx3ZvuA3iKAzoWJU6paoU\"",
		"mtime": "2026-08-13T19:46:31.735Z",
		"size": 1036,
		"path": "../public/assets/auth.forgot-password-DYHWm9Gx.js"
	},
	"/assets/auth.index-BkwPdT0w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-1GRYi2geE+FihApSlbeubzwrYfY\"",
		"mtime": "2026-08-13T19:46:31.735Z",
		"size": 167,
		"path": "../public/assets/auth.index-BkwPdT0w.js"
	},
	"/assets/auth.login-C4bEOIZ_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c9-kmCkFl2JF9Noqd2P0+PjEP4v44w\"",
		"mtime": "2026-08-13T19:46:31.737Z",
		"size": 5065,
		"path": "../public/assets/auth.login-C4bEOIZ_.js"
	},
	"/assets/badge-DAvd23Ut.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bd-5UcERcrvEiiJJzU/FP244794cEk\"",
		"mtime": "2026-08-13T19:46:31.737Z",
		"size": 1213,
		"path": "../public/assets/badge-DAvd23Ut.js"
	},
	"/assets/auth.register-C_4i95Ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79d-QgoI8hKPdL3pGkQidmEU4NNGN+Y\"",
		"mtime": "2026-08-13T19:46:31.737Z",
		"size": 1949,
		"path": "../public/assets/auth.register-C_4i95Ra.js"
	},
	"/assets/bell-ring-hw7FKdbV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-jxkWZc5P5heYuafC+84hzpOoltY\"",
		"mtime": "2026-08-13T19:46:31.738Z",
		"size": 397,
		"path": "../public/assets/bell-ring-hw7FKdbV.js"
	},
	"/assets/bell-0_U3l_0A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-IFd29VeBrvZfYiAjpzTgWqBKTzo\"",
		"mtime": "2026-08-13T19:46:31.738Z",
		"size": 290,
		"path": "../public/assets/bell-0_U3l_0A.js"
	},
	"/assets/boxes-DVk0Cb1v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"353-sT358FfHCB4C5X1FPU8+nd5cnDo\"",
		"mtime": "2026-08-13T19:46:31.739Z",
		"size": 851,
		"path": "../public/assets/boxes-DVk0Cb1v.js"
	},
	"/assets/breadcrumbs-boPgYHvX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a9-IUAqnsre+N7heF47xWG6Bp/av+I\"",
		"mtime": "2026-08-13T19:46:31.739Z",
		"size": 2217,
		"path": "../public/assets/breadcrumbs-boPgYHvX.js"
	},
	"/assets/button-XkAE08KZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"152c-eKW8FqM1V1Ty15MNLmS2Xz0U3Yo\"",
		"mtime": "2026-08-13T19:46:31.741Z",
		"size": 5420,
		"path": "../public/assets/button-XkAE08KZ.js"
	},
	"/assets/building-2-Dt1TTlFw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-PlUOWgBbsoO5HIyu5rtnV+on+AE\"",
		"mtime": "2026-08-13T19:46:31.740Z",
		"size": 383,
		"path": "../public/assets/building-2-Dt1TTlFw.js"
	},
	"/assets/calendar-clock-D7uaEmS0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a-5Xc3ErFxbRfCvHxFfthh22OoU10\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 378,
		"path": "../public/assets/calendar-clock-D7uaEmS0.js"
	},
	"/assets/calendar-plus-oQXtkjUO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a-yQaDH8ykDXq5ofQvzJbjKa3qjaM\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 362,
		"path": "../public/assets/calendar-plus-oQXtkjUO.js"
	},
	"/assets/calendar-days-BwFsR1VK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-EYQX5fbEQsOZ2UAuIzS4qgduG74\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 494,
		"path": "../public/assets/calendar-days-BwFsR1VK.js"
	},
	"/assets/calendar-range-CcZz1vwJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-l/bQBbaSNlkm23YW5DbBQAJEiJ0\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 415,
		"path": "../public/assets/calendar-range-CcZz1vwJ.js"
	},
	"/assets/chart-column-CdgHfi8T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-2RlRrrxWrIqXZY77Xx8pNLATpXU\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 251,
		"path": "../public/assets/chart-column-CdgHfi8T.js"
	},
	"/assets/chart-pie-aZht8PLG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"111-ii+CxkUlCRfIYtcZfA2S+XLezSQ\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 273,
		"path": "../public/assets/chart-pie-aZht8PLG.js"
	},
	"/assets/chart-kB5D3o0e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b2e-6ZL+B6Xu4Z0BE0g/NBVkzaFjPI4\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 11054,
		"path": "../public/assets/chart-kB5D3o0e.js"
	},
	"/assets/checkbox-5scLGas_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b3-K/a01V3avHgdIi1K3gNc7+rgajg\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 4531,
		"path": "../public/assets/checkbox-5scLGas_.js"
	},
	"/assets/card-DK-pFxMz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"503-gjlemsyyX5qkDiR0JdlBwvYFWo0\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 1283,
		"path": "../public/assets/card-DK-pFxMz.js"
	},
	"/assets/circle-x-uyrFHN2H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-5VHNRE43rDPcVa5TOUnS51fY0Uc\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 207,
		"path": "../public/assets/circle-x-uyrFHN2H.js"
	},
	"/assets/circle-check-CLSWWMuA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ae-MCP5FcpP6qvrm7Tp8MmfXHSEBCc\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 430,
		"path": "../public/assets/circle-check-CLSWWMuA.js"
	},
	"/assets/clipboard-check-C7m6sHal.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130-xHvCyKUC6er7cM87Bkh14N6+lfA\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 304,
		"path": "../public/assets/clipboard-check-C7m6sHal.js"
	},
	"/assets/clock-C7YeUK6q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-tzkiaguWZE5MuVM0DQSWwRLEPJw\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 169,
		"path": "../public/assets/clock-C7YeUK6q.js"
	},
	"/assets/clipboard-list-BAAXJ6RH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19b-XqBmd5zxBZhuljLBxL9AN5anlcU\"",
		"mtime": "2026-08-13T19:46:31.742Z",
		"size": 411,
		"path": "../public/assets/clipboard-list-BAAXJ6RH.js"
	},
	"/assets/collect-payment-dialog-B5DQVgqm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bed-uyFpjGKHOURgkPTtkaWTSikV5Qs\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 7149,
		"path": "../public/assets/collect-payment-dialog-B5DQVgqm.js"
	},
	"/assets/columns-3-Cc-3Yp45.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-pZUnNtp5D4NAC6ZzpuXR8Q5CPao\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 223,
		"path": "../public/assets/columns-3-Cc-3Yp45.js"
	},
	"/assets/Combination-CNXYXnC6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59e6-YOntNTE4eLtHLY+ulbnW1mJ9KWw\"",
		"mtime": "2026-08-13T19:46:31.727Z",
		"size": 23014,
		"path": "../public/assets/Combination-CNXYXnC6.js"
	},
	"/assets/copy-CxlxTjiA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-JMYgtjftOrstmAb9u3lwrbcMO7w\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 236,
		"path": "../public/assets/copy-CxlxTjiA.js"
	},
	"/assets/createLucideIcon-BIjdMynN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6560-CwJlFT19wkwx73jIR8+Nif0j6SU\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 25952,
		"path": "../public/assets/createLucideIcon-BIjdMynN.js"
	},
	"/assets/dashboard-data-BQ0X3i3n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"258c-o47Qk/1B7+7+AJx3tkN8+8CBtAM\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 9612,
		"path": "../public/assets/dashboard-data-BQ0X3i3n.js"
	},
	"/assets/create-package-dialog-_eIutNtd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3aab-kNkNSZD7PDXEmrV9Wa/HvPhW7OY\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 15019,
		"path": "../public/assets/create-package-dialog-_eIutNtd.js"
	},
	"/assets/daily-session-store-FSBPTQTJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"790-IlWT2BlPsxk7lQLpOSftamS3N6Q\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 1936,
		"path": "../public/assets/daily-session-store-FSBPTQTJ.js"
	},
	"/assets/dist-BwuEULV9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6df-nuzSaZ2NVkf+Pb38tHlUKcAUjTI\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 1759,
		"path": "../public/assets/dist-BwuEULV9.js"
	},
	"/assets/dist-BXH4r74X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ca-3GoQ74XM84SYTp8Jc8HfjDueBNM\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 714,
		"path": "../public/assets/dist-BXH4r74X.js"
	},
	"/assets/dialog-sb24EZ1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"838-XitV35LeebXt36teUmQIG3eUDRk\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 2104,
		"path": "../public/assets/dialog-sb24EZ1Z.js"
	},
	"/assets/dist-CZDsQCiS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"261-6pCKcL4+1zheIAT5B6zSuMukF1o\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 609,
		"path": "../public/assets/dist-CZDsQCiS.js"
	},
	"/assets/dist-DHl06Nyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1398-HAW+bt77RCuMwmt4nowoTvj9h7w\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 5016,
		"path": "../public/assets/dist-DHl06Nyg.js"
	},
	"/assets/dist-tYXtL0xU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ed-Lym9tjoxIOfDNW+45LsgkMQc90A\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 749,
		"path": "../public/assets/dist-tYXtL0xU.js"
	},
	"/assets/dist-DJIuNbSr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a8-38Car2zGxH4wprkwClF4bOf2gio\"",
		"mtime": "2026-08-13T19:46:31.750Z",
		"size": 5288,
		"path": "../public/assets/dist-DJIuNbSr.js"
	},
	"/assets/dist-DOafrZyu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8091-GM0NKySdf569Ogzs5/kxUyn9FK0\"",
		"mtime": "2026-08-13T19:46:31.756Z",
		"size": 32913,
		"path": "../public/assets/dist-DOafrZyu.js"
	},
	"/assets/download-Dy0IN9b8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-LPgkK1T03QGocfKoVcNobpSnLsE\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 232,
		"path": "../public/assets/download-Dy0IN9b8.js"
	},
	"/assets/ellipsis-DY5_rsLr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-HVoyQbxWri5irFD+Qn/w5enLD9Q\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 226,
		"path": "../public/assets/ellipsis-DY5_rsLr.js"
	},
	"/assets/empty-state-6RHMS8je.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"696-enCsPqzFHuUuiMJCvl8RN/DVBaE\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 1686,
		"path": "../public/assets/empty-state-6RHMS8je.js"
	},
	"/assets/dropdown-menu-3zmq3VyS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6032-YYg1I4WTTdqFisu6zro4Kjh8NAQ\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 24626,
		"path": "../public/assets/dropdown-menu-3zmq3VyS.js"
	},
	"/assets/expense-store-BGrUZhAV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6de-uWw3IcIbpR0ZbgbKcUBSdiOr3wE\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 1758,
		"path": "../public/assets/expense-store-BGrUZhAV.js"
	},
	"/assets/eye-DNvSYfmR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-jp5jOKYcE7aIniG4rsEHWAuUbFE\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 256,
		"path": "../public/assets/eye-DNvSYfmR.js"
	},
	"/assets/form-field-d410cGQB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"441-HAZDfTEoBHc/g8XpoSYOeOtFh5c\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 1089,
		"path": "../public/assets/form-field-d410cGQB.js"
	},
	"/assets/file-text-BnrHo7s7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-lTafdlDssXdvn3GXICWqFCI/nSc\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 385,
		"path": "../public/assets/file-text-BnrHo7s7.js"
	},
	"/assets/funnel-DEZSKAj3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-YXOqwYjRlYJyCbGeNkh+J/gBOII\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 256,
		"path": "../public/assets/funnel-DEZSKAj3.js"
	},
	"/assets/gauge-DlkEHsN9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0-WodrYATjuPa7dxjhIjJclXy3TbI\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 176,
		"path": "../public/assets/gauge-DlkEHsN9.js"
	},
	"/assets/heart-pulse-Bv8zpbes.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d-h8G6ckDLPVTIlBiUgfTSQ0d1klg\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 333,
		"path": "../public/assets/heart-pulse-Bv8zpbes.js"
	},
	"/assets/history-DBBGAcMU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-yNVoxEpgV+31moLj5KhEokhculI\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 237,
		"path": "../public/assets/history-DBBGAcMU.js"
	},
	"/assets/house-DjfZ_cWK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"119-xl3AnpZkCJLB0jpLrqyNB5LVJcc\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 281,
		"path": "../public/assets/house-DjfZ_cWK.js"
	},
	"/assets/generateCategoricalChart-DfFCSloD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58bb9-G3/mty3QcPsfYRPYMrFMubUkIyA\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 363449,
		"path": "../public/assets/generateCategoricalChart-DfFCSloD.js"
	},
	"/assets/image-plus-DouB3hyH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16b-WMHv9+H+bOeGzTGgRfWUvTrfMs4\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 363,
		"path": "../public/assets/image-plus-DouB3hyH.js"
	},
	"/assets/input-BFZ8uEeF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"384-DCz+CdBnMgVO0Peqf7d9HyfjI8I\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 900,
		"path": "../public/assets/input-BFZ8uEeF.js"
	},
	"/assets/index-BHjpr2Ex.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92250-UVcEB0P1Fh2qCEV2HBMAYK+TZe8\"",
		"mtime": "2026-08-13T19:46:31.726Z",
		"size": 598608,
		"path": "../public/assets/index-BHjpr2Ex.js"
	},
	"/assets/invoice-card-BsiAdBMP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c1d-xt3dG+g6oX06/ouEPjdTHDq1hSk\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 3101,
		"path": "../public/assets/invoice-card-BsiAdBMP.js"
	},
	"/assets/kpi-card-DAExE6Ul.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"705-9agVSgG4ouBXfKyG1QB97wfez0w\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 1797,
		"path": "../public/assets/kpi-card-DAExE6Ul.js"
	},
	"/assets/key-round-DXev0fNU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163-UTQXqpoE1KdDlmacQM/ffuesBr4\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 355,
		"path": "../public/assets/key-round-DXev0fNU.js"
	},
	"/assets/layers-DhYExjom.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5-jvcq0HXKOi+ECxcQsRBFwXlPZu4\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 421,
		"path": "../public/assets/layers-DhYExjom.js"
	},
	"/assets/label-afc68JcO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cd-bx4z8iWV4fjAdMMGvWut5kr/rXE\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 717,
		"path": "../public/assets/label-afc68JcO.js"
	},
	"/assets/manager-D6C08bzZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-c7S7BaXu4LS1ecjYoZ+FfHDEews\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 236,
		"path": "../public/assets/manager-D6C08bzZ.js"
	},
	"/assets/mail-B17kjxoT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-a65mKGHmFDIim1Fr5KlY4sI0/d0\"",
		"mtime": "2026-08-13T19:46:31.757Z",
		"size": 213,
		"path": "../public/assets/mail-B17kjxoT.js"
	},
	"/assets/manager-session-DVGlSATw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c-0VdBpd5oKC1nh5W4ODS44Nrqqpo\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 620,
		"path": "../public/assets/manager-session-DVGlSATw.js"
	},
	"/assets/manager.assessments._assessmentId-Nuuh2V8p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-dpWFwr1CmV6gyjkMHHCIxn0hdPM\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 644,
		"path": "../public/assets/manager.assessments._assessmentId-Nuuh2V8p.js"
	},
	"/assets/manager.assessments.new-CoCDWZY1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51aa-8KkMOTWvM3DgQ6RpYWUlKG7+rcQ\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 20906,
		"path": "../public/assets/manager.assessments.new-CoCDWZY1.js"
	},
	"/assets/manager.assessments._assessmentId-ULMTbRCo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d91-Q4/kdtvrqdQqSr2Lu9JL5YzQ0T8\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 11665,
		"path": "../public/assets/manager.assessments._assessmentId-ULMTbRCo.js"
	},
	"/assets/manager.assessments.index-B4csXgvU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aef-14Wr3s6nANIzfCGgu7W2d4wQ1dM\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 6895,
		"path": "../public/assets/manager.assessments.index-B4csXgvU.js"
	},
	"/assets/manager.daily-session.index-Dp7vXQVW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2137-LdyzThlrXCpJ4lRZmN0q3vr8iLs\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 8503,
		"path": "../public/assets/manager.daily-session.index-Dp7vXQVW.js"
	},
	"/assets/manager.dashboard-Cw2IEnpW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6439-RtwkwKv5zSFIPCspBayJahHvYbQ\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 25657,
		"path": "../public/assets/manager.dashboard-Cw2IEnpW.js"
	},
	"/assets/manager.expense.index-C0bPVpIS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57f3-MbDWorlzseldsdOxCVNsSlQYry8\"",
		"mtime": "2026-08-13T19:46:31.768Z",
		"size": 22515,
		"path": "../public/assets/manager.expense.index-C0bPVpIS.js"
	},
	"/assets/manager.follow-up.index-DDfVZSjw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4898-KeLvvSKIIpNBgl1J8acA6tCsbBE\"",
		"mtime": "2026-08-13T19:46:31.772Z",
		"size": 18584,
		"path": "../public/assets/manager.follow-up.index-DDfVZSjw.js"
	},
	"/assets/manager.follow-up._followUpId-BnrflHx_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"301-p1pCXOMJS2W6t6PlzMJLu+K7zQs\"",
		"mtime": "2026-08-13T19:46:31.772Z",
		"size": 769,
		"path": "../public/assets/manager.follow-up._followUpId-BnrflHx_.js"
	},
	"/assets/manager.index-DJ7LAi8J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26-SoFMfAHVJ5oqB5t+mpFRoQvFIoc\"",
		"mtime": "2026-08-13T19:46:31.772Z",
		"size": 38,
		"path": "../public/assets/manager.index-DJ7LAi8J.js"
	},
	"/assets/manager.follow-up._followUpId-Da-hzMSY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ed5-Lf71HtM/gQ2xVX0VRuEfZevouFc\"",
		"mtime": "2026-08-13T19:46:31.772Z",
		"size": 11989,
		"path": "../public/assets/manager.follow-up._followUpId-Da-hzMSY.js"
	},
	"/assets/manager.materials.new-Sx2nKG3y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6a-qA4tU/hHZSBByImYNC/b0SPoW/0\"",
		"mtime": "2026-08-13T19:46:31.774Z",
		"size": 3178,
		"path": "../public/assets/manager.materials.new-Sx2nKG3y.js"
	},
	"/assets/manager.materials._materialId-BHXM_p8G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18bf-sNcNXTLkncoSAkq1yUJzxLhM+4o\"",
		"mtime": "2026-08-13T19:46:31.772Z",
		"size": 6335,
		"path": "../public/assets/manager.materials._materialId-BHXM_p8G.js"
	},
	"/assets/manager.materials.index-BuGLDdWZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2879-+G+3KV9L06KTbssG/yj9CVejEmg\"",
		"mtime": "2026-08-13T19:46:31.774Z",
		"size": 10361,
		"path": "../public/assets/manager.materials.index-BuGLDdWZ.js"
	},
	"/assets/manager.outdoor.index-Ch4LzSDk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e8-KjAI3Mlii73KtU+BzAk8KRWeIrk\"",
		"mtime": "2026-08-13T19:46:31.777Z",
		"size": 6376,
		"path": "../public/assets/manager.outdoor.index-Ch4LzSDk.js"
	},
	"/assets/manager.online-session-DCGIKThy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5397-JR/rcZRRBsFAKziD86hdlytgdOM\"",
		"mtime": "2026-08-13T19:46:31.774Z",
		"size": 21399,
		"path": "../public/assets/manager.online-session-DCGIKThy.js"
	},
	"/assets/manager.outdoor.new-DVnCTXRv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc4-aGY3Kt19uco6D6oh3nWJFWccFEI\"",
		"mtime": "2026-08-13T19:46:31.777Z",
		"size": 3268,
		"path": "../public/assets/manager.outdoor.new-DVnCTXRv.js"
	},
	"/assets/manager.outdoor._visitId-DHjpxc6G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1369-gle487sgAVYcWeSA1WUwXNyCBGQ\"",
		"mtime": "2026-08-13T19:46:31.774Z",
		"size": 4969,
		"path": "../public/assets/manager.outdoor._visitId-DHjpxc6G.js"
	},
	"/assets/manager.patients.index-CdABpJZS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3552-qa1SCZPNa0XfcRBpmoSto52QixE\"",
		"mtime": "2026-08-13T19:46:31.779Z",
		"size": 13650,
		"path": "../public/assets/manager.patients.index-CdABpJZS.js"
	},
	"/assets/manager.packages.index-CDhozlfx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1de3-7bBb/eOF7TPTU2cRyTyVPKkBILA\"",
		"mtime": "2026-08-13T19:46:31.777Z",
		"size": 7651,
		"path": "../public/assets/manager.packages.index-CDhozlfx.js"
	},
	"/assets/manager.patients._patientId-Awmib85t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-TF/N3UwflAx/3V1FnjS6kITAd34\"",
		"mtime": "2026-08-13T19:46:31.777Z",
		"size": 632,
		"path": "../public/assets/manager.patients._patientId-Awmib85t.js"
	},
	"/assets/manager.payments.collect-DT70_e24.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23e5-R0iFd4KD80CHf9l87dKDz8MzvPA\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 9189,
		"path": "../public/assets/manager.payments.collect-DT70_e24.js"
	},
	"/assets/manager.patients._patientId-D0MnmGeG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c73-8YMDa8Pa0eQwOJzfT3KH7D+7Vs4\"",
		"mtime": "2026-08-13T19:46:31.779Z",
		"size": 19571,
		"path": "../public/assets/manager.patients._patientId-D0MnmGeG.js"
	},
	"/assets/manager.payments.index-3vB7nl9q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3dde-GC+vtvBlmWz73OWnkjxHnofGrcU\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 15838,
		"path": "../public/assets/manager.payments.index-3vB7nl9q.js"
	},
	"/assets/manager.payments._paymentId-5a8bDiUo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34e1-nI7uUryQFTgBCpYFa7q8EsdSQHc\"",
		"mtime": "2026-08-13T19:46:31.779Z",
		"size": 13537,
		"path": "../public/assets/manager.payments._paymentId-5a8bDiUo.js"
	},
	"/assets/manager.payments._paymentId-Cll4Dx8n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-J+WfX3e7F84Pm7TSJl29T4V8Zb0\"",
		"mtime": "2026-08-13T19:46:31.779Z",
		"size": 632,
		"path": "../public/assets/manager.payments._paymentId-Cll4Dx8n.js"
	},
	"/assets/manager.revenue-Cq_SB5IX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5633-XoSK451m/NJH1cQNoLEmJV8Dc0c\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 22067,
		"path": "../public/assets/manager.revenue-Cq_SB5IX.js"
	},
	"/assets/manager.sales-CGk1soJG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bff-raQmLaVOcyX2jwm/y0KnDU7xgi4\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 3071,
		"path": "../public/assets/manager.sales-CGk1soJG.js"
	},
	"/assets/manager.therapy.new-BEzNJUFd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a3f-dpbkjolx24KYz0Zm7540q9QNyPk\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 19007,
		"path": "../public/assets/manager.therapy.new-BEzNJUFd.js"
	},
	"/assets/manager.therapy.index-D1fkBvX7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36d4-MRlLDQroJ96lCiowr2h/+92rbXU\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 14036,
		"path": "../public/assets/manager.therapy.index-D1fkBvX7.js"
	},
	"/assets/map-pin-BO6b7AxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-pag9ENZiU55oi5a3qd72pvb4ddQ\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 259,
		"path": "../public/assets/map-pin-BO6b7AxN.js"
	},
	"/assets/matchContext-DLaIM3Qs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c-ApxB0vFMIi0NHw7Khr2mnmcBQxQ\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 140,
		"path": "../public/assets/matchContext-DLaIM3Qs.js"
	},
	"/assets/manager.therapy._sessionId-BZOWMuuO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3659-45aNqGdDiJyGiVM4Qbs7j1Fj/Sw\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 13913,
		"path": "../public/assets/manager.therapy._sessionId-BZOWMuuO.js"
	},
	"/assets/manager.therapy._sessionId-CJc2FFzH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"287-LHNmcnNFCugADue3Zsh7MsNJGQY\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 647,
		"path": "../public/assets/manager.therapy._sessionId-CJc2FFzH.js"
	},
	"/assets/material-thumbnail-BoTnj-g0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86b-M5hnXcsn5KG7XfmiEl7DsfyJwvc\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 2155,
		"path": "../public/assets/material-thumbnail-BoTnj-g0.js"
	},
	"/assets/new-follow-up-dialog-Dwom6t6R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a1d-sI4+budqza62xv+pkbiODNnGMHw\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 10781,
		"path": "../public/assets/new-follow-up-dialog-Dwom6t6R.js"
	},
	"/assets/minus-wBUGeEEd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-oJh0tQcKlRwknlDaaL6QLpgHua0\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 117,
		"path": "../public/assets/minus-wBUGeEEd.js"
	},
	"/assets/new-sale-dialog-B3apJ9Q1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1578-5z6aGLhHNE/wy+RmifYKdCxR7rc\"",
		"mtime": "2026-08-13T19:46:31.781Z",
		"size": 5496,
		"path": "../public/assets/new-sale-dialog-B3apJ9Q1.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-08-13T19:46:31.788Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/package-check-Bbi7dIBp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-WCqrK3Scqig+AFMgSkALeNq7ReY\"",
		"mtime": "2026-08-13T19:46:31.788Z",
		"size": 426,
		"path": "../public/assets/package-check-Bbi7dIBp.js"
	},
	"/assets/outdoor-widgets-Bxk9dKqb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bdd-e9CnrehoRn0nrUOHH0Ze6aqGXjk\"",
		"mtime": "2026-08-13T19:46:31.788Z",
		"size": 19421,
		"path": "../public/assets/outdoor-widgets-Bxk9dKqb.js"
	},
	"/assets/page-header-gQqbnuTs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"363-yrs4Hw8ZFkzhNaga9pvdgDngv1w\"",
		"mtime": "2026-08-13T19:46:31.788Z",
		"size": 867,
		"path": "../public/assets/page-header-gQqbnuTs.js"
	},
	"/assets/patient-store-KGUTdLbm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c0-C+jFeyjlwwqOgsq/R6kp3A/o9NA\"",
		"mtime": "2026-08-13T19:46:31.790Z",
		"size": 1472,
		"path": "../public/assets/patient-store-KGUTdLbm.js"
	},
	"/assets/payment-summary-card-LzIKSoCT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2839-n2tc+yJDD2doLXPLGUS9A23DUcc\"",
		"mtime": "2026-08-13T19:46:31.791Z",
		"size": 10297,
		"path": "../public/assets/payment-summary-card-LzIKSoCT.js"
	},
	"/assets/patient-table-Yon4mJ1C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f14-bSW14EJ4KnTZpIE9crVIx0XSu20\"",
		"mtime": "2026-08-13T19:46:31.790Z",
		"size": 7956,
		"path": "../public/assets/patient-table-Yon4mJ1C.js"
	},
	"/assets/pencil-JxKGRVeC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114-JT1wWF/bvohRyGIevtMoMZEkzDg\"",
		"mtime": "2026-08-13T19:46:31.791Z",
		"size": 276,
		"path": "../public/assets/pencil-JxKGRVeC.js"
	},
	"/assets/pencil-line-yz4qKGJC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e-kZ/FoepW1qrhvkrg5N8Ipt5DepI\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 318,
		"path": "../public/assets/pencil-line-yz4qKGJC.js"
	},
	"/assets/phone-call-BQPKUNzf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-kiUH8SWQK9lYqS0xZkCjreX27pY\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 423,
		"path": "../public/assets/phone-call-BQPKUNzf.js"
	},
	"/assets/PieChart-5ZCOWO1k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65c7-Qo3jaLxPv0GKEAQz4JJs53ws/UI\"",
		"mtime": "2026-08-13T19:46:31.727Z",
		"size": 26055,
		"path": "../public/assets/PieChart-5ZCOWO1k.js"
	},
	"/assets/phone-Bq_yC29u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-z6MCP930p8/w5IJLXU0oTd6yz5s\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 322,
		"path": "../public/assets/phone-Bq_yC29u.js"
	},
	"/assets/power-NZaIiFkH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-7xXSlNH2ntiQAJ1/h9zbSNGetiw\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 173,
		"path": "../public/assets/power-NZaIiFkH.js"
	},
	"/assets/printer-Co0cgbyc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13f-WLvR5RwLF/lGncvFp24NAjLS+3Q\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 319,
		"path": "../public/assets/printer-Co0cgbyc.js"
	},
	"/assets/receipt-DEpvORzI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-EvTQSEs04ZrrQSVTola2IrTGSMc\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 292,
		"path": "../public/assets/receipt-DEpvORzI.js"
	},
	"/assets/receipt-text-BvYDyT2l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"297-PAhOyGgcew+qcG2HyhtI5GNjfU0\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 663,
		"path": "../public/assets/receipt-text-BvYDyT2l.js"
	},
	"/assets/register-patient-dialog-C-qsFS-1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a0d-R0qKc0gDO1HIeChgjGoSkkDnYK8\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 31245,
		"path": "../public/assets/register-patient-dialog-C-qsFS-1.js"
	},
	"/assets/revenue-store-7-Refxg6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d01-BbrVgAID/1VauTx5JDSx3zG8y8A\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 3329,
		"path": "../public/assets/revenue-store-7-Refxg6.js"
	},
	"/assets/progress-BTEhQZPI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ee-EfIrqBTjByTDce/ak2CC5VppirM\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 2286,
		"path": "../public/assets/progress-BTEhQZPI.js"
	},
	"/assets/plus-D0_vGZV8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-WiYTunbM0RmESY2upNmW4hZ6290\"",
		"mtime": "2026-08-13T19:46:31.792Z",
		"size": 153,
		"path": "../public/assets/plus-D0_vGZV8.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/rotate-ccw-DYbEb_Ov.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8-gPAOalvyFfplH0OfNzhBoxbBG1w\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 200,
		"path": "../public/assets/rotate-ccw-DYbEb_Ov.js"
	},
	"/assets/routes-BMHswiD7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94b-EzP4SG2r75vi8aUVE+C0nbYvIqs\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 2379,
		"path": "../public/assets/routes-BMHswiD7.js"
	},
	"/assets/sales-filters-cXtiFKfV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e27-7yIHqh01feqPVOICwZfQlEuUFdA\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 3623,
		"path": "../public/assets/sales-filters-cXtiFKfV.js"
	},
	"/assets/sales-table-BLu9iLfs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b80-bcgTYix9s/wdrCfm9JnBhyMbJo4\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 7040,
		"path": "../public/assets/sales-table-BLu9iLfs.js"
	},
	"/assets/schedule-visit-dialog-Ukf5YlIO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e1e-XSWdxFkTOXK5yNMWQ7RzKNGRqBo\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 11806,
		"path": "../public/assets/schedule-visit-dialog-Ukf5YlIO.js"
	},
	"/assets/score-rating-C-PgdLnl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"899-RBtyDjE2FJXfFoB4Gb4SzEY0SZ8\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 2201,
		"path": "../public/assets/score-rating-C-PgdLnl.js"
	},
	"/assets/search-C2jLBZds.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-eV7MOF4hgcrLJYt2W6eyBru2SM0\"",
		"mtime": "2026-08-13T19:46:31.798Z",
		"size": 174,
		"path": "../public/assets/search-C2jLBZds.js"
	},
	"/assets/select-C5jqDo0W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57e0-Wmm9JPoqmkr+/alTVl9NiisX950\"",
		"mtime": "2026-08-13T19:46:31.801Z",
		"size": 22496,
		"path": "../public/assets/select-C5jqDo0W.js"
	},
	"/assets/shield-check-gACz1ujM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-5znyWklXMWlbD1j1sYaXBDVT+Io\"",
		"mtime": "2026-08-13T19:46:31.801Z",
		"size": 320,
		"path": "../public/assets/shield-check-gACz1ujM.js"
	},
	"/assets/sparkles-BhDrdWbR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-OMRJkcgB0//XTYYF0OcbF/cRh54\"",
		"mtime": "2026-08-13T19:46:31.801Z",
		"size": 494,
		"path": "../public/assets/sparkles-BhDrdWbR.js"
	},
	"/assets/shopping-bag-DYcdPmTw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-HAXZrpZ2IjcPQ9VEcr5eEII3r2U\"",
		"mtime": "2026-08-13T19:46:31.801Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-DYcdPmTw.js"
	},
	"/assets/status-badge-dfwKdlJY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139-r/Szp3H+7u8t9t/2zcma+FmfIeQ\"",
		"mtime": "2026-08-13T19:46:31.801Z",
		"size": 313,
		"path": "../public/assets/status-badge-dfwKdlJY.js"
	},
	"/assets/stock-history-table-DWMU1Xf8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30ac-U8euDoju8NRXYurh9wZZe6N/7N8\"",
		"mtime": "2026-08-13T19:46:31.803Z",
		"size": 12460,
		"path": "../public/assets/stock-history-table-DWMU1Xf8.js"
	},
	"/assets/styles-jZhdaw65.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"22a59-mV2mZb0CLNudevOqAjUyST+XG/8\"",
		"mtime": "2026-08-13T19:46:31.817Z",
		"size": 141913,
		"path": "../public/assets/styles-jZhdaw65.css"
	},
	"/assets/sun-GOXg5612.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-xz4qljwXLRs2ca+WB0Hy/7ogDII\"",
		"mtime": "2026-08-13T19:46:31.804Z",
		"size": 472,
		"path": "../public/assets/sun-GOXg5612.js"
	},
	"/assets/super-admin.branches.index-BHg2BjPl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"514b-PG/3hZu2bltpJxYLxZD+q+8pTpQ\"",
		"mtime": "2026-08-13T19:46:31.804Z",
		"size": 20811,
		"path": "../public/assets/super-admin.branches.index-BHg2BjPl.js"
	},
	"/assets/super-admin-BcVx3K1k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-8fsqjqYNCR5r89SXBicDFJky3Mo\"",
		"mtime": "2026-08-13T19:46:31.804Z",
		"size": 240,
		"path": "../public/assets/super-admin-BcVx3K1k.js"
	},
	"/assets/super-admin.branches._branchId-CBjMbfGm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2704-hAwz4lBDYMZRY7xUY9XwX2/i1q4\"",
		"mtime": "2026-08-13T19:46:31.804Z",
		"size": 9988,
		"path": "../public/assets/super-admin.branches._branchId-CBjMbfGm.js"
	},
	"/assets/super-admin.dashboard-DZjfHlFW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f5a-OuotfzAUOs/hpN3fIUZugHfoJac\"",
		"mtime": "2026-08-13T19:46:31.804Z",
		"size": 28506,
		"path": "../public/assets/super-admin.dashboard-DZjfHlFW.js"
	},
	"/assets/super-admin.branches._branchId-CIVy8wT_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e-aS49MBZIiq4AjVqQhgT2f+QtgBs\"",
		"mtime": "2026-08-13T19:46:31.804Z",
		"size": 606,
		"path": "../public/assets/super-admin.branches._branchId-CIVy8wT_.js"
	},
	"/assets/super-admin.index-suVdC-0e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45b-8USQYaZqBVrxWwHjEKQrlI8nqj0\"",
		"mtime": "2026-08-13T19:46:31.804Z",
		"size": 1115,
		"path": "../public/assets/super-admin.index-suVdC-0e.js"
	},
	"/assets/table-C_QRS-bN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-SdZ2td5LJAdN5X03mh9hGGEcFmI\"",
		"mtime": "2026-08-13T19:46:31.807Z",
		"size": 1642,
		"path": "../public/assets/table-C_QRS-bN.js"
	},
	"/assets/table-pagination-BILi_Zk6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67d-+4DbAewpHlwXv3B068eQ1rw9rPg\"",
		"mtime": "2026-08-13T19:46:31.808Z",
		"size": 1661,
		"path": "../public/assets/table-pagination-BILi_Zk6.js"
	},
	"/assets/target-CeXUgadI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-Cvc+U+d3fqoQfGudELSPdrOgEsU\"",
		"mtime": "2026-08-13T19:46:31.808Z",
		"size": 226,
		"path": "../public/assets/target-CeXUgadI.js"
	},
	"/assets/tabs-DWMrHfZ1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4e-sE7Mi9o3cmnoZR0SSKWY4MXiM+4\"",
		"mtime": "2026-08-13T19:46:31.808Z",
		"size": 3662,
		"path": "../public/assets/tabs-DWMrHfZ1.js"
	},
	"/assets/textarea-C10bYItF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"153-z1zoCZQbW1HzwO+pkp96YYOQn3A\"",
		"mtime": "2026-08-13T19:46:31.808Z",
		"size": 339,
		"path": "../public/assets/textarea-C10bYItF.js"
	},
	"/assets/theme-toggle-BX5Sxnpc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e7-LeI9vYaT7TEiOFcF07pNWWyBb90\"",
		"mtime": "2026-08-13T19:46:31.810Z",
		"size": 743,
		"path": "../public/assets/theme-toggle-BX5Sxnpc.js"
	},
	"/assets/therapy-table-CvAIYuCN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191-46ghpwo9QPm5aVSubIsfcYJsrxs\"",
		"mtime": "2026-08-13T19:46:31.811Z",
		"size": 401,
		"path": "../public/assets/therapy-table-CvAIYuCN.js"
	},
	"/assets/therapy-types-CG2pHpgB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac4-848n/ZJltkA5lVedfvPwaLPsDLw\"",
		"mtime": "2026-08-13T19:46:31.811Z",
		"size": 2756,
		"path": "../public/assets/therapy-types-CG2pHpgB.js"
	},
	"/assets/trending-down-CPU5PtMK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-H112T4K/G0iAuMyu3QqIobUaIRs\"",
		"mtime": "2026-08-13T19:46:31.811Z",
		"size": 178,
		"path": "../public/assets/trending-down-CPU5PtMK.js"
	},
	"/assets/user-cog-nAiogorp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"345-S+cRTrTJ3HBbox7VM+6afVTvRhw\"",
		"mtime": "2026-08-13T19:46:31.814Z",
		"size": 837,
		"path": "../public/assets/user-cog-nAiogorp.js"
	},
	"/assets/user-CXATpcwQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-uy5NoxbtYunpc0vMKlANljuIWS4\"",
		"mtime": "2026-08-13T19:46:31.811Z",
		"size": 196,
		"path": "../public/assets/user-CXATpcwQ.js"
	},
	"/assets/user-plus-CIIoQvuu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-YVzsDKZ/jfXJozMl8oLmU7x3HSk\"",
		"mtime": "2026-08-13T19:46:31.814Z",
		"size": 310,
		"path": "../public/assets/user-plus-CIIoQvuu.js"
	},
	"/assets/users-DjqrkmJP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-C5WfEcN2KtMA94Nj1SDAS66F7lk\"",
		"mtime": "2026-08-13T19:46:31.814Z",
		"size": 306,
		"path": "../public/assets/users-DjqrkmJP.js"
	},
	"/assets/useRouter-BfOmrYv_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"232b-kF39byWzG0URZsvBdXdW7oNViNA\"",
		"mtime": "2026-08-13T19:46:31.811Z",
		"size": 9003,
		"path": "../public/assets/useRouter-BfOmrYv_.js"
	},
	"/assets/utils-DojpP95n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7e-rehYKtt6GcJPoEspFNv2VomMQ30\"",
		"mtime": "2026-08-13T19:46:31.814Z",
		"size": 27262,
		"path": "../public/assets/utils-DojpP95n.js"
	},
	"/assets/wallet-C2soMKi4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-o56+5DCy+d0Ff2q5VTkQca3cfVA\"",
		"mtime": "2026-08-13T19:46:31.815Z",
		"size": 286,
		"path": "../public/assets/wallet-C2soMKi4.js"
	},
	"/assets/waves-BVHgluH7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ac-eMS8OckPv/BBLrccawefciGg9dQ\"",
		"mtime": "2026-08-13T19:46:31.815Z",
		"size": 428,
		"path": "../public/assets/waves-BVHgluH7.js"
	},
	"/assets/video-BmWtFgaz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-BfttY0qhnRL7Ho+sXn0CpPKPNps\"",
		"mtime": "2026-08-13T19:46:31.815Z",
		"size": 248,
		"path": "../public/assets/video-BmWtFgaz.js"
	},
	"/assets/widget-card-DIJXRWyG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b4-FFhEfVh8F68kfZRFpUz5eRHr9+M\"",
		"mtime": "2026-08-13T19:46:31.817Z",
		"size": 1716,
		"path": "../public/assets/widget-card-DIJXRWyG.js"
	},
	"/assets/zap-BrjQXBfZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"106-jxyvu9jgEVLIcOqZRqBUQqj7vmY\"",
		"mtime": "2026-08-13T19:46:31.817Z",
		"size": 262,
		"path": "../public/assets/zap-BrjQXBfZ.js"
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
