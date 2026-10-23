globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as baseService } from "./assets_D3u1UW1l.mjs";
//#region node_modules/.pnpm/@astrojs+cloudflare@14.2.5_@types+node@24.13.3_astro@7.2.9_@emnapi+core@1.11.1_@emnapi+_9a615c8f77d82d387af0e9006d67f5cf/node_modules/@astrojs/cloudflare/dist/entrypoints/image-service-workerd.js
var image_service_workerd_default = {
	...baseService,
	async transform(inputBuffer, transform) {
		return {
			data: inputBuffer,
			format: transform.format
		};
	}
};
//#endregion
export { image_service_workerd_default as default };
