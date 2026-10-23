globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { t as transform } from "./image-binding-transform_DFLtH-n2.mjs";
import { env } from "cloudflare:workers";
//#region node_modules/.pnpm/@astrojs+cloudflare@14.2.5_@types+node@24.13.3_astro@7.2.9_@emnapi+core@1.11.1_@emnapi+_9a615c8f77d82d387af0e9006d67f5cf/node_modules/@astrojs/cloudflare/dist/entrypoints/image-transform-endpoint.js
var image_transform_endpoint_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async (ctx) => {
	const cache = caches.default;
	if (cache) {
		const cached = await cache.match(ctx.request.url);
		if (cached) return cached;
	}
	const response = await transform(ctx.request.url, env.IMAGES, env.ASSETS);
	if (!response.ok) return response;
	const headers = new Headers(response.headers);
	headers.set("Cache-Control", "public, max-age=31536000, immutable");
	const cachedResponse = new Response(response.body, {
		status: response.status,
		headers
	});
	if (cache) {
		const cfContext = ctx.locals.cfContext;
		if (cfContext) cfContext.waitUntil(cache.put(ctx.request.url, cachedResponse.clone()));
	}
	return cachedResponse;
};
//#endregion
//#region \0virtual:astro:page:node_modules/.pnpm/@astrojs+cloudflare@14.2.5_@types+node@24.13.3_astro@7.2.9_@emnapi+core@1.11.1_@emnapi+_9a615c8f77d82d387af0e9006d67f5cf/node_modules/@astrojs/cloudflare/dist/entrypoints/image-transform-endpoint@_@js
var page = () => image_transform_endpoint_exports;
//#endregion
export { page };
