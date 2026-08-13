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
		"mtime": "2026-08-13T19:27:53.949Z",
		"size": 234,
		"path": "../public/assets/activity-DRoCPmr-.js"
	},
	"/assets/add-material-dialog-7OWk5GgG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c0d-Fcg28k3WNMapsA1MzbCY/PVCmOI\"",
		"mtime": "2026-08-13T19:27:53.950Z",
		"size": 15373,
		"path": "../public/assets/add-material-dialog-7OWk5GgG.js"
	},
	"/assets/app-Cxnfez0a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2-camqQJQKVfvOni3qMr0yI8wd//c\"",
		"mtime": "2026-08-13T19:27:53.951Z",
		"size": 242,
		"path": "../public/assets/app-Cxnfez0a.js"
	},
	"/assets/AreaChart-D9TJKF9I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ac0-kBNeuKGnGutVPOlefQNLkul9Xcs\"",
		"mtime": "2026-08-13T19:27:53.947Z",
		"size": 10944,
		"path": "../public/assets/AreaChart-D9TJKF9I.js"
	},
	"/assets/app-shell-Bn0S2nEC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6897-GDX6UJXXOwmZ3g///1t3OlbIbJA\"",
		"mtime": "2026-08-13T19:27:53.951Z",
		"size": 26775,
		"path": "../public/assets/app-shell-Bn0S2nEC.js"
	},
	"/assets/arrow-down-right-CXGpLU9G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-QeOKNeJUXXrlHyO4JO+3imd0h8Q\"",
		"mtime": "2026-08-13T19:27:53.952Z",
		"size": 169,
		"path": "../public/assets/arrow-down-right-CXGpLU9G.js"
	},
	"/assets/arrow-down-to-line-DgfDNXOE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-espaKVOtwtWTLsXOtYJ2Sp2H2Oc\"",
		"mtime": "2026-08-13T19:27:53.953Z",
		"size": 209,
		"path": "../public/assets/arrow-down-to-line-DgfDNXOE.js"
	},
	"/assets/archive-C2Z-YPkJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd-Ss31TyjL9LYUoHyogIhPm/0z7NY\"",
		"mtime": "2026-08-13T19:27:53.952Z",
		"size": 253,
		"path": "../public/assets/archive-C2Z-YPkJ.js"
	},
	"/assets/arrow-left-bpaZ5r8I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-wsAQ8mmnnrX2pXNTuZZLGJJC/SI\"",
		"mtime": "2026-08-13T19:27:53.953Z",
		"size": 165,
		"path": "../public/assets/arrow-left-bpaZ5r8I.js"
	},
	"/assets/arrow-right-t3Cv_00c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-DeP8yYJlW8CSNYCFp8zzX7DxTsI\"",
		"mtime": "2026-08-13T19:27:53.954Z",
		"size": 165,
		"path": "../public/assets/arrow-right-t3Cv_00c.js"
	},
	"/assets/arrow-up-right-ZJfs-Ruj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-1VPDpDVvV1XHfDJkhBmAWdK82rc\"",
		"mtime": "2026-08-13T19:27:53.954Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-ZJfs-Ruj.js"
	},
	"/assets/assessment-table-a3Eionpl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dcd-OpRLEWdGN9Gg9n9ToeJjalZRIg8\"",
		"mtime": "2026-08-13T19:27:53.955Z",
		"size": 7629,
		"path": "../public/assets/assessment-table-a3Eionpl.js"
	},
	"/assets/auth-BPGVw93Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"678-e7FR0jRl1+0KX7AM79xjgMcGsY4\"",
		"mtime": "2026-08-13T19:27:53.956Z",
		"size": 1656,
		"path": "../public/assets/auth-BPGVw93Q.js"
	},
	"/assets/auth.login-Bu6xj86h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c9-TFnaWWP9gKhR/dRYLWXgDM265WQ\"",
		"mtime": "2026-08-13T19:27:53.958Z",
		"size": 5065,
		"path": "../public/assets/auth.login-Bu6xj86h.js"
	},
	"/assets/auth.forgot-password-DYHWm9Gx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40c-Qw+7LaHx3ZvuA3iKAzoWJU6paoU\"",
		"mtime": "2026-08-13T19:27:53.957Z",
		"size": 1036,
		"path": "../public/assets/auth.forgot-password-DYHWm9Gx.js"
	},
	"/assets/auth.register-C_4i95Ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79d-QgoI8hKPdL3pGkQidmEU4NNGN+Y\"",
		"mtime": "2026-08-13T19:27:53.959Z",
		"size": 1949,
		"path": "../public/assets/auth.register-C_4i95Ra.js"
	},
	"/assets/badge-DAvd23Ut.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bd-5UcERcrvEiiJJzU/FP244794cEk\"",
		"mtime": "2026-08-13T19:27:53.959Z",
		"size": 1213,
		"path": "../public/assets/badge-DAvd23Ut.js"
	},
	"/assets/auth.index-BdLcQjp8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-KiBke3CO55eFlHv/2yU7/fBrXFs\"",
		"mtime": "2026-08-13T19:27:53.957Z",
		"size": 167,
		"path": "../public/assets/auth.index-BdLcQjp8.js"
	},
	"/assets/bell-ring-hw7FKdbV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-jxkWZc5P5heYuafC+84hzpOoltY\"",
		"mtime": "2026-08-13T19:27:53.960Z",
		"size": 397,
		"path": "../public/assets/bell-ring-hw7FKdbV.js"
	},
	"/assets/bell-0_U3l_0A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-IFd29VeBrvZfYiAjpzTgWqBKTzo\"",
		"mtime": "2026-08-13T19:27:53.960Z",
		"size": 290,
		"path": "../public/assets/bell-0_U3l_0A.js"
	},
	"/assets/boxes-DVk0Cb1v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"353-sT358FfHCB4C5X1FPU8+nd5cnDo\"",
		"mtime": "2026-08-13T19:27:53.961Z",
		"size": 851,
		"path": "../public/assets/boxes-DVk0Cb1v.js"
	},
	"/assets/breadcrumbs-5nOr4Osu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a9-Jn3GZv3gAi0iyYNCwqP3pSnpGVw\"",
		"mtime": "2026-08-13T19:27:53.962Z",
		"size": 2217,
		"path": "../public/assets/breadcrumbs-5nOr4Osu.js"
	},
	"/assets/building-2-Dt1TTlFw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-PlUOWgBbsoO5HIyu5rtnV+on+AE\"",
		"mtime": "2026-08-13T19:27:53.963Z",
		"size": 383,
		"path": "../public/assets/building-2-Dt1TTlFw.js"
	},
	"/assets/calendar-clock-D7uaEmS0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a-5Xc3ErFxbRfCvHxFfthh22OoU10\"",
		"mtime": "2026-08-13T19:27:53.965Z",
		"size": 378,
		"path": "../public/assets/calendar-clock-D7uaEmS0.js"
	},
	"/assets/calendar-days-BwFsR1VK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-EYQX5fbEQsOZ2UAuIzS4qgduG74\"",
		"mtime": "2026-08-13T19:27:53.965Z",
		"size": 494,
		"path": "../public/assets/calendar-days-BwFsR1VK.js"
	},
	"/assets/button-XkAE08KZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"152c-eKW8FqM1V1Ty15MNLmS2Xz0U3Yo\"",
		"mtime": "2026-08-13T19:27:53.964Z",
		"size": 5420,
		"path": "../public/assets/button-XkAE08KZ.js"
	},
	"/assets/calendar-plus-oQXtkjUO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a-yQaDH8ykDXq5ofQvzJbjKa3qjaM\"",
		"mtime": "2026-08-13T19:27:53.966Z",
		"size": 362,
		"path": "../public/assets/calendar-plus-oQXtkjUO.js"
	},
	"/assets/calendar-range-CcZz1vwJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f-l/bQBbaSNlkm23YW5DbBQAJEiJ0\"",
		"mtime": "2026-08-13T19:27:53.967Z",
		"size": 415,
		"path": "../public/assets/calendar-range-CcZz1vwJ.js"
	},
	"/assets/card-DK-pFxMz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"503-gjlemsyyX5qkDiR0JdlBwvYFWo0\"",
		"mtime": "2026-08-13T19:27:53.968Z",
		"size": 1283,
		"path": "../public/assets/card-DK-pFxMz.js"
	},
	"/assets/chart-pie-aZht8PLG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"111-ii+CxkUlCRfIYtcZfA2S+XLezSQ\"",
		"mtime": "2026-08-13T19:27:53.970Z",
		"size": 273,
		"path": "../public/assets/chart-pie-aZht8PLG.js"
	},
	"/assets/chart-column-CdgHfi8T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-2RlRrrxWrIqXZY77Xx8pNLATpXU\"",
		"mtime": "2026-08-13T19:27:53.969Z",
		"size": 251,
		"path": "../public/assets/chart-column-CdgHfi8T.js"
	},
	"/assets/chart-kB5D3o0e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b2e-6ZL+B6Xu4Z0BE0g/NBVkzaFjPI4\"",
		"mtime": "2026-08-13T19:27:53.969Z",
		"size": 11054,
		"path": "../public/assets/chart-kB5D3o0e.js"
	},
	"/assets/checkbox-5scLGas_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b3-K/a01V3avHgdIi1K3gNc7+rgajg\"",
		"mtime": "2026-08-13T19:27:53.971Z",
		"size": 4531,
		"path": "../public/assets/checkbox-5scLGas_.js"
	},
	"/assets/circle-x-uyrFHN2H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-5VHNRE43rDPcVa5TOUnS51fY0Uc\"",
		"mtime": "2026-08-13T19:27:53.972Z",
		"size": 207,
		"path": "../public/assets/circle-x-uyrFHN2H.js"
	},
	"/assets/circle-check-CLSWWMuA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ae-MCP5FcpP6qvrm7Tp8MmfXHSEBCc\"",
		"mtime": "2026-08-13T19:27:53.971Z",
		"size": 430,
		"path": "../public/assets/circle-check-CLSWWMuA.js"
	},
	"/assets/clock-C7YeUK6q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-tzkiaguWZE5MuVM0DQSWwRLEPJw\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 169,
		"path": "../public/assets/clock-C7YeUK6q.js"
	},
	"/assets/clipboard-list-BAAXJ6RH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19b-XqBmd5zxBZhuljLBxL9AN5anlcU\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 411,
		"path": "../public/assets/clipboard-list-BAAXJ6RH.js"
	},
	"/assets/collect-payment-dialog-CnK7w8VC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c03-s5Mn+KJeScl+ggw11cPVEISA17g\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 7171,
		"path": "../public/assets/collect-payment-dialog-CnK7w8VC.js"
	},
	"/assets/columns-3-Cc-3Yp45.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-pZUnNtp5D4NAC6ZzpuXR8Q5CPao\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 223,
		"path": "../public/assets/columns-3-Cc-3Yp45.js"
	},
	"/assets/Combination-CNXYXnC6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59e6-YOntNTE4eLtHLY+ulbnW1mJ9KWw\"",
		"mtime": "2026-08-13T19:27:53.948Z",
		"size": 23014,
		"path": "../public/assets/Combination-CNXYXnC6.js"
	},
	"/assets/create-package-dialog-D5rjgCa_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3aab-KyYlgIUmGdS3KBslfK+CR7kKiek\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 15019,
		"path": "../public/assets/create-package-dialog-D5rjgCa_.js"
	},
	"/assets/copy-CxlxTjiA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-JMYgtjftOrstmAb9u3lwrbcMO7w\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 236,
		"path": "../public/assets/copy-CxlxTjiA.js"
	},
	"/assets/createLucideIcon-BIjdMynN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6560-CwJlFT19wkwx73jIR8+Nif0j6SU\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 25952,
		"path": "../public/assets/createLucideIcon-BIjdMynN.js"
	},
	"/assets/clipboard-check-C7m6sHal.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130-xHvCyKUC6er7cM87Bkh14N6+lfA\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 304,
		"path": "../public/assets/clipboard-check-C7m6sHal.js"
	},
	"/assets/daily-session-store-CKrvIAiT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"790-Bb3DKPrG0FMkuXH2pZ1maP628gM\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 1936,
		"path": "../public/assets/daily-session-store-CKrvIAiT.js"
	},
	"/assets/dashboard-data-BQ0X3i3n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"258c-o47Qk/1B7+7+AJx3tkN8+8CBtAM\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 9612,
		"path": "../public/assets/dashboard-data-BQ0X3i3n.js"
	},
	"/assets/dist-BwuEULV9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6df-nuzSaZ2NVkf+Pb38tHlUKcAUjTI\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 1759,
		"path": "../public/assets/dist-BwuEULV9.js"
	},
	"/assets/dist-BXH4r74X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ca-3GoQ74XM84SYTp8Jc8HfjDueBNM\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 714,
		"path": "../public/assets/dist-BXH4r74X.js"
	},
	"/assets/dialog-sb24EZ1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"838-XitV35LeebXt36teUmQIG3eUDRk\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 2104,
		"path": "../public/assets/dialog-sb24EZ1Z.js"
	},
	"/assets/dist-CZDsQCiS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"261-6pCKcL4+1zheIAT5B6zSuMukF1o\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 609,
		"path": "../public/assets/dist-CZDsQCiS.js"
	},
	"/assets/dist-DHl06Nyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1398-HAW+bt77RCuMwmt4nowoTvj9h7w\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 5016,
		"path": "../public/assets/dist-DHl06Nyg.js"
	},
	"/assets/dist-DJIuNbSr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a8-38Car2zGxH4wprkwClF4bOf2gio\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 5288,
		"path": "../public/assets/dist-DJIuNbSr.js"
	},
	"/assets/dist-DOafrZyu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8091-GM0NKySdf569Ogzs5/kxUyn9FK0\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 32913,
		"path": "../public/assets/dist-DOafrZyu.js"
	},
	"/assets/dist-tYXtL0xU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ed-Lym9tjoxIOfDNW+45LsgkMQc90A\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 749,
		"path": "../public/assets/dist-tYXtL0xU.js"
	},
	"/assets/download-Dy0IN9b8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-LPgkK1T03QGocfKoVcNobpSnLsE\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 232,
		"path": "../public/assets/download-Dy0IN9b8.js"
	},
	"/assets/dropdown-menu-BbDilCTx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6032-ahkaOOI8IhPN75v3+aILf2tKYIM\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 24626,
		"path": "../public/assets/dropdown-menu-BbDilCTx.js"
	},
	"/assets/ellipsis-DY5_rsLr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-HVoyQbxWri5irFD+Qn/w5enLD9Q\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 226,
		"path": "../public/assets/ellipsis-DY5_rsLr.js"
	},
	"/assets/expense-store-CqeFbC04.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6de-LplmLx97GF1dFxtMS3mRAWCqt8o\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 1758,
		"path": "../public/assets/expense-store-CqeFbC04.js"
	},
	"/assets/empty-state-6RHMS8je.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"696-enCsPqzFHuUuiMJCvl8RN/DVBaE\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 1686,
		"path": "../public/assets/empty-state-6RHMS8je.js"
	},
	"/assets/file-text-BnrHo7s7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-lTafdlDssXdvn3GXICWqFCI/nSc\"",
		"mtime": "2026-08-13T19:27:53.988Z",
		"size": 385,
		"path": "../public/assets/file-text-BnrHo7s7.js"
	},
	"/assets/form-field-d410cGQB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"441-HAZDfTEoBHc/g8XpoSYOeOtFh5c\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 1089,
		"path": "../public/assets/form-field-d410cGQB.js"
	},
	"/assets/eye-DNvSYfmR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-jp5jOKYcE7aIniG4rsEHWAuUbFE\"",
		"mtime": "2026-08-13T19:27:53.973Z",
		"size": 256,
		"path": "../public/assets/eye-DNvSYfmR.js"
	},
	"/assets/funnel-DEZSKAj3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-YXOqwYjRlYJyCbGeNkh+J/gBOII\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 256,
		"path": "../public/assets/funnel-DEZSKAj3.js"
	},
	"/assets/gauge-DlkEHsN9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0-WodrYATjuPa7dxjhIjJclXy3TbI\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 176,
		"path": "../public/assets/gauge-DlkEHsN9.js"
	},
	"/assets/heart-pulse-Bv8zpbes.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d-h8G6ckDLPVTIlBiUgfTSQ0d1klg\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 333,
		"path": "../public/assets/heart-pulse-Bv8zpbes.js"
	},
	"/assets/history-DBBGAcMU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-yNVoxEpgV+31moLj5KhEokhculI\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 237,
		"path": "../public/assets/history-DBBGAcMU.js"
	},
	"/assets/house-DjfZ_cWK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"119-xl3AnpZkCJLB0jpLrqyNB5LVJcc\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 281,
		"path": "../public/assets/house-DjfZ_cWK.js"
	},
	"/assets/image-plus-DouB3hyH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16b-WMHv9+H+bOeGzTGgRfWUvTrfMs4\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 363,
		"path": "../public/assets/image-plus-DouB3hyH.js"
	},
	"/assets/generateCategoricalChart-DfFCSloD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58bb9-G3/mty3QcPsfYRPYMrFMubUkIyA\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 363449,
		"path": "../public/assets/generateCategoricalChart-DfFCSloD.js"
	},
	"/assets/input-BFZ8uEeF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"384-DCz+CdBnMgVO0Peqf7d9HyfjI8I\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 900,
		"path": "../public/assets/input-BFZ8uEeF.js"
	},
	"/assets/index-VIvwcJF6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92250-E9g2hZPZQ/u74+fT2xN64XjBK6w\"",
		"mtime": "2026-08-13T19:27:53.947Z",
		"size": 598608,
		"path": "../public/assets/index-VIvwcJF6.js"
	},
	"/assets/invoice-card-DinygM3C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c1d-V8MpLjHVE1mJVGobyijGjmTNGH0\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 3101,
		"path": "../public/assets/invoice-card-DinygM3C.js"
	},
	"/assets/key-round-DXev0fNU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163-UTQXqpoE1KdDlmacQM/ffuesBr4\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 355,
		"path": "../public/assets/key-round-DXev0fNU.js"
	},
	"/assets/label-afc68JcO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cd-bx4z8iWV4fjAdMMGvWut5kr/rXE\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 717,
		"path": "../public/assets/label-afc68JcO.js"
	},
	"/assets/kpi-card-DAExE6Ul.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"705-9agVSgG4ouBXfKyG1QB97wfez0w\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 1797,
		"path": "../public/assets/kpi-card-DAExE6Ul.js"
	},
	"/assets/layers-DhYExjom.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5-jvcq0HXKOi+ECxcQsRBFwXlPZu4\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 421,
		"path": "../public/assets/layers-DhYExjom.js"
	},
	"/assets/manager-session-DHmTlmc3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c-zsffFS4g3ck3mEt7UH6R21XZKU8\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 620,
		"path": "../public/assets/manager-session-DHmTlmc3.js"
	},
	"/assets/mail-B17kjxoT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-a65mKGHmFDIim1Fr5KlY4sI0/d0\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 213,
		"path": "../public/assets/mail-B17kjxoT.js"
	},
	"/assets/manager.assessments.index-BvR96_NY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aef-+/+qdPM/tAwF6XfajLn6MuKEsVA\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 6895,
		"path": "../public/assets/manager.assessments.index-BvR96_NY.js"
	},
	"/assets/manager-BgYKvr0F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-yrM4sapqhEXKL+beA8JiD1p0r8s\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 236,
		"path": "../public/assets/manager-BgYKvr0F.js"
	},
	"/assets/manager.assessments.new-BZPMkAwa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51aa-WdBMvKsAkwH9znE5/Ih21yuWYJA\"",
		"mtime": "2026-08-13T19:27:54.005Z",
		"size": 20906,
		"path": "../public/assets/manager.assessments.new-BZPMkAwa.js"
	},
	"/assets/manager.assessments._assessmentId-Ch7QPZ-G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d91-/y/ysXcRaWSJcEq1qFHcqBxUGW8\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 11665,
		"path": "../public/assets/manager.assessments._assessmentId-Ch7QPZ-G.js"
	},
	"/assets/manager.assessments._assessmentId-CKdekZ9Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-2fBU37Vg3ni+JXVZOeUXLWaZNvg\"",
		"mtime": "2026-08-13T19:27:53.989Z",
		"size": 644,
		"path": "../public/assets/manager.assessments._assessmentId-CKdekZ9Z.js"
	},
	"/assets/manager.daily-session.index-C59xCgMc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2137-+XQ42fjYUBNb+MYhPlAQ/fehlBE\"",
		"mtime": "2026-08-13T19:27:54.005Z",
		"size": 8503,
		"path": "../public/assets/manager.daily-session.index-C59xCgMc.js"
	},
	"/assets/manager.dashboard-IRa5qyg0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6439-0IuF/1AWjbQqunRSL+PUmkIA3T4\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 25657,
		"path": "../public/assets/manager.dashboard-IRa5qyg0.js"
	},
	"/assets/manager.follow-up.index-DSGrk_ac.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4898-ufiKBCAdS/jzFm89S/EnWfcLEJU\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 18584,
		"path": "../public/assets/manager.follow-up.index-DSGrk_ac.js"
	},
	"/assets/manager.expense.index-CImn-twX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57f3-Qpzye30b/HxGtSyjrvEgMrZlXZ4\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 22515,
		"path": "../public/assets/manager.expense.index-CImn-twX.js"
	},
	"/assets/manager.follow-up._followUpId-Dpu9rhIi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ed5-tXqj2DHxAGt8fJ6jk7jtuXZq9BY\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 11989,
		"path": "../public/assets/manager.follow-up._followUpId-Dpu9rhIi.js"
	},
	"/assets/manager.follow-up._followUpId-MhiGVTaC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"301-mDh45zIJZn9eVW4SLWaqvFeO9ko\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 769,
		"path": "../public/assets/manager.follow-up._followUpId-MhiGVTaC.js"
	},
	"/assets/manager.index-DJ7LAi8J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26-SoFMfAHVJ5oqB5t+mpFRoQvFIoc\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 38,
		"path": "../public/assets/manager.index-DJ7LAi8J.js"
	},
	"/assets/manager.materials.index-CbGqL3Wv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2879-rFjOxHmzNXF4X80ag7dGoYR8sRQ\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 10361,
		"path": "../public/assets/manager.materials.index-CbGqL3Wv.js"
	},
	"/assets/manager.materials.new-CgWGLJUX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6a-/WOvW2pwNnxwWQu4fVcyhRMV6uA\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 3178,
		"path": "../public/assets/manager.materials.new-CgWGLJUX.js"
	},
	"/assets/manager.online-session-BCywpM_T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5397-jZT1KcVhTtQ+iJRWFhT+lB7sE6w\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 21399,
		"path": "../public/assets/manager.online-session-BCywpM_T.js"
	},
	"/assets/manager.materials._materialId-BJjpCGk4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18bf-gzuB+GKGg89xYJqKto+8ian4WR8\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 6335,
		"path": "../public/assets/manager.materials._materialId-BJjpCGk4.js"
	},
	"/assets/manager.outdoor.index-BybRU9-e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e8-F6tk37A3dV8g7jw3y6OgArIE8/w\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 6376,
		"path": "../public/assets/manager.outdoor.index-BybRU9-e.js"
	},
	"/assets/manager.outdoor.new-pHgvz_KC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc4-rLIZaXQNXoih8oTRebO93dJQe8g\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 3268,
		"path": "../public/assets/manager.outdoor.new-pHgvz_KC.js"
	},
	"/assets/manager.outdoor._visitId-B5Q3gzdX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1369-yeEBw1uww8gQf3CqSI/upDu0fMY\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 4969,
		"path": "../public/assets/manager.outdoor._visitId-B5Q3gzdX.js"
	},
	"/assets/manager.packages.index-CZg6SRa7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1de3-hXFJjYUYGLYe3DYKt6pFgI+CEas\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 7651,
		"path": "../public/assets/manager.packages.index-CZg6SRa7.js"
	},
	"/assets/manager.patients.index-DysFy2S7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3552-23lNnk9WsIhThVlvLbWzK0xp+Rw\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 13650,
		"path": "../public/assets/manager.patients.index-DysFy2S7.js"
	},
	"/assets/manager.patients._patientId-DuXvzX0r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-/l+i9ehKld1tlIextqAdGzK24sk\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 632,
		"path": "../public/assets/manager.patients._patientId-DuXvzX0r.js"
	},
	"/assets/manager.patients._patientId-DhOPNeb2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c73-33VdmFQOSgxyLWCfg47GvspcJKM\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 19571,
		"path": "../public/assets/manager.patients._patientId-DhOPNeb2.js"
	},
	"/assets/manager.payments.index-270m3cCu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3dde-kJH+Fh1tIAqontPGhcHoRLwCuYo\"",
		"mtime": "2026-08-13T19:27:54.020Z",
		"size": 15838,
		"path": "../public/assets/manager.payments.index-270m3cCu.js"
	},
	"/assets/manager.payments.collect-D15uR4XC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23e5-Eq6bl+E43lMD2+HrnopCIC4Zjbo\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 9189,
		"path": "../public/assets/manager.payments.collect-D15uR4XC.js"
	},
	"/assets/manager.payments._paymentId-BQuEQ0S8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-rZoCqeEFYuE0EVa22D071xf5PmM\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 632,
		"path": "../public/assets/manager.payments._paymentId-BQuEQ0S8.js"
	},
	"/assets/manager.therapy.index-vidQ4Qal.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36d4-31pfeyWu4KVRB7IUt7/a3TlHX8Q\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 14036,
		"path": "../public/assets/manager.therapy.index-vidQ4Qal.js"
	},
	"/assets/manager.revenue-B1ALu-dW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5633-g+V5Ylkr3s7KWUf/bvS9bsSl+9U\"",
		"mtime": "2026-08-13T19:27:54.020Z",
		"size": 22067,
		"path": "../public/assets/manager.revenue-B1ALu-dW.js"
	},
	"/assets/manager.payments._paymentId-diOV9WpQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34e1-HzOav6qYWMHlaM4EhhgebkNQonc\"",
		"mtime": "2026-08-13T19:27:54.006Z",
		"size": 13537,
		"path": "../public/assets/manager.payments._paymentId-diOV9WpQ.js"
	},
	"/assets/manager.sales-4hVw15hp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bff-X6/qaxGKaY4FOX+qU+ATvY4yKY8\"",
		"mtime": "2026-08-13T19:27:54.022Z",
		"size": 3071,
		"path": "../public/assets/manager.sales-4hVw15hp.js"
	},
	"/assets/manager.therapy._sessionId-CkxRXPth.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"287-s12oYGkaeS68VupcrEhZHhvyMeg\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 647,
		"path": "../public/assets/manager.therapy._sessionId-CkxRXPth.js"
	},
	"/assets/manager.therapy.new-CRht94jo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a3f-EWq+CBpyUsbD6jPz9gERNMIzaOI\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 19007,
		"path": "../public/assets/manager.therapy.new-CRht94jo.js"
	},
	"/assets/manager.therapy._sessionId-CYLoo7VP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3659-9SLpAceU43DWLa7kWb2y3E2aW7Q\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 13913,
		"path": "../public/assets/manager.therapy._sessionId-CYLoo7VP.js"
	},
	"/assets/map-pin-BO6b7AxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-pag9ENZiU55oi5a3qd72pvb4ddQ\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 259,
		"path": "../public/assets/map-pin-BO6b7AxN.js"
	},
	"/assets/material-thumbnail-BoTnj-g0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86b-M5hnXcsn5KG7XfmiEl7DsfyJwvc\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 2155,
		"path": "../public/assets/material-thumbnail-BoTnj-g0.js"
	},
	"/assets/minus-wBUGeEEd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-oJh0tQcKlRwknlDaaL6QLpgHua0\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 117,
		"path": "../public/assets/minus-wBUGeEEd.js"
	},
	"/assets/matchContext-DLaIM3Qs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c-ApxB0vFMIi0NHw7Khr2mnmcBQxQ\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 140,
		"path": "../public/assets/matchContext-DLaIM3Qs.js"
	},
	"/assets/new-follow-up-dialog-BqnCD6lD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a1d-41qThpqbbRETw+Zu8PdS5jMOkrs\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 10781,
		"path": "../public/assets/new-follow-up-dialog-BqnCD6lD.js"
	},
	"/assets/new-sale-dialog-C2ijWyHh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1578-Q4AUWma957wzD5Xf25sxTd7sYGY\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 5496,
		"path": "../public/assets/new-sale-dialog-C2ijWyHh.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/outdoor-widgets-DK3JKr6g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bdd-TTWodomn6DAap2OlL05y5NtuuhU\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 19421,
		"path": "../public/assets/outdoor-widgets-DK3JKr6g.js"
	},
	"/assets/package-check-Bbi7dIBp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-WCqrK3Scqig+AFMgSkALeNq7ReY\"",
		"mtime": "2026-08-13T19:27:54.023Z",
		"size": 426,
		"path": "../public/assets/package-check-Bbi7dIBp.js"
	},
	"/assets/page-header-Bgil1ArT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"363-TtyBoszBYm1H8OCvws/j+Tc4Qgk\"",
		"mtime": "2026-08-13T19:27:54.035Z",
		"size": 867,
		"path": "../public/assets/page-header-Bgil1ArT.js"
	},
	"/assets/patient-store-BhsKCNND.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"595-e9gbl8FNFH/TWJCq1ZWbwlgWOjM\"",
		"mtime": "2026-08-13T19:27:54.035Z",
		"size": 1429,
		"path": "../public/assets/patient-store-BhsKCNND.js"
	},
	"/assets/pencil-line-yz4qKGJC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e-kZ/FoepW1qrhvkrg5N8Ipt5DepI\"",
		"mtime": "2026-08-13T19:27:54.040Z",
		"size": 318,
		"path": "../public/assets/pencil-line-yz4qKGJC.js"
	},
	"/assets/patient-table-CqDDEHUH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f14-CnNWWsLi1Aq+SwtLJbSZdEGhNFA\"",
		"mtime": "2026-08-13T19:27:54.035Z",
		"size": 7956,
		"path": "../public/assets/patient-table-CqDDEHUH.js"
	},
	"/assets/phone-Bq_yC29u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-z6MCP930p8/w5IJLXU0oTd6yz5s\"",
		"mtime": "2026-08-13T19:27:54.041Z",
		"size": 322,
		"path": "../public/assets/phone-Bq_yC29u.js"
	},
	"/assets/phone-call-BQPKUNzf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-kiUH8SWQK9lYqS0xZkCjreX27pY\"",
		"mtime": "2026-08-13T19:27:54.041Z",
		"size": 423,
		"path": "../public/assets/phone-call-BQPKUNzf.js"
	},
	"/assets/payment-summary-card-JMMJYjEM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2839-6bEMaXCClgP62LcW9hxY1joUx14\"",
		"mtime": "2026-08-13T19:27:54.035Z",
		"size": 10297,
		"path": "../public/assets/payment-summary-card-JMMJYjEM.js"
	},
	"/assets/PieChart-5ZCOWO1k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65c7-Qo3jaLxPv0GKEAQz4JJs53ws/UI\"",
		"mtime": "2026-08-13T19:27:53.949Z",
		"size": 26055,
		"path": "../public/assets/PieChart-5ZCOWO1k.js"
	},
	"/assets/plus-D0_vGZV8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-WiYTunbM0RmESY2upNmW4hZ6290\"",
		"mtime": "2026-08-13T19:27:54.041Z",
		"size": 153,
		"path": "../public/assets/plus-D0_vGZV8.js"
	},
	"/assets/pencil-JxKGRVeC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114-JT1wWF/bvohRyGIevtMoMZEkzDg\"",
		"mtime": "2026-08-13T19:27:54.038Z",
		"size": 276,
		"path": "../public/assets/pencil-JxKGRVeC.js"
	},
	"/assets/printer-Co0cgbyc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13f-WLvR5RwLF/lGncvFp24NAjLS+3Q\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 319,
		"path": "../public/assets/printer-Co0cgbyc.js"
	},
	"/assets/power-NZaIiFkH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-7xXSlNH2ntiQAJ1/h9zbSNGetiw\"",
		"mtime": "2026-08-13T19:27:54.043Z",
		"size": 173,
		"path": "../public/assets/power-NZaIiFkH.js"
	},
	"/assets/progress-BTEhQZPI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ee-EfIrqBTjByTDce/ak2CC5VppirM\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 2286,
		"path": "../public/assets/progress-BTEhQZPI.js"
	},
	"/assets/receipt-DEpvORzI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-EvTQSEs04ZrrQSVTola2IrTGSMc\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 292,
		"path": "../public/assets/receipt-DEpvORzI.js"
	},
	"/assets/register-patient-dialog-DLKAa_pk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7881-rkq2FhhJ3+Rf8DjIsUrfZEfDivM\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 30849,
		"path": "../public/assets/register-patient-dialog-DLKAa_pk.js"
	},
	"/assets/receipt-text-BvYDyT2l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"297-PAhOyGgcew+qcG2HyhtI5GNjfU0\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 663,
		"path": "../public/assets/receipt-text-BvYDyT2l.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/revenue-store-CmkruwXW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd6-XvciroSKmvv1LSstZLUOewwxyl0\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 3286,
		"path": "../public/assets/revenue-store-CmkruwXW.js"
	},
	"/assets/rotate-ccw-DYbEb_Ov.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8-gPAOalvyFfplH0OfNzhBoxbBG1w\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 200,
		"path": "../public/assets/rotate-ccw-DYbEb_Ov.js"
	},
	"/assets/routes-BMHswiD7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94b-EzP4SG2r75vi8aUVE+C0nbYvIqs\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 2379,
		"path": "../public/assets/routes-BMHswiD7.js"
	},
	"/assets/sales-filters-N79TfEmO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e27-LiigqSoB2I6l09UZhHKX+XhgYYM\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 3623,
		"path": "../public/assets/sales-filters-N79TfEmO.js"
	},
	"/assets/sales-table-C5X5xeaj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b80-xum/NwAVpG53OPq100Afj+cp6G4\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 7040,
		"path": "../public/assets/sales-table-C5X5xeaj.js"
	},
	"/assets/schedule-visit-dialog-NCNWq7mb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e1e-RSheYpqt5+i7wlAOEAAvL0Py/jU\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 11806,
		"path": "../public/assets/schedule-visit-dialog-NCNWq7mb.js"
	},
	"/assets/search-C2jLBZds.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-eV7MOF4hgcrLJYt2W6eyBru2SM0\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 174,
		"path": "../public/assets/search-C2jLBZds.js"
	},
	"/assets/score-rating-DRCCHDqx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"899-MU+7dwelQ569iNQirlh0ehEbbs0\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 2201,
		"path": "../public/assets/score-rating-DRCCHDqx.js"
	},
	"/assets/select-C5jqDo0W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57e0-Wmm9JPoqmkr+/alTVl9NiisX950\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 22496,
		"path": "../public/assets/select-C5jqDo0W.js"
	},
	"/assets/shield-check-gACz1ujM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-5znyWklXMWlbD1j1sYaXBDVT+Io\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 320,
		"path": "../public/assets/shield-check-gACz1ujM.js"
	},
	"/assets/shopping-bag-DYcdPmTw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-HAXZrpZ2IjcPQ9VEcr5eEII3r2U\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-DYcdPmTw.js"
	},
	"/assets/sparkles-BhDrdWbR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-OMRJkcgB0//XTYYF0OcbF/cRh54\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 494,
		"path": "../public/assets/sparkles-BhDrdWbR.js"
	},
	"/assets/status-badge-dfwKdlJY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139-r/Szp3H+7u8t9t/2zcma+FmfIeQ\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 313,
		"path": "../public/assets/status-badge-dfwKdlJY.js"
	},
	"/assets/stock-history-table-9MQOurNf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30ac-6Erw0GiqJR4KEEXoH0nZPC9BU9Y\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 12460,
		"path": "../public/assets/stock-history-table-9MQOurNf.js"
	},
	"/assets/sun-GOXg5612.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-xz4qljwXLRs2ca+WB0Hy/7ogDII\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 472,
		"path": "../public/assets/sun-GOXg5612.js"
	},
	"/assets/styles-jZhdaw65.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"22a59-mV2mZb0CLNudevOqAjUyST+XG/8\"",
		"mtime": "2026-08-13T19:27:54.075Z",
		"size": 141913,
		"path": "../public/assets/styles-jZhdaw65.css"
	},
	"/assets/super-admin-DtorqN5X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-pqDCHX4YSl/rRNw4+VOOM7wXAIc\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 240,
		"path": "../public/assets/super-admin-DtorqN5X.js"
	},
	"/assets/super-admin.branches.index-CKNqWl-c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"514b-7luxg80X4FCSNCYuCWNfyYhIK3Q\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 20811,
		"path": "../public/assets/super-admin.branches.index-CKNqWl-c.js"
	},
	"/assets/super-admin.branches._branchId-Dy321o06.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e-QxiWLunWG5Myw6+PCKT2oJ69jsI\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 606,
		"path": "../public/assets/super-admin.branches._branchId-Dy321o06.js"
	},
	"/assets/super-admin.branches._branchId-DO3e_19e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2704-3i8YXvHI1IfutRKpnLwOgsCEmNg\"",
		"mtime": "2026-08-13T19:27:54.044Z",
		"size": 9988,
		"path": "../public/assets/super-admin.branches._branchId-DO3e_19e.js"
	},
	"/assets/super-admin.index-DGqRz1DF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45b-rYUMiuK+XcILTViEuogrnTuo+X4\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 1115,
		"path": "../public/assets/super-admin.index-DGqRz1DF.js"
	},
	"/assets/table-C_QRS-bN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-SdZ2td5LJAdN5X03mh9hGGEcFmI\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 1642,
		"path": "../public/assets/table-C_QRS-bN.js"
	},
	"/assets/super-admin.dashboard-DV6jpTpm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f5a-jDtfb1Y6df2rXO4Yc8c7j5Grf0M\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 28506,
		"path": "../public/assets/super-admin.dashboard-DV6jpTpm.js"
	},
	"/assets/table-pagination-Dn2WP7Vc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67d-t8FVVc6PpjHFwX59fLCDUp3f/a4\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 1661,
		"path": "../public/assets/table-pagination-Dn2WP7Vc.js"
	},
	"/assets/tabs-DPi28pj_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4e-W88An5wpAcyGKrrinWOLTMcGtpk\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 3662,
		"path": "../public/assets/tabs-DPi28pj_.js"
	},
	"/assets/target-CeXUgadI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-Cvc+U+d3fqoQfGudELSPdrOgEsU\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 226,
		"path": "../public/assets/target-CeXUgadI.js"
	},
	"/assets/textarea-C10bYItF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"153-z1zoCZQbW1HzwO+pkp96YYOQn3A\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 339,
		"path": "../public/assets/textarea-C10bYItF.js"
	},
	"/assets/therapy-table-BS_lMyXm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191-KrjeiMKyRfJLj2omLQ2XYrhgWGw\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 401,
		"path": "../public/assets/therapy-table-BS_lMyXm.js"
	},
	"/assets/theme-toggle-CJh4FFZc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e7-GqZoHKh9FozgnwoWWgPzQUmtagU\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 743,
		"path": "../public/assets/theme-toggle-CJh4FFZc.js"
	},
	"/assets/therapy-types-CG2pHpgB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac4-848n/ZJltkA5lVedfvPwaLPsDLw\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 2756,
		"path": "../public/assets/therapy-types-CG2pHpgB.js"
	},
	"/assets/user-cog-nAiogorp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"345-S+cRTrTJ3HBbox7VM+6afVTvRhw\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 837,
		"path": "../public/assets/user-cog-nAiogorp.js"
	},
	"/assets/trending-down-CPU5PtMK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-H112T4K/G0iAuMyu3QqIobUaIRs\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 178,
		"path": "../public/assets/trending-down-CPU5PtMK.js"
	},
	"/assets/user-CXATpcwQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-uy5NoxbtYunpc0vMKlANljuIWS4\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 196,
		"path": "../public/assets/user-CXATpcwQ.js"
	},
	"/assets/user-plus-CIIoQvuu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-YVzsDKZ/jfXJozMl8oLmU7x3HSk\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 310,
		"path": "../public/assets/user-plus-CIIoQvuu.js"
	},
	"/assets/users-DjqrkmJP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-C5WfEcN2KtMA94Nj1SDAS66F7lk\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 306,
		"path": "../public/assets/users-DjqrkmJP.js"
	},
	"/assets/useRouter-BfOmrYv_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"232b-kF39byWzG0URZsvBdXdW7oNViNA\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 9003,
		"path": "../public/assets/useRouter-BfOmrYv_.js"
	},
	"/assets/wallet-C2soMKi4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-o56+5DCy+d0Ff2q5VTkQca3cfVA\"",
		"mtime": "2026-08-13T19:27:54.072Z",
		"size": 286,
		"path": "../public/assets/wallet-C2soMKi4.js"
	},
	"/assets/video-BmWtFgaz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-BfttY0qhnRL7Ho+sXn0CpPKPNps\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 248,
		"path": "../public/assets/video-BmWtFgaz.js"
	},
	"/assets/widget-card-sNvdJfmX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b4-uG1vi4QvtFJjFV1SuzHF5ZhHa+o\"",
		"mtime": "2026-08-13T19:27:54.074Z",
		"size": 1716,
		"path": "../public/assets/widget-card-sNvdJfmX.js"
	},
	"/assets/waves-BVHgluH7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ac-eMS8OckPv/BBLrccawefciGg9dQ\"",
		"mtime": "2026-08-13T19:27:54.073Z",
		"size": 428,
		"path": "../public/assets/waves-BVHgluH7.js"
	},
	"/assets/utils-DojpP95n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7e-rehYKtt6GcJPoEspFNv2VomMQ30\"",
		"mtime": "2026-08-13T19:27:54.060Z",
		"size": 27262,
		"path": "../public/assets/utils-DojpP95n.js"
	},
	"/assets/zap-BrjQXBfZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"106-jxyvu9jgEVLIcOqZRqBUQqj7vmY\"",
		"mtime": "2026-08-13T19:27:54.075Z",
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
