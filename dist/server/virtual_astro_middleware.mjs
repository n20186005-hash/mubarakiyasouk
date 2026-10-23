globalThis.process ??= {};
globalThis.process.env ??= {};
import { bt as defineMiddleware, t as sequence } from "./chunks/sequence_RIOL4Z-o.mjs";
//#region src/middleware.ts
var onRequest$1 = defineMiddleware(async (context, next) => {
	const url = new URL(context.url);
	if (url.protocol === "http:" && url.hostname === "mubarakiyasouk.com") {
		url.protocol = "https:";
		return Response.redirect(url.href, 308);
	}
	if (["/404", "/404.html"].includes(url.pathname)) return context.rewrite("/404/");
	const response = await next();
	if (response.status === 404 || url.pathname === "/404/") {
		const headers = new Headers(response.headers);
		headers.delete("location");
		headers.set("x-robots-tag", "noindex");
		headers.set("cache-control", "no-store");
		return new Response(context.request.method === "HEAD" ? null : response.body, {
			status: 404,
			headers
		});
	}
	return response;
});
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
